"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConfiguratorWhatChanges() {
  const items = [
    {
      title: "Fewer SKUs",
      desc: "One configurable product replaces dozens of SKU combinations.",
    },
    {
      title: "Fewer config errors",
      desc: "Conflict resolution prevents the invalid combinations you define.",
    },
    {
      title: "Faster quotes",
      desc: "Real-time pricing replaces manual calculation and spreadsheet lookups.",
    },
    {
      title: "Margin visibility",
      desc: "Per-option cost tracking protects profitability as products are built.",
    },
    {
      title: "Better UX",
      desc: "Customers see clear options, not an overwhelming catalogue.",
    },
    {
      title: "Unified inventory",
      desc: "Track stock per option value, not per SKU combination.",
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
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">WHAT CHANGES</p>
          <h2>What changes when products configure themselves.</h2>
        </motion.div>

        <div className="chg-grid">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="chg-card reveal in"
            >
              <b>
                <span className="ic">✓</span>
                {item.title}
              </b>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
