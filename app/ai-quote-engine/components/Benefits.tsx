"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Benefits() {
  const benefitRows = [
    {
      eyebrow: "CONVERSATIONAL AI NEGOTIATOR",
      title: "AI that thinks like your best sales rep.",
      description:
        "Our AI doesn't just fill forms — it understands context. It analyses why customers ask for specific prices, factors in relationship value and urgency, and suggests responses that close deals.",
      visual: (
        <div className="mini-ui" aria-label="AI negotiation reasoning">
          <div className="mini-row done">
            <span className="tag">SIGNAL</span>
            <span>Counter-offer received · −8%</span>
          </div>
          <div className="mini-row done">
            <span className="tag">CONTEXT</span>
            <span>Gold tier · pays on time · 14 orders</span>
          </div>
          <div className="mini-row active">
            <span className="tag">SUGGEST</span>
            <span>Counter at −5% · floor holds</span>
          </div>
        </div>
      ),
    },
    {
      eyebrow: "REAL-TIME INTELLIGENCE",
      title: "Every decision backed by live data.",
      description:
        "The customer's payment history, current inventory levels, pricing position and past acceptance rates — synthesised into an actionable recommendation in seconds. No more guessing. No more gut feelings.",
      visual: (
        <div className="mini-ui" aria-label="Live data inputs">
          <div className="mini-row done">
            <span className="tag">HISTORY</span>
            <span>Payment reliability · excellent</span>
          </div>
          <div className="mini-row done">
            <span className="tag">STOCK</span>
            <span>1,240 units on hand · 2 warehouses</span>
          </div>
          <div className="mini-row done">
            <span className="tag">PRICING</span>
            <span>Position vs list · acceptance rates</span>
          </div>
          <div className="mini-row active">
            <span className="tag">OUTPUT</span>
            <span>Recommendation + win score</span>
          </div>
        </div>
      ),
      isReversed: true,
    },
    {
      eyebrow: "CONTEXT-AWARE PRICING",
      title: "Understanding why, not just what.",
      description:
        "Understanding not just what customers ask for, but why. A high-value customer asking for a discount after 45 days of silence? The AI recognises a re-engagement opportunity and suggests pricing to win them back.",
      visual: (
        <div className="mini-ui" aria-label="Context-aware pricing example">
          <div className="mini-row">
            <span className="tag">PATTERN</span>
            <span>45 days silent · high lifetime value</span>
          </div>
          <div className="mini-row done">
            <span className="tag">READ</span>
            <span>Re-engagement opportunity</span>
          </div>
          <div className="mini-row active">
            <span className="tag">SUGGEST</span>
            <span>Win-back price · above floor</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        {/* Section Header */}
        <div className="center-head" style={{ marginTop: "40px" }}>
          <p className="eyebrow">BENEFITS</p>
          <h2>We didn't just digitise the old process.</h2>
          <p className="lede">
            We reimagined what B2B quoting could be with AI that reasons about your deals — not a form-filler.
          </p>
        </div>

        {/* Narrative Rows */}
        <div className="flex flex-col">
          {benefitRows.map((row, index) => (
            <div key={row.title} className="dive">
              {/* Text Area */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55 }}
                className={`text-left ${row.isReversed ? "lg:order-2" : ""}`}
              >
                <p className="eyebrow">{row.eyebrow}</p>
                <h2>{row.title}</h2>
                <p>{row.description}</p>
              </motion.div>

              {/* Visual Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className={`visual ${row.isReversed ? "lg:order-1" : ""}`}
              >
                {row.visual}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
