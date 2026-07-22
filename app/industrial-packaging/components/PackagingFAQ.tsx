"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";
import { useCurrency } from "@/components/CurrencyProvider";

export default function PackagingFAQ() {
  const { format, prices } = useCurrency();
  const faqs = [
    {
      q: "Can one quote include multiple quantity price breaks?",
      a: "Yes — packaging buyers expect to see the price curve, so quotes are built with quantity tiers priced together, each checked against your margin floors, rather than as separate one-off quotes.",
    },
    {
      q: "Can it handle custom-printed products with tooling charges?",
      a: "Yes. A custom product is captured as a specification with a real bill of materials — per-unit components like board and print alongside one-time charges like plates and cutting dies — so derived pricing stays correct when the spec or quantity changes.",
    },
    {
      q: "How does the AI actually build a quote?",
      a: "Four specialised agents work together: an Orchestrator coordinates the job, a Research agent gathers product and customer context, a Pricing agent applies your pricing rules and margin floors, and a Writer produces the quote document. You always review before anything is sent.",
    },
    {
      q: "Can my regular customers reorder without contacting us?",
      a: "Yes. The customer portal gives repeat buyers self-service reordering against their saved specifications and their pricing, with payment terms (Net 30/60/90) and real-time order tracking.",
    },
    {
      q: "Does it work with my Shopify or WooCommerce store?",
      a: "Yes. Nova Core integrates with both Shopify and WooCommerce, alongside Stripe, Razorpay, PayPal, Klaviyo, Brevo, and Shiprocket. You keep your existing store; Nova Core handles quoting, negotiation, and order operations behind it.",
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
