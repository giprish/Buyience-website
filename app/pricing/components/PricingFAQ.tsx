"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCurrency } from "@/components/CurrencyProvider";

export default function PricingFAQ() {
  const { format, prices } = useCurrency();
  const faqs = [
    {
      q: "How does the 14-day free trial work?",
      a: "Start on any plan with full access for 14 days — no card required. If Nova Core fits, pick your plan and continue without losing your setup. If not, your trial simply expires.",
    },
    {
      q: "What counts as a \"B2B order\"?",
      a: "Any order created in Nova Core — through your B2B storefront, from an accepted quote, or entered in order management — counts toward your monthly order limit.",
    },
    {
      q: "Can I upgrade or downgrade anytime?",
      a: "Yes. You can change plans at any time from your account, and the change applies to your next billing cycle.",
    },
    {
      q: "What happens if I exceed my order limit?",
      a: "We'll let you know as you approach your limit and help you move to the right plan. Talk to us if your volume is spiky — we'd rather fit the plan to your business than surprise you.",
    },
    {
      q: "Is there a setup or implementation fee?",
      a: "No. There are no setup, implementation, or hidden fees on any plan — you pay the plan price and any add-ons you choose, nothing else.",
    },
    {
      q: "What does \"lock in for life\" mean?",
      a: `Founder-launch customers keep today's ${format(prices.growMonthly)}/mo price for as long as their subscription remains active — when standard pricing rises to $249/mo, your rate doesn't change.`,
    },
  ];

  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto" }}
        >
          <p className="eyebrow">QUESTIONS, ANSWERED</p>
          <h2 style={{ marginTop: "14px" }}>Pricing FAQs</h2>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="faq-list reveal in"
        >
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
