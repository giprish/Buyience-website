#!/usr/bin/env node
/**
 * Clean Framer-scraped blog markdown into MDX body + extract meta.
 * Usage: node scripts/clean-blog-scrape.mjs <slug> [slug...]
 * Reads: scripts/.blog-scrape-cache/<slug>.md
 * Writes: content/blog/<slug>.mdx
 * Updates: scripts/.blog-scrape-cache/meta.json
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CACHE = path.join(ROOT, "scripts/.blog-scrape-cache");
const OUT = path.join(ROOT, "content/blog");
const META_PATH = path.join(CACHE, "meta.json");
const SKIP_IF_CHARS = 2000;

const MONTHS = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
};

function parsePublishedAt(md) {
  const m = md.match(
    /\n(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\n/i,
  );
  if (!m) return null;
  const raw = m[0].trim();
  const parts = raw.match(/^(\w+)\s+(\d{1,2}),\s+(\d{4})$/i);
  if (!parts) return null;
  const month = MONTHS[parts[1].toLowerCase()];
  if (month == null) return null;
  const day = String(Number(parts[2])).padStart(2, "0");
  const year = parts[3];
  const mm = String(month + 1).padStart(2, "0");
  return `${year}-${mm}-${day}`;
}

function parseReadingTime(md) {
  const m = md.match(/(\d+)\s*\n\s*min read/i) || md.match(/(\d+)\s+min read/i);
  if (!m) return null;
  return `${m[1]} min read`;
}

function cleanMarkdown(raw) {
  let md = raw.replace(/\r\n/g, "\n");

  // 1. Start at first H1
  const h1Idx = md.search(/^# /m);
  if (h1Idx >= 0) md = md.slice(h1Idx);

  // Extract meta before stripping
  const publishedAt = parsePublishedAt(md);
  const readingTime = parseReadingTime(md);

  // 4. Cut prev/next nav + footer CTA (from first [![Blog Image] link)
  const navIdx = md.search(/\[!\[Blog Image\]/);
  if (navIdx >= 0) md = md.slice(0, navIdx);

  // Also strip GET STARTED / Ready to Stop Fighting if somehow still present
  const ctaIdx = md.search(/\nGET STARTED\n/);
  if (ctaIdx >= 0) md = md.slice(0, ctaIdx);
  const readyIdx = md.search(/\n## Ready to Stop Fighting Your Platform\?/);
  if (readyIdx >= 0) md = md.slice(0, readyIdx);

  // 2. Remove author/meta block
  md = md.replace(
    /\n\[By\]\([^\)]*\)\s*\n\s*\n\[Jordian F\.\]\([^\)]*\)\s*\n\s*\n(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\s*\n\s*\n\d+\s*\n\s*min read\s*\n/gi,
    "\n",
  );
  // Fallback looser meta removal
  md = md.replace(
    /\n\[By\]\([^\)]*\)\s*\n[\s\S]*?\n\d+\s*\n\s*min read\s*\n/i,
    "\n",
  );

  // 3. Remove cover ![Blog Image](...)
  md = md.replace(/\n!\[Blog Image\]\([^\)]+\)\s*\n/g, "\n");

  // 6. Remove H1 line
  md = md.replace(/^# .+\n+/, "");

  // 5. ## **Title** → ## Title (and ###)
  md = md.replace(/^(#{2,6})\s+\*\*(.+?)\*\*\s*$/gm, "$1 $2");

  // 7. Internal blog links
  md = md.replace(/https:\/\/buyience\.com\/blog\//g, "/blog/");

  // 8. Collapse 3+ newlines to 2
  md = md.replace(/\n{3,}/g, "\n\n");

  return {
    body: md.trim() + "\n",
    publishedAt,
    readingTime,
  };
}

function processSlug(slug) {
  const mdxPath = path.join(OUT, `${slug}.mdx`);
  if (fs.existsSync(mdxPath)) {
    const existing = fs.readFileSync(mdxPath, "utf8");
    if (existing.length > SKIP_IF_CHARS) {
      return {
        slug,
        skipped: true,
        reason: `existing mdx has ${existing.length} chars`,
        chars: existing.length,
      };
    }
  }

  const rawPath = path.join(CACHE, `${slug}.md`);
  if (!fs.existsSync(rawPath)) {
    return { slug, error: `missing raw cache: ${rawPath}` };
  }

  const raw = fs.readFileSync(rawPath, "utf8");
  if (!raw.trim()) {
    return { slug, error: "empty raw markdown" };
  }

  const { body, publishedAt, readingTime } = cleanMarkdown(raw);
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(mdxPath, body, "utf8");

  let meta = {};
  if (fs.existsSync(META_PATH)) {
    try {
      meta = JSON.parse(fs.readFileSync(META_PATH, "utf8"));
    } catch {
      meta = {};
    }
  }
  meta[slug] = {
    publishedAt: publishedAt || null,
    readingTime: readingTime || null,
  };
  fs.writeFileSync(META_PATH, JSON.stringify(meta, null, 2) + "\n", "utf8");

  return {
    slug,
    chars: body.length,
    publishedAt,
    readingTime,
    written: true,
  };
}

const slugs = process.argv.slice(2);
if (slugs.length === 0) {
  console.error("Usage: node clean-blog-scrape.mjs <slug>...");
  process.exit(1);
}

const results = slugs.map(processSlug);
console.log(JSON.stringify(results, null, 2));
