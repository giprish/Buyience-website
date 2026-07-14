"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SalesRoomUseCases() {
  const cards = [
    {
      title: "Price negotiations",
      desc: "The buyer wants a discount, you need margin. The back-and-forth happens in minutes, with structured offer cards making every proposal crystal clear — and the floor enforced throughout.",
    },
    {
      title: "Bulk order discussions",
      desc: "Large orders need special terms. Discuss volume discounts, delivery schedules and payment terms in one place, with full context — and let the AI surface the volume-break that works for both sides.",
    },
    {
      title: "Multi-stakeholder approvals",
      desc: "Procurement needs finance to sign off. Invite them in; they see the full history and approve in-thread instead of chasing forwarded emails.",
    },
    {
      title: "Product clarifications",
      desc: "Questions about specs, compatibility or lead times get answered instantly, with attachments and links — no separate email chain.",
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
          <p className="eyebrow">USE CASES</p>
          <h2>Built for how B2B actually negotiates.</h2>
          <p className="lede">Every negotiation scenario, handled gracefully.</p>
        </motion.div>

        <div className="uc-grid">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="uc-card reveal in"
            >
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
