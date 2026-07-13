"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IntegrationsSection() {
  const integrations = [
    "Shopify",
    "WooCommerce",
    "Stripe",
    "Razorpay",
    "PayPal",
    "Klaviyo",
    "Brevo",
    "Shiprocket",
    "GA4",
    "Google Ads",
  ];

  return (
    <section className="integrations">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="container"
      >
        <p className="eyebrow">FITS YOUR STACK</p>
        <div className="logo-row" aria-label="Integrations">
          {integrations.map((item, idx) => (
            <span key={idx}>{item}</span>
          ))}
        </div>
        <p>
          Nova Core connects to the store, email, and shipping tools you already run — with 80+ API endpoints and 38
          webhook events when you want to go deeper.
        </p>
      </motion.div>
    </section>
  );
}
