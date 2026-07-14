"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PlatformChallenge() {
  const challenges = [
    {
      num: "01",
      title: "Complex Products",
      description: "Configurable options, tiered pricing, volume discounts. Spreadsheets can't keep up.",
    },
    {
      num: "02",
      title: "Disconnected Systems",
      description: "Store in one tool, quotes in another, inventory in a third. Nothing talks. Everything gets retyped.",
    },
    {
      num: "03",
      title: "Slow Quote Cycles",
      description: "Days to get a quote out. Manual pricing. Margin mistakes. Customers go elsewhere.",
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
    <section className="challenge">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE CHALLENGE</p>
          <h2>B2B Commerce Shouldn't Be This Hard</h2>
          <p className="lede">
            You're managing spreadsheets, disconnected systems, and slow quote cycles. Your platform wasn't built for B2B.
          </p>
        </motion.div>

        <div className="chal-grid">
          {challenges.map((c, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="chal-card reveal in"
            >
              <span className="num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
