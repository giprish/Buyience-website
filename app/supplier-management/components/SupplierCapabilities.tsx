"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SupplierCapabilities() {
  const capabilities = [
    {
      chip: "GUIDED WORKFLOW",
      title: "5-step onboarding",
      description:
        "Structured workflow from basic info to approval. Company details, financials, compliance, logistics, and final review — all in one process.",
    },
    {
      chip: "AUTO-TRACKING",
      title: "Compliance & certificates",
      description:
        "Upload and track compliance documents. Certificate expiry monitoring with status automation: Valid, Pending, Expiring, Expired.",
    },
    {
      chip: "USD · EUR · GBP · INR",
      title: "Financial management",
      description:
        "Capture banking details with multi-currency support. Masked account numbers for security. Track payment terms and spending.",
    },
    {
      chip: "VISUAL INDICATORS",
      title: "Status workflow",
      description:
        "Manage supplier status through an approval workflow — colour-coded badges with instant updates at every stage.",
    },
    {
      chip: "MULTI-ZONE SUPPORT",
      title: "Logistics configuration",
      description:
        "Configure shipping methods, service coverage, and delivery schedules. Set minimum orders, transit times, and temperature requirements.",
    },
    {
      chip: "MULTI-SELECT",
      title: "Bulk operations",
      description:
        "Select multiple suppliers for bulk actions. Multi-select, select all, bulk delete with confirmation. Permission-controlled operations.",
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
    <section id="capabilities">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">CORE CAPABILITIES</p>
          <h2>Everything you need to manage suppliers.</h2>
          <p className="lede">
            From onboarding to compliance. From logistics to purchase orders. One system for the entire supplier
            lifecycle.
          </p>
        </motion.div>

        <div className="cap-grid">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="cap-card reveal in"
            >
              <span className="chip">{cap.chip}</span>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
