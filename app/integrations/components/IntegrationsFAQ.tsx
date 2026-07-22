"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";

export default function IntegrationsFAQ() {
  const faqs = [
    {
      q: "How do I connect an integration?",
      a: "From your Nova Core settings: choose the integration, add your API keys or sign in to the service, and the connection is live — scoped to your tenant. No code and no external middleware required for anything in this directory.",
    },
    {
      q: "What if my tool isn't listed?",
      a: "Two paths: connect it yourself through the REST API and webhooks (80+ endpoints, 38 events — anything that speaks HTTP can integrate), or request it. Customer requests directly shape the roadmap, and this page grows in the order people ask.",
    },
    {
      q: "How do webhooks work?",
      a: "When something happens in Nova Core — a quote is accepted, an order ships, stock runs low — a webhook event fires to any endpoint you register. That's how connected tools stay current in real time instead of polling for changes.",
    },
    {
      q: "Can I use Nova Core alongside my existing store?",
      a: "Yes — that's the point of the WooCommerce, Shopify, and WordPress connections. Keep your existing storefront and add Nova Core's B2B layer — quoting, customer-specific pricing, order management — without a migration project.",
    },
  ];

  return (
    <FaqSection
      eyebrow="QUESTIONS, ANSWERED"
      title="Integration FAQs"
      items={faqs}
      className="dir"
      style={{ paddingTop: "104px" }}
    />
  );
}
