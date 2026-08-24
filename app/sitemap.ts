import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/blog/lib/posts";
import { SITE_URL } from "@/lib/seo";

const STATIC_ROUTES = [
  "/",
  "/about",
  "/pricing",
  "/contact",
  "/blog",
  "/solutions",
  "/platform-overview",
  "/automotive-solutions",
  "/mro-solutions",
  "/integrations",
  "/wordpress-plugin-buyience-novacore-b2b-quote-engine",
  "/cpq-configurator",
  "/order-management",
  "/b2b-storefront",
  "/inventory-management",
  "/supplier-management",
  "/mach-architecture",
  "/ai-quote-engine",
  "/digital-sales-room",
  "/become-a-solution-partner",
  "/become-a-technology-partner",
  "/thank-you",
  "/request-a-demo",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-policy",
  "/corporate-gifting",
  "/industrial-packaging",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : undefined,
  }));

  return [...staticEntries, ...blogEntries];
}
