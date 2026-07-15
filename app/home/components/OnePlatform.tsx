"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionCapsule from "@/components/SectionCapsule";
import { Check } from "lucide-react";

const tabs = [
  {
    id: "commerce",
    label: "Unified B2B Commerce",
    title: "Unified B2B Commerce",
    body: "Everything you need to run B2B commerce operations from one unified platform. Multi-warehouse inventory management with real-time stock tracking, supplier management with approval workflows, product configurator (CPQ) with conflict resolution, customer portals with self-service, payment terms (Net 30/60/90), and real-time order tracking.",
    features: [
      "Multi-warehouse inventory",
      "Product configurator (CPQ)",
      "Customer-specific pricing",
      "Supplier management",
      "Real-time order tracking",
    ],
  },
  {
    id: "quote",
    label: "AI-Quote Engine",
    title: "AI Quote Engine",
    body: "Generate winning quotes in seconds. Nova Core scores win probability, protects your margin floor, and drafts prices your sales team can trust — so deals move faster without leaving money on the table.",
    features: [
      "AI-suggested pricing",
      "Win probability scoring",
      "Margin floor protection",
      "Customer-tier awareness",
      "Quote-to-order handoff",
    ],
  },
  {
    id: "pricing",
    label: "Dynamic Pricing Optimization",
    title: "Dynamic Pricing Optimization",
    body: "Customer-specific pricing, volume tiers, and contract rates in one engine. Push promotions or hold the floor — with full visibility into margin impact before anyone hits send.",
    features: [
      "Tiered & contract pricing",
      "Volume breaks",
      "Promotion overlays",
      "Margin intelligence",
      "Audit-ready change history",
    ],
  },
  {
    id: "dsr",
    label: "Digital Sales Room",
    title: "Digital Sales Room",
    body: "Bring buyers and sellers into one shared workspace. Negotiate quotes, share documents, and close deals in minutes — not days of email chains and spreadsheet chaos.",
    features: [
      "Real-time negotiation",
      "Shared deal workspace",
      "Document collaboration",
      "Live inventory sync",
      "Committee-ready links",
    ],
  },
];

export default function OnePlatform() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="home-section home-section-muted">
      <div className="home-container text-center">
        <SectionCapsule variant="soft">Digital Commerce Platform</SectionCapsule>
        <h2 className="home-h2 mt-5">One Platform. All B2B Commerce Operations</h2>
        <p className="home-lede mx-auto mt-4 max-w-3xl">
          Explore an AI-powered, API-first solution for unified B2B commerce — a complete service suite that delivers
          seamless customer engagement across all channels.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all sm:px-5 sm:text-[14px] ${
                  isActive
                    ? "bg-[#7C3AED] text-white shadow-[0_6px_20px_rgba(124,58,237,0.28)]"
                    : "bg-white text-[#5B5F76] border border-[#E8E4F4] hover:border-[#D7D0EC] hover:text-[#171241]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-[#D7D0EC] bg-white text-left shadow-[0_8px_32px_rgba(23,18,65,0.06)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
              className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:p-10"
            >
              <div>
                <h3 className="text-xl font-bold text-[#171241] sm:text-2xl">{current.title}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#5B5F76]">{current.body}</p>
              </div>
              <div>
                <h4 className="text-[13px] font-bold uppercase tracking-wider text-[#7C3AED]">Key Features</h4>
                <ul className="mt-4 divide-y divide-[#E8E4F4]">
                  {current.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 py-3 text-[14.5px] font-medium text-[#332C63]">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F0EAFD] text-[#7C3AED]">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
