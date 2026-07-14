"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InventoryCapabilities() {
  const capabilities = [
    {
      chip: "REAL-TIME",
      title: "Real-time stock tracking",
      description:
        "Monitor on-hand, committed, expected and available inventory. Stock updates instantly as orders are placed or goods received.",
    },
    {
      chip: "PER LOCATION",
      title: "Multi-warehouse management",
      description:
        "Track inventory separately per warehouse. Filter by location, set location-specific safety stock, designate defaults.",
    },
    {
      chip: "COLOUR-CODED",
      title: "Automated stock status",
      description:
        "In Stock, Low Stock and Out of Stock are calculated automatically from your thresholds — colour-coded for instant visibility.",
    },
    {
      chip: "ONE-CLICK PO",
      title: "Purchase order automation",
      description:
        "Generate POs in one click when stock falls below safety stock. Quantities auto-calculate and link to preferred suppliers.",
    },
    {
      chip: "TRACKED MOVES",
      title: "Inter-warehouse transfers",
      description: "Move inventory between locations with transfer orders. Track Pending → In Transit → Completed, with priority levels.",
    },
    {
      chip: "BUILT IN",
      title: "Built-in supplier management",
      description:
        "Onboard suppliers, track compliance and link them directly to purchase orders — no third-party tool needed.",
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
          <h2>Everything you need to control inventory.</h2>
          <p className="lede">
            Real-time tracking, automated workflows and multi-location management — built for B2B operations.
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
