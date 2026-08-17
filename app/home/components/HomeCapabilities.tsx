"use client";

import React from "react";
import { motion } from "framer-motion";

const CAPABILITIES = [
  {
    title: "AI-powered intelligence",
    description:
      "Quote generation that suggests optimal prices with real-time margin protection. Generate quotes 80–90% faster at 95%+ accuracy.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
      </svg>
    ),
  },
  {
    title: "Headless architecture",
    description:
      "API-first from the ground up. Plug into WordPress, WooCommerce or your own frontend via clean RESTful APIs — flexible and future-ready.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    title: "B2B-first design",
    description:
      "Not a B2C platform with B2B bolted on. Purpose-built for complex sales, real negotiations, and serious business buyers.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 21V8l9-5 9 5v13" />
        <path d="M9 21v-8h6v8" />
      </svg>
    ),
  },
  {
    title: "Real-time commerce engine",
    description:
      "WebSocket-powered live negotiations, inventory updates, and instant price changes keep sales teams and customers perfectly in sync.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Quick onboarding",
    description:
      "Launch your store in 15 minutes with guided 7-step onboarding. No coding — from signup to accepting quote requests in under a day.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Margin intelligence",
    description:
      "Know exactly where to push and where to hold. Live margin guardrails and competitor-floor awareness on every single line.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function HomeCapabilities() {
  return (
    <section id="capabilities">
      <div className="container">
        <div className="center-head">
          <p className="eyebrow">CORE CAPABILITIES</p>
          <h2>Meet Nova Core</h2>
          <p className="lede">
            The AI-powered B2B commerce platform built for how businesses actually buy — quote engine, unified catalog,
            multi-warehouse inventory, customer-specific pricing, and a live negotiation room, all from one dashboard.
            Set up in minutes. Launch in days.
          </p>
        </div>
        <div className="cap-grid">
          {CAPABILITIES.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
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
