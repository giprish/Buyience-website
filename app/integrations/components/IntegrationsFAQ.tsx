"use client";

import React from "react";
import { motion } from "framer-motion";

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
    <section className="dir" style={{ paddingTop: "104px" }} id="faq">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">QUESTIONS, ANSWERED</p>
          <h2>Integration FAQs</h2>
        </motion.div>

        {/* FAQs List */}
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
