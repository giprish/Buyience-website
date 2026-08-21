"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "../data/posts";
import { blogCategories, type BlogCategoryId } from "../data/categories";
import BlogCategories from "./BlogCategories";
import BlogCard from "./BlogCard";

type Props = {
  posts: BlogPost[];
  featuredSlug: string;
  counts: Record<BlogCategoryId, number>;
};

export default function BlogListing({ posts, featuredSlug, counts }: Props) {
  const [active, setActive] = useState<BlogCategoryId>("all");

  const featured = useMemo(
    () => posts.find((p) => p.slug === featuredSlug) ?? posts[0],
    [posts, featuredSlug],
  );

  const filtered = useMemo(() => {
    if (active === "all") return posts;
    return posts.filter((p) => p.category === active);
  }, [posts, active]);

  const gridPosts = useMemo(
    () => filtered.filter((p) => p.slug !== featured.slug || active !== "all"),
    [filtered, featured.slug, active],
  );

  const showFeatured = active === "all" || featured.category === active;

  return (
    <section className="blog-listing" aria-label="Blog posts">
      <div className="container">
        <BlogCategories
          categories={blogCategories}
          counts={counts}
          active={active}
          onChange={setActive}
        />

        {showFeatured && featured ? (
          <div className="blog-featured-wrap">
            <BlogCard post={featured} variant="featured" />
          </div>
        ) : null}

        {gridPosts.length > 0 ? (
          <div className="blog-grid">
            {gridPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : !showFeatured ? (
          <p className="blog-empty">
            <strong>Nothing in this category yet.</strong> Try another filter, or browse all posts.
          </p>
        ) : null}

        <p className="blog-count-line">
          Showing {filtered.length} of {posts.length} posts
        </p>
      </div>
    </section>
  );
}
