"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SalesRoomWhatChanges() {
  const items = [
    {
      big: "Minutes, not days",
      title: "Time to close",
      desc: "Live negotiation instead of email rounds",
    },
    {
      big: "Zero floor errors",
      title: "Margin protected",
      desc: "Every counter checked against your floor",
    },
    {
      big: "One shared room",
      title: "No version confusion",
      desc: "Both sides on the same quote",
    },
    {
      big: "Every offer logged",
      title: "Full audit trail",
      desc: "For compliance and handoffs",
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
    <section className="out" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">WHAT CHANGES</p>
          <h2>What changes when the negotiation moves live.</h2>
        </motion.div>

        <div className="out-grid">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="out-card reveal in"
            >
              <span className="big">{item.big}</span>
              <b>{item.title}</b>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
