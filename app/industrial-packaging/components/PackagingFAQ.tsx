"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PackagingFAQ() {
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
