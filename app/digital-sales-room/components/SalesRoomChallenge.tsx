"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SalesRoomChallenge() {
  const challenges = [
    {
      num: "01",
      title: "Email quote ping-pong",
      desc: "They request a quote, you send it, they counter, you revise — back and forth over days while momentum dies in the inbox.",
    },
    {
      num: "02",
      title: "No visibility into intent",
      desc: "Did they open the quote? Are they comparing you to a competitor? Who else is deciding? You're flying blind until they ghost you.",
    },
    {
      num: "03",
      title: "Scattered deal context",
      desc: "Quote versions in email, specs in PDFs, negotiation notes in your head. When the buyer asks 'what did we agree?', nobody's sure.",
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
          <p className="eyebrow">THE CHALLENGE</p>
          <h2>B2B deals die in email threads.</h2>
          <p className="lede">
            Your buyers want to negotiate and your team wants to close — but email wasn't built for complex B2B deals.
            It's where deal momentum goes to die.
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
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
