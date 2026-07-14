"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GiftingCapabilities() {
  const capabilities = [
    {
      title: "AI Quote Engine",
      description:
        "Multi-agent AI drafts the quote — research, pricing, and copy — and scores win probability across 11+ factors before you send.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      ),
      link: "#dive-1",
    },
    {
      title: "CPQ with real BOM",
      description:
        "Configure kitted gift boxes as actual bills of materials: products, branding, inserts, packaging — priced correctly, every time.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M3 11h18M12 7V3M8 3h8" />
        </svg>
      ),
      link: "#dive-2",
    },
    {
      title: "Digital Sales Room",
      description:
        "One live link instead of a PDF. The whole buying committee sees the quote, and the AI negotiation assistant activates when talks start.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      ),
      link: "#dive-3",
    },
    {
      title: "Margin protection",
      description: "Set your floor once. Seasonal discounting pressure never takes a deal below it.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      link: "#dive-4",
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
          className="narrow reveal in"
          style={{ textAlign: "center" }}
        >
          <p className="eyebrow">HOW NOVA CORE FITS</p>
          <h2 style={{ marginTop: "14px" }}>Four things gifting suppliers stop doing by hand.</h2>
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
              <div className="cap-icon" aria-hidden="true">
                {cap.icon}
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
              <a className="cap-link" href={cap.link}>
                How it works ↓
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
