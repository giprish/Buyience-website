"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IndustriesSection() {
  const industries = [
    {
      label: "Industrial",
      title: "Industrial Supplies / MRO",
      description: "High-SKU catalogs, contract pricing, and repeat replenishment quoting.",
      linkText: "Talk to us about MRO →",
      linkHref: "#contact",
    },
    {
      label: "Automotive",
      title: "Automotive Parts",
      description: "Fitment-heavy catalogs, dealer tiers, and fast counter-quoting.",
      linkText: "Talk to us about auto parts →",
      linkHref: "#contact",
    },
    {
      label: "Construction",
      title: "Building Materials",
      description: "Project-based quoting, staged deliveries, and trade pricing.",
      linkText: "Talk to us →",
      linkHref: "#contact",
    },
    {
      label: "F&B",
      title: "Food & Beverage Distribution",
      description: "Fast-moving inventory, customer-specific price lists, standing orders.",
      linkText: "Talk to us →",
      linkHref: "#contact",
    },
    {
      label: "Medical",
      title: "Medical & Lab Supplies",
      description: "Approval workflows, institutional buyers, and compliance-aware quoting.",
      linkText: "Talk to us →",
      linkHref: "#contact",
    },
    {
      label: "Electronics",
      title: "Electronics",
      description: "Volume tiers, fast-changing costs, and configuration-heavy quotes.",
      linkText: "Talk to us →",
      linkHref: "#contact",
    },
    {
      label: "Chemicals",
      title: "Chemicals",
      description: "Spec-driven quoting, unit conversions, and documentation-heavy orders.",
      linkText: "Talk to us →",
      linkHref: "#contact",
    },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="industries" id="industries">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          style={{ textAlign: "center", maxWidth: "var(--w-text)", margin: "0 auto" }}
        >
          <p className="eyebrow">BY INDUSTRY</p>
          <h2 style={{ marginTop: "14px" }}>
            Built for the way <span className="grad-text">your industry sells.</span>
          </h2>
          <p className="lede" style={{ marginTop: "16px", fontSize: "17px" }}>
            Quoting, configuration, and negotiation patterns differ by vertical. Nova Core adapts to each.
          </p>
        </motion.div>

        <div className="ind-grid">
          {/* Live Card: Corporate Gifting */}
          <motion.a
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="ind-card live text-left"
            href="/ai-quote-engine"
          >
            <div>
              <div className="ind-label">Live · Solutions / Corporate Gifting</div>
              <h3>Corporate Gifting</h3>
              <p>
                Quote every gift box in minutes — even in December. Kitted BOMs, win probability on every quote, and
                margin floors that survive seasonal discount pressure.
              </p>
              <div className="chips">
                <span>KITTING BOM</span>
                <span>WIN PROBABILITY</span>
                <span>SALES ROOM</span>
                <span>MARGIN FLOORS</span>
              </div>
            </div>
            <div className="ind-arrow" aria-hidden="true">
              →
            </div>
          </motion.a>

          {/* Standard Industry Cards */}
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              custom={idx + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="ind-card text-left"
            >
              <div className="ind-label">{ind.label}</div>
              <h3>{ind.title}</h3>
              <p>{ind.description}</p>
              <p className="ind-contact">
                <a href={ind.linkHref}>{ind.linkText}</a>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="ind-note"
        >
          Don't see your industry? Every vertical gets the same core platform —{" "}
          <a href="#contact">tell us how you sell</a> and we'll show you how it fits.
        </motion.p>
      </div>
    </section>
  );
}
