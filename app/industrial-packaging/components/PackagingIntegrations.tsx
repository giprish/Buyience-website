"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PackagingIntegrations() {
  const logos = [
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
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="reveal in"
        >
          <p className="eyebrow">FITS YOUR STACK</p>
          <div className="logo-row" aria-label="Integrations">
            {logos.map((logo, idx) => (
              <span key={idx}>{logo}</span>
            ))}
          </div>
          <p>
            Nova Core connects to the store, email, and shipping tools you already run — with 80+ API endpoints and 38
            webhook events when you want to go deeper.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
