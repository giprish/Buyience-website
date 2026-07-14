"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InventoryHowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Import your catalogue",
      desc: "Upload products via CSV or connect your existing platform. Data syncs automatically.",
    },
    {
      n: "2",
      title: "Set safety stock",
      desc: "Define minimum levels per product and location. Thresholds trigger alerts and status changes.",
    },
    {
      n: "3",
      title: "Track in real time",
      desc: "Monitor stock across all locations. Inline editing lets you adjust quantities directly in the table.",
    },
    {
      n: "✓",
      title: "Automate reorders",
      desc: "One-click purchase orders when stock is low. Receive goods and update stock instantly.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="how">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From import to insight in minutes.</h2>
          <p className="lede">No complex setup, no consultants. Connect your catalogue and start tracking.</p>
        </motion.div>

        <ol className="steps">
          {steps.map((step, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="step reveal in"
            >
              <span className="step-n">{step.n}</span>
              <div>
                <b>{step.title}</b>
                <span>{step.desc}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
