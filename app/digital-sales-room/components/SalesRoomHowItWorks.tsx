"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SalesRoomHowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Counter-offer sent",
      desc: "The seller sends pricing through the quote system. The buyer is notified instantly.",
    },
    {
      n: "2",
      title: "The room opens",
      desc: "Both parties enter the shared room, with the quote details visible to everyone.",
    },
    {
      n: "3",
      title: "Live negotiation",
      desc: "Chat, counter and discuss in real time — with the AI copilot suggesting floor-safe moves.",
    },
    {
      n: "✓",
      title: "Deal closed",
      desc: "One click to accept, and the quote converts to an order automatically.",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="how" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From counter-offer to closed deal.</h2>
          <p className="lede">A streamlined flow that gets both parties to agreement faster.</p>
        </motion.div>

        <ol className="steps">
          {steps.map((step, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={itemVariants}
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
