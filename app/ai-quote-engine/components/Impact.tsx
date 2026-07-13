"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Impact() {
  const cards = [
    {
      metric: "Seconds",
      title: "From request to scored draft",
      description: "Priced, scored, ready for your review",
    },
    {
      metric: "11+ factors",
      title: "In every win-probability score",
      description: "Customer, deal, and pricing context",
    },
    {
      metric: "Every quote",
      title: "Margin-floor checked",
      description: "Enforced in-workflow, with audit trail",
    },
    {
      metric: "One room",
      title: "To negotiate and close",
      description: "Real-time, instead of email threads",
    },
  ];

  return (
    <section>
      <div className="container">
        {/* Section Header */}
        <div className="center-head">
          <p className="eyebrow">IMPACT</p>
          <h2>The numbers that should move.</h2>
          <p className="lede">What the engine changes about every single quote — by mechanism, not by promise.</p>
        </div>

        {/* Impact Cards Grid */}
        <div className="out-grid">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="out-card"
            >
              <span className="big">{card.metric}</span>
              <b>{card.title}</b>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
