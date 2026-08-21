import type { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";
import BlogHero from "./components/BlogHero";
import BlogListing from "./components/BlogListing";
import { getAllPosts, getCategoryCounts, getFeaturedPost } from "./lib/posts";

export const metadata: Metadata = {
  title: "B2B Commerce Blog | Tips, Guides & Industry Insights",
  description:
    "Expert insights on B2B commerce, wholesale operations, and AI in sales. Practical guides for wholesalers, distributors & manufacturers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "B2B Commerce Blog | Tips, Guides & Industry Insights | Buyience",
    description:
      "Expert insights on B2B commerce, wholesale operations, and AI in sales. Practical guides for wholesalers, distributors & manufacturers.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Commerce Blog | Tips, Guides & Industry Insights | Buyience",
    description:
      "Expert insights on B2B commerce, wholesale operations, and AI in sales. Practical guides for wholesalers, distributors & manufacturers.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();
  const counts = getCategoryCounts();

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
        description:
          "Start your 14-day free trial. No credit card required. Full access to all features.",
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
      }}
    >
      <BlogHero />
      <BlogListing posts={posts} featuredSlug={featured.slug} counts={counts} />
    </MarketingLayout>
  );
}
