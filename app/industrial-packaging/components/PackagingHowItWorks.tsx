"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PackagingHowItWorks() {
  const steps = [
    {
      n: "1",
      title: "RFQ comes in",
      desc: "Email, storefront, or API — spec and quantities land in Nova Core.",
    },
    {
      n: "2",
      title: "AI drafts & scores",
      desc: "Every tier priced, floors checked, win probability attached.",
    },
    {
      n: "3",
      title: "You approve & send",
      desc: "One review, one click, one live Sales Room link.",
    },
    {
      n: "4",
      title: "Negotiate",
      desc: "Assistant active, margin floor enforced at every tier.",
    },
    {
      n: "✓",
      title: "Order, fulfil, reorder",
      desc: "Multi-warehouse fulfilment — then the portal handles the repeats.",
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
    <section className="steps-wrap">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="narrow reveal in"
          style={{ textAlign: "center" }}
        >
          <p className="eyebrow">HOW IT WORKS</p>
          <h2 style={{ marginTop: "14px" }}>From RFQ to repeat order, in one system.</h2>
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
