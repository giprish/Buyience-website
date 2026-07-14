"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function PlatformWordPress() {
  const cards = [
    {
      title: "Customer Pricing",
      description: "Show each B2B customer their negotiated prices, right on your WooCommerce store.",
    },
    {
      title: "Quote Requests",
      description: "Buyers request quotes from product pages; Nova Core takes it from there.",
    },
    {
      title: "Buyer Portal",
      description: "Self-service order history, reordering, and account management for your B2B customers.",
    },
    {
      title: "Real-Time Sync",
      description: "Products, stock, and orders stay in sync between WooCommerce and Nova Core.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section className="wp">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">WORDPRESS + WOOCOMMERCE</p>
          <h2>Already on WordPress? Even Better.</h2>
          <p className="lede">Keep your store. Add Nova Core's B2B capabilities on top — no migration required.</p>
        </motion.div>

        {/* WP Grid */}
        <div className="wp-grid">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="wp-card reveal in"
            >
              <b>{c.title}</b>
              <p>{c.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="cta-row reveal in justify-center"
        >
          <Button variant="primary" href="/contact">
            Get WordPress Plugin
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
