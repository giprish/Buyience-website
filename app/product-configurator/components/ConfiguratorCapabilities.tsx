"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConfiguratorCapabilities() {
  const capabilities = [
    {
      chip: "UNLIMITED GROUPS",
      title: "Multi-dimensional options",
      description:
        "Create unlimited option groups per product — memory, storage, power, safety — each an independent category with its own values and pricing.",
    },
    {
      chip: "AUTO-RESOLVE",
      title: "Conflict resolution",
      description:
        "Define incompatible combinations. When a customer selects a conflicting option, the system auto-deselects it and explains why.",
    },
    {
      chip: "LIVE CALCULATION",
      title: "Dynamic pricing",
      description:
        "Price updates instantly as options are selected — base price plus option prices × quantities, with the total shown in real time.",
    },
    {
      chip: "VOLUME READY",
      title: "Quantity pricing",
      description:
        "Enable quantity selection per option, with volume pricing for B2B buyers and min/max enforcement per option group.",
    },
    {
      chip: "COST TRACKING",
      title: "Margin protection",
      description:
        "Track cost price per option value with real-time margin calculation, and keep visibility into profitability as products are configured.",
    },
    {
      chip: "QUOTE-READY",
      title: "Quote integration",
      description:
        "Configured products flow directly into quotes with all options, quantities and pricing preserved — and convert to orders intact.",
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
    <section id="capabilities">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">CORE CAPABILITIES</p>
          <h2>Everything you need to configure products.</h2>
          <p className="lede">
            From option groups to conflict rules, dynamic pricing to quote integration — one system for complex
            products.
          </p>
        </motion.div>

        <div className="cap-grid">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="cap-card reveal in"
            >
              <span className="chip">{cap.chip}</span>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
