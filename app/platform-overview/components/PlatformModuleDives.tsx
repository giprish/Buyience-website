"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PlatformModuleDives() {
  const dives = [
    {
      eyebrow: "MODULE 01 · AI QUOTE ENGINE",
      title: "Quotes in Seconds. Margins Protected.",
      features: [
        "2-click quote generation",
        "Win probability scoring across 11+ factors",
        "Margin protection with cost alerts",
        "Professional PDF delivery",
      ],
      ui: (
        <div className="mini-ui" aria-label="AI quote pipeline">
          <div className="mini-row done">
            <span className="tag">RESEARCH</span>
            <span>Customer + catalog context loaded</span>
          </div>
          <div className="mini-row done">
            <span className="tag">PRICING</span>
            <span>Rules applied · floor OK</span>
          </div>
          <div className="mini-row done">
            <span className="tag">SCORE</span>
            <span>Win probability attached</span>
          </div>
          <div className="mini-row active">
            <span className="tag">WRITER</span>
            <span>Drafting quote PDF…</span>
          </div>
        </div>
      ),
    },
    {
      eyebrow: "MODULE 02 · ORDER & INVENTORY",
      title: "Orders Flow. Inventory Syncs.",
      features: [
        "10+ order statuses across the lifecycle",
        "Multi-warehouse stock tracking, allocation & transfer orders",
        "Low-stock alerts",
        "1-click quote-to-order conversion",
      ],
      ui: (
        <div className="mini-ui" aria-label="Order pipeline">
          <div className="mini-row done">
            <span className="tag">QUOTE</span>
            <span>Accepted · converted to order</span>
          </div>
          <div className="mini-row done">
            <span className="tag">ALLOCATE</span>
            <span>Stock reserved · Warehouse B</span>
          </div>
          <div className="mini-row active">
            <span className="tag">FULFIL</span>
            <span>Picking in progress</span>
          </div>
          <div className="mini-row">
            <span className="tag">TRACK</span>
            <span>Buyer sees live status</span>
          </div>
        </div>
      ),
    },
    {
      eyebrow: "MODULE 03 · SUPPLIER MANAGEMENT",
      title: "Every Supplier. One Workflow.",
      features: [
        "5-step onboarding with approvals",
        "Certificate & compliance tracking",
        "Delivery zones & logistics",
        "Supplier performance analytics",
      ],
      ui: (
        <div className="mini-ui" aria-label="Supplier onboarding steps">
          <div className="mini-row done">
            <span className="tag">STEP 1-3</span>
            <span>Profile · documents · compliance</span>
          </div>
          <div className="mini-row done">
            <span className="tag">STEP 4</span>
            <span>Delivery zones configured</span>
          </div>
          <div className="mini-row active">
            <span className="tag">STEP 5</span>
            <span>Awaiting approval — Ops team</span>
          </div>
        </div>
      ),
    },
    {
      eyebrow: "MODULE 04 · PRODUCT CONFIGURATOR",
      title: "Complex Products Made Simple.",
      features: [
        "Unlimited option groups",
        "Real-time conflict resolution",
        "Dynamic pricing as configurations change",
        "Quote-ready configurations",
      ],
      ui: (
        <div className="mini-ui" aria-label="Configurator with conflict resolution">
          <div className="mini-row">
            <span className="tag">OPT</span>
            <span>Frame · Size L · Finish: matte</span>
          </div>
          <div className="mini-row done">
            <span className="tag">CHECK</span>
            <span>No conflicts · configuration valid</span>
          </div>
          <div className="mini-row done">
            <span className="tag">PRICE</span>
            <span>Repriced dynamically</span>
          </div>
          <div className="mini-row active">
            <span className="tag">READY</span>
            <span>Add to quote</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">MODULES AT A GLANCE</p>
          <h2>Four Modules. Complete B2B Commerce.</h2>
          <p className="lede">
            Each module works independently or together. Start with what you need, expand as you grow.
          </p>
        </motion.div>

        {dives.map((dive, idx) => {
          const isReversed = idx % 2 === 1;
          const text = (
            <div key="text">
              <p className="eyebrow">{dive.eyebrow}</p>
              <h2>{dive.title}</h2>
              <ul>
                {dive.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <span className="ic" aria-hidden="true">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          );
          const visual = (
            <motion.div
              key="visual"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="visual"
            >
              {dive.ui}
            </motion.div>
          );
          return (
            <div key={idx} className="dive reveal in">
              {isReversed ? (
                <>
                  {visual}
                  {text}
                </>
              ) : (
                <>
                  {text}
                  {visual}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
