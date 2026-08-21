import { blogPosts, type BlogPost, type BlogPostCategory } from "../data/posts";
import type { BlogCategoryId } from "../data/categories";

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) ?? posts[0];
}

export function getPostsByCategory(category: BlogCategoryId): BlogPost[] {
  const posts = getAllPosts();
  if (category === "all") return posts;
  return posts.filter((p) => p.category === category);
}

export function getCategoryCounts(): Record<BlogCategoryId, number> {
  const posts = getAllPosts();
  return {
    all: posts.length,
    b2b: posts.filter((p) => p.category === "b2b").length,
    technology: posts.filter((p) => p.category === "technology").length,
    product: posts.filter((p) => p.category === "product").length,
    trends: posts.filter((p) => p.category === "trends").length,
  };
}

export function getAdjacentPosts(slug: string): {
  prev: BlogPost | null;
  next: BlogPost | null;
} {
  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? posts[index - 1] : null,
    next: index < posts.length - 1 ? posts[index + 1] : null,
  };
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = getAllPosts().filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  const extras = getAllPosts().filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...extras].slice(0, limit);
}

export function formatPublishedDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function isValidCategory(value: string): value is BlogPostCategory {
  return value === "b2b" || value === "technology" || value === "product" || value === "trends";
}
