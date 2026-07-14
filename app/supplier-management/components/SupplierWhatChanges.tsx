"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SupplierWhatChanges() {
  const items = [
    {
      title: "Structured onboarding",
      desc: "The 5-step process ensures complete supplier profiles every time.",
    },
    {
      title: "Compliance visibility",
      desc: "Certificate expiries are flagged automatically before they lapse.",
    },
    {
      title: "Logistics clarity",
      desc: "Know exactly how each supplier delivers.",
    },
    {
      title: "Financial tracking",
      desc: "Banking details and spending in one place.",
    },
    {
      title: "Quick search",
      desc: "Find any supplier in seconds by name, email, or ID.",
    },
    {
      title: "Bulk efficiency",
      desc: "Manage multiple suppliers at once with bulk operations.",
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
    <section className="challenge">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">WHAT CHANGES</p>
          <h2>What changes when suppliers are organized.</h2>
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
