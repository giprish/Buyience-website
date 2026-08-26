"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MarginImpact({ purple = false }: { purple?: boolean }) {
  const cards = [
    {
      metric: "Every line",
      title: "Floor-checked before send",
      description: "Human edit or AI draft — same rule",
    },
    {
      metric: "One book",
      title: "For reps, AI, and the storefront",
      description: "No side spreadsheet, no special price",
    },
    {
      metric: "Live",
      title: "Margin while they negotiate",
      description: "The floor stays on in the Sales Room",
    },
    {
      metric: "Logged",
      title: "If anyone overrides",
      description: "Who, when, and why — on the record",
    },
  ];

  return (
    <section className={`impact ${purple ? "bg-(--surface)" : ""}`.trim()}>
      <div className="container">
        <div className="center-head">
          <p className="eyebrow">IMPACT</p>
          <h2>The numbers that should move.</h2>
          <p className="lede">What changes when pricing rules sit in the path — not in a policy slide.</p>
        </div>

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
