#!/usr/bin/env node
/**
 * Migrate Framer blog posts → content/blog/*.mdx
 * Usage: FIRECRAWL_API_KEY=... node scripts/migrate-blog-mdx.mjs
 * Falls back to writing stub MDX from posts.ts excerpts if no key / scrape fails.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "content/blog");
fs.mkdirSync(outDir, { recursive: true });

const SLUGS = [
  "how-distributors-can-automate-quote-to-order-processes-2026-playbook",
  "why-manufacturers-need-a-modern-b2b-ecommerce-platform-in-2026",
  "composable-commerce-for-b2b-a-decision-guide",
  "ai-quote-generation-in-b2b-what-is-real-vs-marketing",
  "the-universal-commerce-protocol-is-here.-most-b2b-platforms-aren-t-ready-for-it",
  "why-most-b2b-erp-integrations-fail",
  "the-real-cost-of-headless-commerce-for-b2b-companies",
  "erp-first-vs-commerce-first-architecture-in-b2b-what-actually-works",
  "b2b-reordering-is-broken-and-why-that-matters",
  "how-b2b-teams-manage-customer-specific-pricing-at-scale",
  "the-real-cost-of-manual-quote-approvals-in-b2b",
  "why-manual-b2b-quoting-is-costing-you-deals",
  "mach-architecture-for-modern-b2b-commerce",
  "ai-quote-engine-for-b2b-commerce",
  "b2b-commerce-and-headless-architecture",
  "what-is-b2b-ecommerce-a-complete-guide",
  "composable-commerce-for-b2b-businesses",
  "what-is-mach-architecture-a-complete-guide",
  "what-is-buyience-a-mordern-b2b-commerce-platform",
];

function cleanMarkdown(md) {
  let text = md;

  // Drop chrome before the first H1
  const h1 = text.search(/^# /m);
  if (h1 > 0) text = text.slice(h1);

  // Remove author/meta block between H1+dek and cover image / first ##
  text = text.replace(
    /\n\[By\]\([^)]+\)\n+\n\[Jordian F\.\]\([^)]+\)\n+\n[A-Za-z]+ \d{1,2}, \d{4}\n+\n\d+\nmin read\n+/g,
    "\n\n",
  );

  // Remove cover image (rendered in article header)
  text = text.replace(/\n!\[Blog Image\]\([^)]+\)\n+/g, "\n\n");

  // Drop duplicate first paragraph after cover (often repeats dek)
  // Keep as-is; duplicate is rare after cleaning

  // Remove prev/next and final CTA sections
  text = text.replace(/\n\[!\[Blog Image\][\s\S]*$/m, "\n");
  text = text.replace(/\nGET STARTED[\s\S]*$/m, "\n");
  text = text.replace(/\n## Ready to Stop Fighting Your Platform\?[\s\S]*$/m, "\n");

  // Normalize bold headings: ## **Title** → ## Title
  text = text.replace(/^(#{2,4})\s+\*\*(.+?)\*\*\s*$/gm, "$1 $2");

  // Fix escaped brackets used as CTAs
  text = text.replace(/\\\[/g, "[").replace(/\\\]/g, "]");

  // Convert buyience.com absolute blog links to relative
  text = text.replace(/https:\/\/buyience\.com\/blog\//g, "/blog/");
  text = text.replace(/\(https:\/\/buyience\.com\/\)/g, "(/)");

  // Collapse excess blank lines
  text = text.replace(/\n{3,}/g, "\n\n").trim() + "\n";

  // Remove H1 (title rendered in page header)
  text = text.replace(/^# .+\n+/, "");

  return text;
}

async function scrape(slug) {
  const key = process.env.FIRECRAWL_API_KEY;
  if (!key) return null;
  const url = `https://buyience.com/blog/${slug}`;
  const res = await fetch("https://api.firecrawl.dev/v1/scrape", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      formats: ["markdown"],
      onlyMainContent: true,
    }),
  });
  if (!res.ok) {
    console.warn("scrape fail", slug, res.status);
    return null;
  }
  const json = await res.json();
  return json?.data?.markdown ?? json?.markdown ?? null;
}

async function main() {
  const cacheDir = path.join(root, "scripts/.blog-scrape-cache");
  fs.mkdirSync(cacheDir, { recursive: true });

  for (const slug of SLUGS) {
    const outPath = path.join(outDir, `${slug}.mdx`);
    const cachePath = path.join(cacheDir, `${slug}.md`);

    let md = null;
    if (fs.existsSync(cachePath)) {
      md = fs.readFileSync(cachePath, "utf8");
      console.log("cache", slug);
    } else {
      md = await scrape(slug);
      if (md) {
        fs.writeFileSync(cachePath, md);
        console.log("scraped", slug);
        // polite delay
        await new Promise((r) => setTimeout(r, 800));
      }
    }

    if (md) {
      const cleaned = cleanMarkdown(md);
      fs.writeFileSync(outPath, cleaned);
      console.log("wrote", slug, cleaned.length, "chars");
    } else if (!fs.existsSync(outPath)) {
      console.log("skip (no scrape)", slug);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
