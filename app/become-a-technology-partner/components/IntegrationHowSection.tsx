"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IntegrationHowSection() {
  const steps = [
    {
      n: "1",
      title: "Apply",
      description: "Tell us what your product does and what you'd connect. Two minutes.",
    },
    {
      n: "2",
      title: "Scope the integration",
      description:
        "A technical call with the people who built the API. We agree what flows where, and where the value is for shared customers.",
    },
    {
      n: "3",
      title: "Build against a sandbox",
      description: "A sandbox tenant, full API access, and engineering support while you build.",
    },
    {
      n: "✓",
      title: "Ship & get listed",
      description: "Your integration goes live in the directory, and we announce it together.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
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
          <h2>From application to listed integration.</h2>
        </motion.div>

        <ol className="steps">
          {steps.map((step, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="step reveal in"
            >
              <span className="step-n">{step.n}</span>
              <div>
                <b>{step.title}</b>
                <span>{step.description}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
