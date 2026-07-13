"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Request arrives",
      description: "The customer submits via storefront, email or a sales rep. Nova Core captures every detail instantly.",
    },
    {
      n: "2",
      title: "AI analyses & recommends",
      description:
        "In seconds, the AI weighs history, margins, inventory and deal context, and returns a win-probability score and a recommended price.",
    },
    {
      n: "3",
      title: "You review & decide",
      description:
        "See the recommendation with full context. Accept, adjust or escalate — the margin floor stays enforced. One click to send.",
    },
    {
      n: "✓",
      title: "Negotiate in real time",
      description: "If the buyer counters, close it in the Digital Sales Room — in minutes, not days of email.",
    },
  ];

  return (
    <section className="how">
      <div className="container">
        {/* Section Header */}
        <div className="center-head">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From quote request to closed deal.</h2>
          <p className="lede">A workflow that keeps your team focused on relationships, not spreadsheets.</p>
        </div>

        {/* Steps Timeline */}
        <ol className="steps">
          {steps.map((step, index) => (
            <motion.li
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.12, duration: 0.55 }}
              className="step"
            >
              <span className="step-n">{step.n}</span>
              <div>
                <b>{step.title}</b>
                <span>{step.description}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
