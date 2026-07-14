"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SupplierFAQ() {
  const faqs = [
    {
      q: "How does the 5-step onboarding work?",
      a: "Each supplier moves through a guided sequence: basic information (company, registration, tax ID, contacts), financial and tax details (banking, SWIFT, currency), compliance documents, logistics configuration, and a final review with validation before the supplier is created. The structure means no missed fields and no incomplete profiles.",
    },
    {
      q: "What certificate types are supported?",
      a: "Whatever your industry requires — quality certifications, licences, insurance, regulatory documents — uploaded as PDFs with file validation. Each document carries its own issue date, expiry date, and verification status, so the system isn't limited to a fixed list of certificate types.",
    },
    {
      q: "How does certificate status work?",
      a: "Status is calculated automatically from the dates you record: Valid while in date, Expiring as the expiry approaches, Expired once passed, and Pending while awaiting verification. You see colour-coded status without manually checking dates.",
    },
    {
      q: "Can I configure different logistics for each supplier?",
      a: "Yes — shipping methods, service coverage (domestic, international, cross-border), delivery schedules, transit times, minimum order values, temperature requirements, and special instructions are all set per supplier.",
    },
    {
      q: "What are delivery zones?",
      a: "Defined geographic areas a supplier delivers to, down to specific postal codes, each with its own rules and special instructions. When you're raising a purchase order, you know immediately whether a supplier covers the destination.",
    },
    {
      q: "Is there AI in the supplier management system?",
      a: "Supplier records are deliberately deterministic — onboarding steps, certificate statuses, and approval workflows follow explicit rules, because compliance data should never be a guess. The AI in Nova Core lives in quoting; supplier management feeds it clean, reliable operational data.",
    },
  ];

  return (
    <section id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">QUESTIONS, ANSWERED</p>
          <h2>Supplier management FAQs</h2>
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
