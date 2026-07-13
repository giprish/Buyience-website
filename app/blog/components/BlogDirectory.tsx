"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPostsData, BlogPost } from "../data/posts";

export default function BlogDirectory() {
  const [activeCat, setActiveCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [subEmail, setSubEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const categories = [
    { id: "all", label: "All posts" },
    { id: "b2b", label: "B2B" },
    { id: "technology", label: "Technology" },
    { id: "product", label: "Product" },
    { id: "trends", label: "Trends & insights" },
  ];

  // Calculate counts for categories
  const getCatCount = (catId: string) => {
    if (catId === "all") return blogPostsData.length;
    return blogPostsData.filter((p) => p.category === catId).length;
  };

  // Perform search and filter
  const filteredPosts = blogPostsData.filter((item) => {
    const matchesCat = activeCat === "all" || item.category === activeCat;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Handle newsletter subscription mockup
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(subEmail.trim())) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
    setIsSubscribed(true);
  };

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container blog-layout">
        {/* Sidebar */}
        <aside className="side text-left" aria-label="Blog categories">
          <p className="side-label">CATEGORIES</p>
          <div className="cats" id="cats" role="group" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat.id}
                data-cat={cat.id}
                aria-pressed={activeCat === cat.id}
                onClick={() => setActiveCat(cat.id)}
              >
                {cat.label}
                <span className="n">{getCatCount(cat.id)}</span>
              </button>
            ))}
          </div>

          {/* Email Subscription Box */}
          <div className={`sub-card ${isSubscribed ? "done" : ""}`} id="subCard">
            <b>Get new posts by email</b>
            <p>Occasional, when we have something worth saying. No drip sequence.</p>
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                id="subEmail"
                placeholder="you@company.com"
                value={subEmail}
                onChange={(e) => {
                  setSubEmail(e.target.value);
                  setEmailError(false);
                }}
                style={{ borderColor: emailError ? "#D14343" : "" }}
                aria-label="Email address"
              />
              <button type="submit" id="subBtn">
                Subscribe
              </button>
            </form>
            <span className="ok">✓ You're subscribed.</span>
          </div>
        </aside>

        {/* Posts Area */}
        <div className="dir-main text-left">
          {/* Search Bar */}
          <div className="search">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              placeholder="Search posts…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search posts"
            />
          </div>

          {/* Grid of Posts */}
          <div className="posts" id="posts">
            <AnimatePresence>
              {filteredPosts.map((post) => (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={post.id}
                  className="post"
                  data-cat={post.category}
                >
                  <span className="tag">{post.categoryLabel}</span>
                  <h3>
                    <a href={`#post-${post.id}`}>{post.title}</a>
                  </h3>
                  <p>{post.excerpt}</p>
                  <div className="post-meta">
                    <span className="av">{post.authorInitials}</span>
                    <span>{post.authorName}</span>
                    <span className="sep">·</span>
                    <span>{post.readTime}</span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="empty show"
              id="empty"
            >
              <b>Nothing matches that.</b>
              Try another search, or browse all posts.
            </motion.div>
          )}

          {/* Count Row / Load More */}
          <div className="more-row">
            <p className="count-line" id="countLine">
              SHOWING {filteredPosts.length} OF {blogPostsData.length} POSTS
            </p>
            {filteredPosts.length >= 12 && (
              <button className="btn btn-ghost" id="moreBtn" type="button">
                Load more posts
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
