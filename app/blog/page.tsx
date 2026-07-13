import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogHero from "./components/BlogHero";
import BlogFeatured from "./components/BlogFeatured";
import BlogDirectory from "./components/BlogDirectory";
import BlogFinalCTA from "./components/BlogFinalCTA";

export const metadata: Metadata = {
  title: "B2B Commerce Blog | Tips, Guides & Industry Insights | Buyience",
  description:
    "Practical insights on B2B commerce, AI-powered quoting, composable architecture, and wholesale operations — written for teams running modern B2B sales.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="blog-page flex-grow">
        <BlogHero />
        <BlogFeatured />
        <BlogDirectory />
        <BlogFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
