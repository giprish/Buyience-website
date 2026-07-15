"use client";

import React from "react";
import { useCurrency } from "@/components/CurrencyProvider";

export default function FAQSection() {
  const { format, prices } = useCurrency();
  const faqs = [
    {
      question: "How does the AI determine win probability?",
      answer:
        "Every quote is scored across 11+ factors spanning the customer relationship (history, lifetime value, payment reliability, past acceptance rates), the deal itself, and your pricing position. The score updates as the quote changes, so you see the effect of a price move before you send it.",
    },
    {
      question: "Can I set minimum margin floors the AI won't breach?",
      answer:
        "Yes — margin floors are configurable and enforced in the workflow itself, not as a suggestion. AI recommendations respect them, manual edits trigger warnings, and every decision is captured on an audit trail.",
    },
    {
      question: "What if a buyer proposes below my cost?",
      answer:
        "The floor holds. A below-floor counter-offer is flagged immediately in the Digital Sales Room, and the AI suggests a counter that stays above your floor. Nothing goes out below your configured minimum without a deliberate, logged human decision.",
    },
    {
      question: "How does the Digital Sales Room work?",
      answer:
        "It's a shared, real-time workspace opened from any quote. Buyer and seller see the same items, prices, and offer status; chat happens live with typing indicators; counter-offers are one click; and every message and offer is logged for reference and compliance.",
    },
    {
      question: "Does the AI work for complex configured products?",
      answer:
        "Yes. The Quote Engine works with Nova Core's Product Configurator (CPQ), so configured products arrive with valid option combinations and a real bill of materials — and the AI prices the configuration, not a guess at it.",
    },
    {
      question: "How long does it take to set up?",
      answer: `The AI Quote Engine is part of Nova Core — signup takes about 2 minutes and most businesses are fully operational within 2 weeks. It's included in the Pro plan (${format(prices.proMonthly)}/mo) or available as a ${format(prices.aiQuoteAddon)}/mo add-on on Grow, and every plan starts with a 14-day free trial.`,
    },
  ];

  return (
    <section className="challenge" id="faq">
      <div className="container">
        {/* Section Header */}
        <div className="center-head">
          <p className="eyebrow">QUESTIONS, ANSWERED</p>
          <h2>AI Quote Engine FAQs</h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="faq-list" style={{ background: "transparent" }}>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              style={{
                background: "#fff",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                marginBottom: "10px",
                padding: "0 20px",
              }}
            >
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
