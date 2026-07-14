"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InventoryChallenge() {
  const challenges = [
    {
      num: "01",
      title: "Stale counts",
      description:
        "The spreadsheet was right this morning. Then orders came in, goods arrived, and a transfer left — and nobody updated it.",
    },
    {
      num: "02",
      title: "Selling what you don't have",
      description:
        "The storefront says in stock, the warehouse says otherwise. Every mismatch becomes an apology email and a delayed order.",
    },
    {
      num: "03",
      title: "Reordering by gut feel",
      description:
        "How much to order, from whom, for which location? Without thresholds and supplier links, every PO is a manual research project.",
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
          <h2>Inventory shouldn't live in a spreadsheet.</h2>
          <p className="lede">
            The counts are stale by lunchtime, nobody trusts the numbers, and reordering is guesswork under pressure.
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
