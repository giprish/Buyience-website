"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { blogPostsData } from "../data/posts";

export default function BlogFeatured() {
  const featuredPost = blogPostsData.find((p) => p.isFeatured) || blogPostsData[0];

  return (
    <div className="container">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="featured reveal in"
      >
        <div className="feat-body">
          <div className="feat-tagrow">
            <span className="feat-flag">LATEST</span>
            <span className="feat-cat">{featuredPost.categoryLabel}</span>
          </div>
          <h2>
            <Link href={`#post-${featuredPost.id}`}>{featuredPost.title}</Link>
          </h2>
          <p>{featuredPost.excerpt}</p>
          <div className="feat-meta">
            <span className="av">{featuredPost.authorInitials}</span>
            <span>{featuredPost.authorName}</span>
            <span className="sep">·</span>
            <span>{featuredPost.readTime}</span>
          </div>
        </div>
        <div className="feat-side" aria-hidden="true">
          <div className="feat-mark">
            <b>UCP</b>
            AGENT-DRIVEN
            <br />
            COMMERCE
          </div>
        </div>
      </motion.article>
    </div>
  );
}
