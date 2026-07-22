"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";
import { useCurrency } from "@/components/CurrencyProvider";

export default function GiftingFAQ() {
  const { format, prices } = useCurrency();
  const faqs = [
    {
      q: "Can Nova Core handle kitted or bundled gift products?",
      a: "Yes — kits are built as real bills of materials in the CPQ configurator. Each kit is composed of its components (box, products, branding, inserts, packaging), and pricing is derived from the BOM, so component changes flow through to the quote automatically.",
    },
    {
      q: "Does it work with my Shopify or WooCommerce store?",
      a: "Yes. Nova Core integrates with both Shopify and WooCommerce, alongside Stripe, Razorpay, PayPal, Klaviyo, Brevo, and Shiprocket. You keep your existing store; Nova Core handles quoting, negotiation, and order operations behind it.",
    },
    {
      q: "How does the AI actually build a quote?",
      a: "Four specialised agents work together: an Orchestrator coordinates the job, a Research agent gathers product and customer context, a Pricing agent applies your pricing rules and margin floors, and a Writer produces the quote document. You always review before anything is sent.",
    },
    {
      q: "What is the win probability score based on?",
      a: "Each quote is scored across 11+ factors spanning the deal, the customer relationship, and the pricing position — so you see a probability, not a guess, before you send. The score updates as the quote changes.",
    },
    {
      q: "Can repeat corporate customers reorder easily?",
      a: "Yes. The Customer Context Engine keeps each buyer's specs, pricing history, and preferences, and the headless B2B storefront gives returning customers a direct way to reorder without starting from scratch.",
    },
    {
      q: "What does it cost, and is there a trial?",
      a: `Grow is ${format(prices.growMonthly)}/mo and Pro is ${format(prices.proMonthly)}/mo (the AI Quote Engine is included in Pro, or ${format(prices.aiQuoteAddon)}/mo on Grow). Annual plans get 2 months free. Every plan starts with a 14-day free trial — no card required.`,
    },
  ];

  return (
    <FaqSection eyebrow="QUESTIONS" title="Before you ask." items={faqs} />
  );
}
