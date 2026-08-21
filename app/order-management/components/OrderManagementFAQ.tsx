"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";

export default function OrderManagementFAQ() {
  const faqs = [
    {
      q: "How do I create an order?",
      a: "Four steps: pick a B2B customer by email (their addresses auto-populate), search and add products with variants as prices update live, review totals with tax and shipping, then create the order or save it as a draft. There are no complex forms and no switching between systems.",
    },
    {
      q: "What payment methods are supported?",
      a: "Take payment through Stripe or PayPal directly on the order, generate and send a payment link for the customer to pay themselves, or mark an order as paid manually when payment is handled offline. Every method is recorded against the same order.",
    },
    {
      q: "How does quote-to-order conversion work?",
      a: 'When a customer accepts a quote, click "Convert to order" once. The customer\'s contact info, billing and shipping addresses, all products with quantities and variants, and the negotiated pricing transfer automatically into a new order — nothing is re-keyed.',
    },
    {
      q: "How do I track order status?",
      a: "Every order moves through 10+ status types from pending to delivered, with real-time updates and a full history log. You can see exactly where any order stands, and returns follow their own clear status flow from pending to refunded.",
    },
    {
      q: "Is there AI in the order management system?",
      a: "Order management itself is deliberately deterministic — statuses, payments and conversions are rules-based so your operations stay predictable. The AI lives upstream in the AI Quote Engine, which prices and scores the quote; once accepted, that quote converts cleanly into an order here.",
    },
  ];

  return (
    <FaqSection
      eyebrow="QUESTIONS, ANSWERED"
      title="Order management FAQs"
      items={faqs}
      card
    />
  );
}
