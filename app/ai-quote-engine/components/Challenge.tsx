"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Challenge() {
  const cards = [
    {
      num: "01",
      title: "Manual pricing chaos",
      description:
        "Spreadsheets, emails and guesswork. Your team spends hours calculating prices and checking margins — and still makes costly mistakes.",
    },
    {
      num: "02",
      title: "Slow response = lost deals",
      description:
        "Complex quotes take hours or days. Buyers won't wait — the first vendor back with accurate pricing usually wins.",
    },
    {
      num: "03",
      title: "Blind pricing decisions",
      description:
        "No insight into what price will win, and no view of customer history. You're pricing in the dark and leaving margin on the table.",
    },
  ];

  return (
    <section className="challenge">
      <div className="container">
        {/* Section Header */}
        <div className="center-head">
          <p className="eyebrow">THE CHALLENGE</p>
          <h2>B2B quoting shouldn't be this hard.</h2>
          <p className="lede">
            Your current setup is costing you deals. Slow quotes, manual pricing errors, and pricing in the dark — and by
            the time you respond, the buyer's already talking to a competitor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="chal-grid">
          {cards.map((card, index) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.55 }}
              className="chal-card text-left"
            >
              <span className="num">{card.num}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
