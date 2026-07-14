"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SalesRoomSolution() {
  const features = [
    {
      title: "Real-time messaging",
      description:
        "Instant chat with typing indicators and online presence. See when the other party is reading and responding — no more waiting days for an email reply.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z" />
        </svg>
      ),
    },
    {
      title: "Quote context always visible",
      description:
        "Both parties see the same items, quantities, prices and current offer. Changes update live for everyone in the room. No more 'which version are we on?'",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
        </svg>
      ),
    },
    {
      title: "One-click counter-offers",
      description:
        "Propose new prices without drafting emails. Structured offer cards show exactly what's changing — accept with a single click.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
      ),
    },
    {
      title: "Complete audit trail",
      description:
        "Every message, offer and acceptance logged with timestamps — useful for compliance, disputes and team handoffs.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
        </svg>
      ),
    },
    {
      title: "Multi-party support",
      description:
        "Invite colleagues, managers, or procurement teams. Everyone sees the same conversation. Approvals happen in-thread.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Private & secure",
      description:
        "Each room is private to the deal's participants, encrypted in transit, with a full activity log. Your negotiations stay confidential.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
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
    <section id="solution">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE SOLUTION</p>
          <h2>One room. Both parties. Real-time.</h2>
          <p className="lede">
            The Digital Sales Room replaces scattered email threads with a shared workspace where the negotiation
            happens live.
          </p>
        </motion.div>

        <div className="feat-grid">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="feat-card reveal in"
            >
              <div className="feat-icon" aria-hidden="true">
                {feat.icon}
              </div>
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
