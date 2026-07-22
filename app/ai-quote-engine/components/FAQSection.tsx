"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";
import { useCurrency } from "@/components/CurrencyProvider";

export default function FAQSection() {
  const { format, prices } = useCurrency();
  const faqs = [
    {
      q: "How does the AI determine win probability?",
      a: "Every quote is scored across 11+ factors spanning the customer relationship (history, lifetime value, payment reliability, past acceptance rates), the deal itself, and your pricing position. The score updates as the quote changes, so you see the effect of a price move before you send it.",
    },
    {
      q: "Can I set minimum margin floors the AI won't breach?",
      a: "Yes — margin floors are configurable and enforced in the workflow itself, not as a suggestion. AI recommendations respect them, manual edits trigger warnings, and every decision is captured on an audit trail.",
    },
    {
      q: "What if a buyer proposes below my cost?",
      a: "The floor holds. A below-floor counter-offer is flagged immediately in the Digital Sales Room, and the AI suggests a counter that stays above your floor. Nothing goes out below your configured minimum without a deliberate, logged human decision.",
    },
    {
      q: "How does the Digital Sales Room work?",
      a: "It's a shared, real-time workspace opened from any quote. Buyer and seller see the same items, prices, and offer status; chat happens live with typing indicators; counter-offers are one click; and every message and offer is logged for reference and compliance.",
    },
    {
      q: "Does the AI work for complex configured products?",
      a: "Yes. The Quote Engine works with Nova Core's Product Configurator (CPQ), so configured products arrive with valid option combinations and a real bill of materials — and the AI prices the configuration, not a guess at it.",
    },
    {
      q: "How long does it take to set up?",
      a: `The AI Quote Engine is part of Nova Core — signup takes about 2 minutes and most businesses are fully operational within 2 weeks. It's included in the Pro plan (${format(prices.proMonthly)}/mo) or available as a ${format(prices.aiQuoteAddon)}/mo add-on on Grow, and every plan starts with a 14-day free trial.`,
    },
  ];

  return (
    <FaqSection
      eyebrow="QUESTIONS, ANSWERED"
      title="AI Quote Engine FAQs"
      items={faqs}
      className="challenge"
    />
  );
}
