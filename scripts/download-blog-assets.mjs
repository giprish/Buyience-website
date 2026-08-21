#!/usr/bin/env node
/**
 * One-shot helper: download Framer cover + author images into public/blog.
 * Run: node scripts/download-blog-assets.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const coversDir = path.join(root, "public/blog/covers");
const authorsDir = path.join(root, "public/blog/authors");

fs.mkdirSync(coversDir, { recursive: true });
fs.mkdirSync(authorsDir, { recursive: true });

const covers = {
  "how-distributors-can-automate-quote-to-order-processes-2026-playbook.png":
    "https://framerusercontent.com/images/tGHkijHUUGDvCHpogZmnrsLEuE8.png?width=1488&height=720",
  "why-manufacturers-need-a-modern-b2b-ecommerce-platform-in-2026.png":
    "https://framerusercontent.com/images/7O140k0rXES7R01xjlY1V7XlA.png?width=1488&height=720",
  "composable-commerce-for-b2b-a-decision-guide.png":
    "https://framerusercontent.com/images/FkIWTpDhAEl6b6y9IHL3af50Ss.png?width=1488&height=720",
  "ai-quote-generation-in-b2b-what-is-real-vs-marketing.png":
    "https://framerusercontent.com/images/Gu4jA7auR2eBkxyQ4FiGe7MueM.png?width=1488&height=720",
  "the-universal-commerce-protocol-is-here.-most-b2b-platforms-aren-t-ready-for-it.png":
    "https://framerusercontent.com/images/KnCO4RLDUdIYAgASgVZetkSf2U.png?width=1488&height=720",
  "why-most-b2b-erp-integrations-fail.png":
    "https://framerusercontent.com/images/6ltwghu1aC7SUlfCmjYeTuupto.png?width=1488&height=720",
  "the-real-cost-of-headless-commerce-for-b2b-companies.png":
    "https://framerusercontent.com/images/UG56uuI3hthkdKIzbT6HYmaZ22k.png?width=1488&height=720",
  "erp-first-vs-commerce-first-architecture-in-b2b-what-actually-works.png":
    "https://framerusercontent.com/images/OVzBzEWX3gr8322YcD1Bms8sUUs.png?width=1488&height=720",
  "b2b-reordering-is-broken-and-why-that-matters.png":
    "https://framerusercontent.com/images/Hv2iL7GMfd1dU0m9YF0BFh7HugM.png?width=1488&height=720",
  "how-b2b-teams-manage-customer-specific-pricing-at-scale.png":
    "https://framerusercontent.com/images/y1NV313Q7gEgJy4TM8sbBdzbkM.png?width=1488&height=720",
  "the-real-cost-of-manual-quote-approvals-in-b2b.png":
    "https://framerusercontent.com/images/XxF9wNjtL1mio6wz3WfoV1x4A.png?width=1488&height=720",
  "why-manual-b2b-quoting-is-costing-you-deals.png":
    "https://framerusercontent.com/images/CrPuoZD0jV63Nq6cI7Lxj9rwjU.png?width=1488&height=720",
  "mach-architecture-for-modern-b2b-commerce.png":
    "https://framerusercontent.com/images/3ZDLEqvx14GhmngENzUhRjoCk.png?width=1488&height=720",
  "ai-quote-engine-for-b2b-commerce.png":
    "https://framerusercontent.com/images/bUsujtRXDCR6q4KWXd92972ans.png?width=1488&height=720",
  "b2b-commerce-and-headless-architecture.png":
    "https://framerusercontent.com/images/E2ICINg3R6vOi3R5gMzFMaqynu4.png?width=1488&height=720",
  "what-is-b2b-ecommerce-a-complete-guide.png":
    "https://framerusercontent.com/images/gf3RgkLDq3togyRokvLuy18E.png?width=1488&height=720",
  "composable-commerce-for-b2b-businesses.png":
    "https://framerusercontent.com/images/CrPuoZD0jV63Nq6cI7Lxj9rwjU.png?width=1488&height=720",
  "what-is-mach-architecture-a-complete-guide.png":
    "https://framerusercontent.com/images/QeGWzK4UYg7drghcYAj0EnVhE.png?width=1488&height=720",
  "what-is-buyience-a-mordern-b2b-commerce-platform.png":
    "https://framerusercontent.com/images/MLHfU2yTLVvyxytSAZNiJMAtM.png?width=1488&height=720",
};

const authorUrl =
  "https://framerusercontent.com/images/SeR7rpcvzjEEoEYNaarHxLxmVg.png?width=1123&height=1123";

async function download(url, dest) {
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    console.log("skip", path.basename(dest));
    return;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  console.log("ok", path.basename(dest), buf.length);
}

async function main() {
  for (const [name, url] of Object.entries(covers)) {
    await download(url, path.join(coversDir, name));
  }
  await download(authorUrl, path.join(authorsDir, "jordian.jpg"));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
