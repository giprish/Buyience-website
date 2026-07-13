"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SelfServeSection() {
  const options = [
    {
      title: "Start the free trial",
      description:
        "14 days, no card required. Your storefront is generated on signup — you'll learn more in an hour than we could tell you in a call.",
      linkText: "Start free trial →",
      linkHref: "/pricing",
    },
    {
      title: "Pricing & plan comparison",
      description:
        "Plans, add-ons, limits, and what's included at each tier — laid out in full, with no 'contact us for pricing.'",
      linkText: "See pricing →",
      linkHref: "/pricing",
    },
    {
      title: "Check the integrations directory",
      description:
        "Wondering whether we connect to your stack? The directory lists every live integration — and lets you request what's missing.",
      linkText: "Browse integrations →",
      linkHref: "/integrations",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
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
          <p className="eyebrow">FASTER THAN WAITING</p>
          <h2>You might not need us at all.</h2>
          <p className="lede">
            Some questions have answers already — and the fastest way to evaluate the platform is to use it.
          </p>
        </motion.div>

        {/* SS Grid */}
        <div className="ss-grid">
          {options.map((option, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="ss reveal in"
            >
              <b>{option.title}</b>
              <p>{option.description}</p>
              <Link href={option.linkHref} className="text-[#6D28D9] font-semibold hover:underline">
                {option.linkText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
