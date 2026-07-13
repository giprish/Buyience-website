"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TabItem {
  id: string;
  label: string;
  title: string;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
  features: string[];
}

export default function CapabilitiesSuite() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: TabItem[] = [
    {
      id: "panel-1",
      label: "Unified B2B Commerce",
      title: "Unified B2B Commerce",
      paragraphs: [
        "Everything you need to run B2B commerce operations from one platform: multi-warehouse inventory with real-time stock tracking, supplier management with approval workflows, a product configurator (CPQ) that generates real bills of materials, customer portals with self-service, payment terms (Net 30/60/90), and real-time order tracking.",
        "Headless and API-first — 80+ endpoints and 38 webhook events — so it runs behind the storefront you already have.",
      ],
      linkText: "Explore the platform →",
      linkHref: "#",
      features: [
        "Multi-warehouse inventory",
        "Product configurator (CPQ) with real BOMs",
        "Customer-specific pricing",
        "Supplier management & approval workflows",
        "Real-time order tracking",
      ],
    },
    {
      id: "panel-2",
      label: "AI Quote Engine",
      title: "AI Quote Engine",
      paragraphs: [
        "Four specialised agents turn an RFQ into a complete quote: an Orchestrator coordinates the job, a Research agent assembles product and customer context, a Pricing agent applies your rules and margin floors, and a Writer drafts the document.",
        "Every quote carries a win probability score computed across 11+ factors — so you know where you stand before you send. You always review before anything leaves the building.",
      ],
      linkText: "See the Quote Engine →",
      linkHref: "/ai-quote-engine",
      features: [
        "Multi-agent quote drafting",
        "Win probability across 11+ factors",
        "Margin floors enforced on every draft",
        "Customer Context Engine",
        "Human review before send",
      ],
    },
    {
      id: "panel-3",
      label: "Digital Sales Room",
      title: "Digital Sales Room",
      paragraphs: [
        "Replace the PDF-and-pray workflow with one live link. The whole buying committee views the same quote in real time, you see engagement instead of silence, and nothing dies in a forwarding chain.",
        "When the conversation turns to price, the AI negotiation assistant activates inside the room — with your margin floor already in play.",
      ],
      linkText: "See the Sales Room →",
      linkHref: "#",
      features: [
        "Live shared quote link",
        "Real-time presence & engagement",
        "AI negotiation assistant",
        "Committee-friendly by design",
        "Margin floor active during negotiation",
      ],
    },
    {
      id: "panel-4",
      label: "Pricing & Margin Control",
      title: "Pricing & Margin Control",
      paragraphs: [
        "Customer-specific pricing, volume tiers, and configurable margin floors — applied consistently whether a quote is written by a rep or drafted by AI. Discount pressure has a hard stop, and it isn't anyone's willpower.",
        "Repeat buyers get their pricing history and preferences pre-loaded through the Customer Context Engine, so returning business doesn't restart from zero.",
      ],
      linkText: "Explore pricing controls →",
      linkHref: "#",
      features: [
        "Configurable margin floors",
        "Customer-specific & tiered pricing",
        "Pricing history per buyer",
        "Consistent rules for AI and human quotes",
        "Win-probability-aware quoting",
      ],
    },
  ];

  const currentTab = tabs[activeTab];

  return (
    <section className="suite" id="capabilities">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="tabs-wrap"
        >
          {/* Tablist */}
          <div className="tablist" role="tablist" aria-label="Platform capabilities">
            {tabs.map((tab, idx) => (
              <button
                key={tab.id}
                className="tab"
                role="tab"
                id={`tab-${idx + 1}`}
                aria-selected={activeTab === idx}
                aria-controls={tab.id}
                tabIndex={activeTab === idx ? 0 : -1}
                onClick={() => setActiveTab(idx)}
                onKeyDown={(e) => {
                  let nextIdx = idx;
                  if (e.key === "ArrowRight") nextIdx = (idx + 1) % tabs.length;
                  if (e.key === "ArrowLeft") nextIdx = (idx - 1 + tabs.length) % tabs.length;
                  if (e.key === "Home") nextIdx = 0;
                  if (e.key === "End") nextIdx = tabs.length - 1;
                  if (nextIdx !== idx) {
                    e.preventDefault();
                    setActiveTab(nextIdx);
                    const el = document.getElementById(`tab-${nextIdx + 1}`);
                    if (el) el.focus();
                  }
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Animating Panel Wrapper */}
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
                id={currentTab.id}
                aria-labelledby={`tab-${activeTab + 1}`}
              >
                <div className="panel-card text-left">
                  <h3>{currentTab.title}</h3>
                  {currentTab.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                  <p className="panel-cta">
                    <a href={currentTab.linkHref}>{currentTab.linkText}</a>
                  </p>
                </div>
                <div className="panel-card features text-left">
                  <h3>Key features</h3>
                  <ul className="feat-list">
                    {currentTab.features.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Flow Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flow"
          aria-label="Order of operations"
        >
          <span>RFQ in</span>
          <i>→</i>
          <span>AI drafts &amp; scores</span>
          <i>→</i>
          <span>Sales Room</span>
          <i>→</i>
          <span>Negotiate</span>
          <i>→</i>
          <span>Order &amp; fulfil ✓</span>
        </motion.div>
      </div>
    </section>
  );
}
