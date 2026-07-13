"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DigitalSalesRoomSection() {
  const features = [
    {
      title: "Real-Time Chat",
      description: "Instant messaging with typing indicators. No more waiting for email replies.",
    },
    {
      title: "Quote Context Always Visible",
      description: "Both parties see items, prices, and current offer status at all times.",
    },
    {
      title: "One-Click Counter Offers",
      description: "Propose new prices without leaving the conversation. Accept instantly.",
    },
    {
      title: "Full Audit Trail",
      description: "Every message, offer, and agreement logged for compliance and reference.",
    },
  ];

  return (
    <section className="dsr">
      <div className="container">
        {/* Section Header */}
        <div className="center-head">
          <p className="eyebrow">DIGITAL SALES ROOM</p>
          <h2>Priced the quote? Now close it live.</h2>
          <p className="lede">
            When a buyer counters, you don't drop back into a week of email. The Digital Sales Room is a shared, real-time
            workspace where buyer and seller see the same quote, message each other, and settle on a price in minutes.
          </p>
        </div>

        {/* DSR Grid */}
        <div className="dsr-grid">
          {/* Left Features list */}
          <div className="dsr-feats text-left">
            {features.map((feat) => (
              <div key={feat.title} className="dsr-feat">
                <b>{feat.title}</b>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>

          {/* Right Live Negotiation Sandbox */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="text-left"
          >
            <div className="mini-ui" style={{ maxWidth: "420px", margin: "0 auto" }} aria-label="Digital sales room in negotiation">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <b style={{ fontSize: "13.5px" }}>Sales Room · QT-4402</b>
                <div className="presence" aria-label="Buyer and seller online">
                  <span className="av on">BY</span>
                  <span className="av on">SL</span>
                  <span className="av">AI</span>
                </div>
              </div>
              
              <div className="mini-row done">
                <span className="tag">BUYER</span>
                <span>"Can you do €22.10?"</span>
              </div>
              <div className="mini-row warn">
                <span className="tag">FLOOR</span>
                <span>€22.10 breaches floor — blocked</span>
              </div>
              <div className="mini-row active">
                <span className="tag">COUNTER</span>
                <span>€22.90 proposed · one click</span>
              </div>
              <div className="mini-row">
                <span className="tag">LOG</span>
                <span>Every offer on the audit trail</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
