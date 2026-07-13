"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowItConnects() {
  const steps = [
    {
      num: "01",
      title: "Connect",
      description: "Add your keys in settings — no code, no consultants. Each connection is scoped to your tenant.",
    },
    {
      num: "02",
      title: "Sync",
      description: "Products, orders, customers, and payments flow between systems automatically.",
    },
    {
      num: "03",
      title: "React",
      description:
        "38 webhook events keep everything current — a paid order in Nova Core becomes a triggered flow in Klaviyo, a label in Shiprocket, a conversion in Google Ads.",
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
    <section>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>Connected in settings. Kept alive by events.</h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="steps3">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="s3 text-left"
            >
              <span className="n">{step.num}</span>
              <b>{step.title}</b>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
