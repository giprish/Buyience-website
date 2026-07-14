"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GiftingFAQ() {
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
      a: "Grow is $99/mo and Pro is $179/mo (the AI Quote Engine is included in Pro, or $49/mo on Grow). Annual plans get 2 months free. Every plan starts with a 14-day free trial — no card required.",
    },
  ];

  return (
    <section id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="narrow reveal in"
          style={{ textAlign: "center" }}
        >
          <p className="eyebrow">QUESTIONS</p>
          <h2 style={{ marginTop: "14px" }}>Before you ask.</h2>
        </motion.div>

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
