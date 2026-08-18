import React from "react";
import type { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";
import BlogHero from "./components/BlogHero";
import BlogFeatured from "./components/BlogFeatured";
import BlogDirectory from "./components/BlogDirectory";

export const metadata: Metadata = {
  title: "B2B Commerce Blog | Tips, Guides & Industry Insights | Buyience",
  description:
    "Practical insights on B2B commerce, AI-powered quoting, composable architecture, and wholesale operations — written for teams running modern B2B sales.",
};

export default function BlogPage() {
  return (
    <MarketingLayout
      mainClassName="blog-page"
      cta={{
        id: "trial",
        title: (
          <>
            Ready to stop fighting{" "}
            <span className="final-card-accent">your platform?</span>
          </>
        ),
        description: "Start your 14-day free trial. No credit card required. Full access to all features.",
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
      }}
    >
      <BlogHero />
      <BlogFeatured />
      <BlogDirectory />
    </MarketingLayout>
  );
}
