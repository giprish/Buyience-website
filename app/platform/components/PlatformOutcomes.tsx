"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PlatformOutcomes() {
  const outcomes = [
    {
      big: "< 2 weeks",
      title: "Time to go live",
      description: "vs. 6–12 month enterprise implementations",
    },
    {
      big: "2 clicks",
      title: "To a complete quote",
      description: "AI drafts it; you review and send",
    },
    {
      big: "Every quote",
      title: "Margin-checked",
      description: "Floors enforced before anything goes out",
    },
    {
      big: "1 platform",
      title: "Replaces the stack",
      description: "No more disconnected spreadsheets",
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
    <section className="outcomes">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">OUTCOMES</p>
          <h2>What Changes When B2B Commerce Works</h2>
        </motion.div>

        <div className="out-grid">
          {outcomes.map((out, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="out-card reveal in"
            >
              <span className="big">{out.big}</span>
              <b>{out.title}</b>
              <p>{out.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
