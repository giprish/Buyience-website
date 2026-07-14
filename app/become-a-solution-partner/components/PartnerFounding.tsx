"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnerFounding() {
  const cards = [
    {
      title: "Direct founder access",
      desc: "Your deals, questions, and feature requests go to the people who build the platform — the same day, not through tiers of partner managers.",
    },
    {
      title: "Economics you help set",
      desc: "Commission structure and terms are agreed in conversation while the program is young — founding partners lock in terms others won't get later.",
    },
    {
      title: "Your fingerprints on the roadmap",
      desc: "Integration requests and platform feedback from partners get outsized weight. What your clients need becomes what we ship.",
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
    <section className="founding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">WHY NOW</p>
          <h2>Early. Deliberately.</h2>
          <p className="lede">
            This program is at founding stage — which is precisely the opportunity. The partners who join large ecosystems
            today are number 4,001 in a directory. Here, you'd be shaping the program.
          </p>
        </motion.div>

        <div className="fnd-grid">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="fnd reveal in"
            >
              <b>{c.title}</b>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
