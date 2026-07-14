"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InventoryFAQ() {
  const faqs = [
    {
      q: "How does stock status get calculated?",
      a: "Automatically, from your thresholds. You set safety stock per product and location; Nova Core compares available stock against it and assigns In Stock, Low Stock, or Out of Stock — colour-coded in the dashboard. Status recalculates in real time as orders are placed, goods are received, or transfers move.",
    },
    {
      q: "Can I track inventory across multiple warehouses?",
      a: "Yes — each warehouse holds its own on-hand quantities and safety stock levels, and you can filter the inventory view by location or see the unified total. Multi-country operations are supported with currency handling, and a default location drives storefront status calculations.",
    },
    {
      q: "How do purchase orders work?",
      a: "When stock falls below safety stock, you get a low-stock alert. One click generates a purchase order with the quantity auto-calculated from your thresholds and the preferred supplier already linked. When goods arrive, one-click receiving updates stock instantly.",
    },
    {
      q: "Can I move inventory between warehouses?",
      a: "Yes — transfer orders move stock between locations. Select source and destination, choose products and quantities, set a priority level, and track the transfer through Pending → In Transit → Completed. Stock levels update at both locations automatically.",
    },
    {
      q: "What permissions can I set for team members?",
      a: "Access is permission-based, so you control who can view inventory, adjust quantities, create purchase orders, and manage transfers — keeping sensitive operations like stock adjustments with the right people.",
    },
    {
      q: "Is there AI in the inventory system?",
      a: "Inventory is deliberately deterministic — counts, statuses, and POs follow your thresholds and rules, because stock numbers should never be a guess. The AI in Nova Core lives in quoting, where it prices against real-time availability. Demand forecasting is on our roadmap, and we'd rather ship it properly than claim it early.",
    },
  ];

  return (
    <section className="challenge" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">QUESTIONS, ANSWERED</p>
          <h2>Inventory management FAQs</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="faq-list reveal in"
        >
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
