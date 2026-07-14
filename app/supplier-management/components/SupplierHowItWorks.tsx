"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SupplierHowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Basic information",
      desc: "Company name, registration, tax ID, contact details",
    },
    {
      n: "2",
      title: "Financial & tax",
      desc: "Banking details, SWIFT code, currency preference",
    },
    {
      n: "3",
      title: "Compliance",
      desc: "Certificates, licenses, regulatory documents",
    },
    {
      n: "4",
      title: "Logistics",
      desc: "Shipping methods, delivery zones, transit times",
    },
    {
      n: "✓",
      title: "Review & create",
      desc: "Final review, validation, approval",
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
    <section className="how">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">ONBOARDING WORKFLOW</p>
          <h2>From first contact to approved supplier.</h2>
          <p className="lede">
            A structured process ensures complete supplier data. No missed fields, no incomplete profiles.
          </p>
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
                <span>{step.desc}</span>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
