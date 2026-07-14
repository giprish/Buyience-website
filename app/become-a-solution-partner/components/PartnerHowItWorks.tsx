"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnerHowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Apply",
      desc: "Five fields, two minutes. Tell us who you are and who your clients are.",
    },
    {
      n: "2",
      title: "Talk to the founders",
      desc: "A direct call to check fit and agree the economics — no application portal, no waiting weeks.",
    },
    {
      n: "3",
      title: "Get hands-on",
      desc: "Guided platform onboarding and a trial environment so your team knows Nova Core inside out.",
    },
    {
      n: "✓",
      title: "Bring clients, earn",
      desc: "Register deals, implement on your terms, and earn recurring commission plus your own fees.",
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
    <section className="how">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From application to first client.</h2>
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
