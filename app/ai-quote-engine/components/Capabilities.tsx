"use client";

import React from "react";
import { motion } from "framer-motion";

interface Capability {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Capabilities() {
  const capabilities: Capability[] = [
    {
      title: "Win probability scoring",
      description:
        "Real-time probability estimates based on customer history, pricing position and deal context. Know your chances before you quote.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 20V10M18 20V4M6 20v-4" />
        </svg>
      ),
    },
    {
      title: "Optimal pricing",
      description:
        "The AI finds the sweet spot between margin and conversion — analysing cost and customer context to recommend a price that wins without giving margin away.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ),
    },
    {
      title: "Margin-floor protection",
      description:
        "Never drop below your floor unknowingly. Automatic warnings, floors enforced in the workflow, and a full audit trail on every decision.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Line-item intelligence",
      description:
        "Recommendations at the product level, not just the quote total. See which lines have margin headroom and which need sharper pricing to win.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
      ),
    },
    {
      title: "Customer Context Engine",
      description:
        "Lifetime value, purchase history, payment reliability and acceptance rates all factored in. A gold-tier customer who always pays on time? The AI knows.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      ),
    },
    {
      title: "Digital Sales Room",
      description:
        "A real-time negotiation workspace where buyer and seller chat, counter-offer and reach agreement in minutes — not days of email threads.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="capabilities">
      <div className="container">
        {/* Section Header */}
        <div className="center-head">
          <p className="eyebrow">CAPABILITIES</p>
          <h2>Everything you need to price with confidence.</h2>
          <p className="lede">
            From the first quote to the final agreement, the AI guides every pricing decision with data — and keeps you in
            control.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="cap-grid">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="cap-card text-left"
            >
              <div className="cap-icon" aria-hidden="true">
                {cap.icon}
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
