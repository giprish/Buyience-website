import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

const POSTS: Record<
  string,
  { title: string; description: string; excerpt: string }
> = {
  "how-distributors-can-automate-quote-to-order-processes-2026-playbook": {
    title: "How Distributors Can Automate Quote-to-Order Processes: 2026 Playbook",
    description: "A practical playbook for automating B2B quote-to-order workflows.",
    excerpt:
      "Manual quote-to-order cycles slow distributors down. This playbook covers where AI quoting, margin floors, and digital sales rooms cut the most cycle time.",
  },
  "why-manufacturers-need-a-modern-b2b-ecommerce-platform-in-2026": {
    title: "Why Manufacturers Need a Modern B2B Ecommerce Platform in 2026",
    description: "Why manufacturers are replacing bolt-on B2B tools with modern commerce platforms.",
    excerpt:
      "SKU explosion, CPQ, and buying committees are rewriting manufacturing commerce. Here's what a modern platform must handle in 2026.",
  },
  "composable-commerce-for-b2b-a-decision-guide": {
    title: "Composable Commerce for B2B: A Decision Guide",
    description: "How to decide if composable commerce fits your B2B stack.",
    excerpt:
      "Composable sounds flexible — until integration cost shows up. This guide helps B2B teams decide when composable is worth it.",
  },
  "ai-quote-generation-in-b2b-what-is-real-vs-marketing": {
    title: "AI Quote Generation in B2B: What Is Real vs Marketing",
    description: "Separating real AI quoting capability from marketing claims.",
    excerpt:
      "Not every 'AI quote' product protects margin or understands customer tiers. Here's how to evaluate what is real.",
  },
  "why-most-b2b-erp-integrations-fail": {
    title: "Why Most B2B ERP Integrations Fail",
    description: "How to avoid ERP integration failure in B2B commerce.",
    excerpt:
      "Define system ownership, identify where workflows live, reduce ERP dependency, and plan architecture first.",
  },
  "mach-architecture-for-modern-b2b-commerce": {
    title: "How MACH Architecture Enables Modern B2B Commerce",
    description: "MACH architecture for modern B2B commerce platforms.",
    excerpt:
      "Traditional platforms were built for simpler workflows. MACH — Microservices, API-first, Cloud-native, Headless — matches how modern B2B actually sells.",
  },
  "b2b-commerce-and-headless-architecture": {
    title: "What Headless Solves, What It Doesn't, and When It Matters",
    description: "Headless architecture for B2B commerce — benefits and limits.",
    excerpt:
      "Headless separates presentation from business logic. Here's what that unlocks for B2B — and when it is overkill.",
  },
  "what-is-b2b-ecommerce-a-complete-guide": {
    title: "What Is B2B Ecommerce? A Complete Guide",
    description: "A complete guide to B2B ecommerce for wholesalers and distributors.",
    excerpt:
      "B2B ecommerce is more than putting a catalog online. Pricing rules, quotes, and inventory make or break the experience.",
  },
  "what-is-mach-architecture-a-complete-guide": {
    title: "What Is MACH Architecture? A Complete Guide",
    description: "A complete guide to MACH architecture.",
    excerpt:
      "Microservices, API-first, Cloud-native, Headless — the building blocks of flexible commerce platforms.",
  },
  "what-is-buyience-a-mordern-b2b-commerce-platform": {
    title: "What Is Buyience? A Modern B2B Commerce Platform",
    description: "An introduction to Buyience Nova Core.",
    excerpt:
      "Buyience Nova Core is an AI-powered, API-first B2B commerce platform for wholesalers, distributors, and manufacturers.",
  },
  "ai-quote-engine-for-b2b-commerce": {
    title: "AI Quote Engine for B2B Commerce",
    description: "How an AI quote engine changes B2B sales cycles.",
    excerpt:
      "AI quoting compresses response time while protecting margin — when the model understands your customer tiers and floors.",
  },
  "the-real-cost-of-headless-commerce-for-b2b-companies": {
    title: "The Real Cost of Headless Commerce for B2B Companies",
    description: "Understanding the real cost of headless B2B commerce.",
    excerpt:
      "Headless can reduce long-term lock-in — but only if you account for integration and ownership costs up front.",
  },
  "erp-first-vs-commerce-first-architecture-in-b2b-what-actually-works": {
    title: "ERP-First vs Commerce-First Architecture in B2B",
    description: "What actually works for B2B architecture choices.",
    excerpt:
      "ERP-first often bottlenecks commerce. Commerce-first with clean ERP sync tends to move deals faster.",
  },
  "b2b-reordering-is-broken-and-why-that-matters": {
    title: "B2B Reordering Is Broken — and Why That Matters",
    description: "Why B2B reordering experiences fail buyers.",
    excerpt:
      "If reordering still means emails and phone calls, your best customers are spending time on the wrong work.",
  },
  "how-b2b-teams-manage-customer-specific-pricing-at-scale": {
    title: "How B2B Teams Manage Customer-Specific Pricing at Scale",
    description: "Managing customer-specific pricing at scale.",
    excerpt:
      "Contract nets, tiers, and exceptions explode in spreadsheets. Platforms that treat pricing as a first-class engine win.",
  },
  "the-real-cost-of-manual-quote-approvals-in-b2b": {
    title: "The Real Cost of Manual Quote Approvals in B2B",
    description: "The hidden cost of manual quote approval chains.",
    excerpt:
      "Every approval hop adds delay — and delayed quotes lose to whoever responded first with a credible price.",
  },
  "why-manual-b2b-quoting-is-costing-you-deals": {
    title: "Why Manual B2B Quoting Is Costing You Deals",
    description: "How manual quoting loses revenue.",
    excerpt:
      "Slow quotes do not just annoy buyers — they quietly hand deals to faster competitors.",
  },
  "composable-commerce-for-b2b-businesses": {
    title: "Composable Commerce for B2B Businesses",
    description: "Composable commerce patterns for B2B businesses.",
    excerpt:
      "Pick the modules you need — quoting, inventory, storefront — without waiting on a monolithic release train.",
  },
  "the-universal-commerce-protocol-is-here.-most-b2b-platforms-aren-t-ready-for-it": {
    title: "The Universal Commerce Protocol Is Here. Most B2B Platforms Aren't Ready",
    description: "What the Universal Commerce Protocol means for B2B platforms.",
    excerpt:
      "New interoperability standards are arriving. API-first platforms are positioned to adopt; monoliths will lag.",
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) return { title: "Blog" };
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = POSTS[slug];
  if (!post) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="mx-auto max-w-3xl flex-grow px-6 py-16 sm:py-20">
        <Link href="/blog" className="text-sm font-semibold text-[#7C3AED] hover:underline">
          ← Back to blog
        </Link>
        <h1 className="mt-6 text-3xl font-semibold tracking-normal text-[#17265C] sm:text-4xl">{post.title}</h1>
        <p className="mt-6 text-[17px] leading-relaxed text-[#5B5F76]">{post.excerpt}</p>
        <p className="mt-8 text-[15.5px] leading-relaxed text-[#5B5F76]">
          This article is part of the Buyience knowledge base on modern B2B commerce. For the full product story, see
          Nova Core — AI quoting, inventory, and storefronts on MACH architecture.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button variant="primary" size="lg" href="/request-a-demo">
            Request a Demo
          </Button>
          <Button variant="ghost" size="lg" href="/ai-quote-engine">
            Explore AI Quote Engine
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
