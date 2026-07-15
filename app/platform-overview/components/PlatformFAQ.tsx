"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCurrency } from "@/components/CurrencyProvider";

export default function PlatformFAQ() {
  const { format, prices } = useCurrency();
  const faqs = [
    {
      q: "What is Nova Core?",
      a: "Nova Core is Buyience's API-first B2B commerce platform. It brings quoting (with an AI Quote Engine), CPQ, Digital Sales Rooms, order management, multi-warehouse inventory, supplier management, and a headless B2B storefront into one system, built on MACH architecture.",
    },
    {
      q: "Does Nova Core replace my Shopify or WooCommerce store, or work with it?",
      a: "It works with it. Nova Core integrates with WooCommerce and Shopify, adding B2B capabilities — customer-specific pricing, quote requests, buyer portals, real-time sync — on top of the store you already run. You can also use Nova Core's own headless B2B storefront if you prefer.",
    },
    {
      q: "Is Nova Core headless and API-first?",
      a: "Yes. Nova Core is built on MACH architecture — microservices, API-first, cloud-native, headless — with 80+ API endpoints and 38 webhook events, so every capability is available programmatically.",
    },
    {
      q: "How long does it take to go live?",
      a: "Signup takes about 2 minutes, catalog import under an hour, your storefront is live in under a day, and most businesses are fully operational within 2 weeks — no consultants or IT team required.",
    },
    {
      q: "What does Nova Core cost?",
      a: `Grow is ${format(prices.growMonthly)}/mo and Pro is ${format(prices.proMonthly)}/mo (the AI Quote Engine is included in Pro, or available as a ${format(prices.aiQuoteAddon)}/mo add-on on Grow), with custom Enterprise pricing for high-volume operations. Every plan starts with a 14-day free trial — no card required.`,
    },
  ];

  return (
    <section id="faq" style={{ paddingTop: 0, marginTop: "104px" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">QUESTIONS</p>
          <h2>Platform FAQs</h2>
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
