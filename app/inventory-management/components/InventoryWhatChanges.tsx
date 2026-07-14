"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InventoryWhatChanges() {
  const items = [
    {
      title: "No more stockouts",
      desc: "Safety-stock thresholds and automated alerts catch low stock before it's too late.",
    },
    {
      title: "Faster reorders",
      desc: "One-click purchase orders replace spreadsheet calculations and manual emails.",
    },
    {
      title: "Multi-location clarity",
      desc: "See stock across every warehouse without switching between systems.",
    },
    {
      title: "Real-time accuracy",
      desc: "Stock updates instantly — no end-of-day syncs or manual reconciliation.",
    },
    {
      title: "Supplier visibility",
      desc: "All supplier info in one place, linked directly to purchase orders.",
    },
    {
      title: "Team accountability",
      desc: "Permission-based access keeps the right controls with the right people.",
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
          <h2>What changes when inventory just works.</h2>
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
