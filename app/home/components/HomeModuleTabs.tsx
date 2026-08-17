"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
  {
    id: "unified-commerce",
    label: "Unified Commerce",
    href: "/platform-overview",
    desc: "Run every B2B operation from one platform — multi-warehouse inventory with live stock, supplier approval workflows, self-service customer portals, Net 30/60/90 terms, and real-time order tracking.",
    points: [
      "Multi-warehouse inventory",
      "Product configurator (CPQ)",
      "Customer-specific pricing",
      "Supplier management",
      "Real-time order tracking",
    ],
    stat: "6-in-1",
    statLabel: "one dashboard",
  },
  {
    id: "ai-quote-engine",
    label: "AI Quote Engine",
    href: "/ai-quote-engine",
    desc: "Quotes that price themselves. The engine reads volume, history, and live margin to suggest the optimal price in seconds — then protects your floor automatically.",
    points: [
      "80–90% faster quoting",
      "95%+ pricing accuracy",
      "Real-time margin protection",
      "Competitor-floor awareness",
      "One-click quote-to-order",
    ],
    stat: "95%+",
    statLabel: "pricing accuracy",
  },
  {
    id: "dynamic-pricing",
    label: "Dynamic Pricing",
    href: "/ai-quote-engine",
    desc: "Customer-specific and tiered pricing that updates in real time. Volume breaks, contract rates, and promotions resolve instantly at the line level.",
    points: [
      "Tiered & volume pricing",
      "Contract & customer rates",
      "Instant price updates",
      "Margin guardrails",
      "Currency & tax handling",
    ],
    stat: "∞",
    statLabel: "tiers per customer",
  },
  {
    id: "digital-sales-room",
    label: "Digital Sales Room",
    href: "/digital-sales-room",
    desc: "A live negotiation room where buyer and seller close in minutes. WebSocket-powered counteroffers, AI-suggested responses, and instant PO capture.",
    points: [
      "Real-time negotiation",
      "AI-suggested counters",
      "Live inventory & pricing",
      "Shared quote workspace",
      "Instant PO capture",
    ],
    stat: "minutes",
    statLabel: "to close a deal",
  },
];

export default function HomeModuleTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const current = TABS[activeTab];

  return (
    <section className="home-suite">
      <div className="container">
        <div className="center-head">
          <p className="eyebrow">ONE PLATFORM</p>
          <h2>All your B2B operations</h2>
          <p className="lede">
            An AI-powered, API-first suite for unified B2B commerce — seamless engagement across every channel.
          </p>
        </div>

        <div className="tabs-wrap">
          <div className="tablist" role="tablist" aria-label="Platform modules">
            {TABS.map((tab, idx) => (
              <button
                key={tab.id}
                className="tab"
                type="button"
                role="tab"
                id={`home-tab-${idx + 1}`}
                aria-selected={activeTab === idx}
                aria-controls={tab.id}
                tabIndex={activeTab === idx ? 0 : -1}
                onClick={() => setActiveTab(idx)}
                onKeyDown={(e) => {
                  let nextIdx = idx;
                  if (e.key === "ArrowRight") nextIdx = (idx + 1) % TABS.length;
                  if (e.key === "ArrowLeft") nextIdx = (idx - 1 + TABS.length) % TABS.length;
                  if (e.key === "Home") nextIdx = 0;
                  if (e.key === "End") nextIdx = TABS.length - 1;
                  if (nextIdx !== idx) {
                    e.preventDefault();
                    setActiveTab(nextIdx);
                    document.getElementById(`home-tab-${nextIdx + 1}`)?.focus();
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative min-h-[380px] md:min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" as const }}
                className="panel on"
                role="tabpanel"
                id={current.id}
                aria-labelledby={`home-tab-${activeTab + 1}`}
              >
                <div className="panel-card text-left">
                  <h3>{current.label}</h3>
                  <p>{current.desc}</p>
                  <p className="panel-cta">
                    <Link href={current.href}>Explore this module →</Link>
                  </p>
                </div>
                <div className="panel-card features text-left">
                  <div className="home-tab-stat">
                    <strong>{current.stat}</strong>
                    <span>{current.statLabel}</span>
                  </div>
                  <h3>Key features</h3>
                  <ul className="feat-list">
                    {current.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
