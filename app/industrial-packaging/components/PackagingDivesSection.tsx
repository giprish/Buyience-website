"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PackagingDivesSection() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        {/* Dive 1: AI Quote Engine */}
        <div className="dive reveal in" id="dive-1">
          <div>
            <p className="eyebrow">AI QUOTE ENGINE</p>
            <h2>All the quantity breaks. One pass.</h2>
            <p>
              When an RFQ lands, four agents go to work: an Orchestrator coordinates the job, a Research agent pulls the
              customer's history and your catalog, a Pricing agent builds the numbers at each quantity break against your
              rules, and a Writer drafts the quote document.
            </p>
            <p>
              The draft arrives with a win probability score across 11+ factors — deal, relationship, and pricing
              position — so you know whether you're competitive before procurement tells you. Review, adjust, send.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Agent pipeline pricing three quantity tiers">
              <div className="mini-row done">
                <span className="tag">ORCHESTRATOR</span>
                <span>Job accepted · QT-3117</span>
              </div>
              <div className="mini-row done">
                <span className="tag">RESEARCH</span>
                <span>Buyer history · 6 prior orders</span>
              </div>
              <div className="mini-row done">
                <span className="tag">PRICING</span>
                <span>3 tiers priced · floors OK</span>
              </div>
              <div className="mini-row active">
                <span className="tag">WRITER</span>
                <span>Drafting quote document…</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 2: Spec-driven CPQ */}
        <div className="dive reveal in" id="dive-2">
          <div>
            <p className="eyebrow">SPEC-DRIVEN CPQ</p>
            <h2>The plate charge that never gets forgotten.</h2>
            <p>
              A custom-printed box isn't a SKU — it's a specification: dimensions, board grade, flute, print colours,
              tooling, packing. Nova Core's configurator captures the spec and generates a real bill of materials, so
              pricing is derived from components, not retyped from memory.
            </p>
            <p>
              Change the board grade or add a print colour, and every quantity tier reprices. One-time charges like
              plates and cutting dies live in the BOM — which means they never silently disappear from a requote.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Spec configurator generating a bill of materials">
              <div className="mini-row">
                <span className="tag">SPEC</span>
                <span>310×230×105 · E-flute · Kraft</span>
              </div>
              <div className="mini-row">
                <span className="tag">BOM-01</span>
                <span>Board · per-unit</span>
              </div>
              <div className="mini-row">
                <span className="tag">BOM-02</span>
                <span>Print · 1 colour · per-unit</span>
              </div>
              <div className="mini-row">
                <span className="tag">BOM-03</span>
                <span>Cutting die · one-time</span>
              </div>
              <div className="mini-row done">
                <span className="tag">PRICED</span>
                <span>3 tiers derived from spec</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 3: Margin floors */}
        <div className="dive reveal in" id="dive-3">
          <div>
            <p className="eyebrow">MARGIN FLOORS</p>
            <h2>A few points is the whole quarter. Protect them.</h2>
            <p>
              Packaging margins don't forgive improvisation. Set configurable floors once, and every quote respects
              them at every quantity break — whether it was drafted by AI or written by a rep at 6pm trying to close the
              month.
            </p>
            <p>
              When a deal moves to negotiation, the Digital Sales Room's AI assistant works the conversation with your
              floor already in play — so "can you sharpen the 10k price?" has a real answer, not a hopeful one.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Margin floor holding across quantity tiers">
              <div style={{ fontSize: "12.5px", color: "var(--muted)", marginBottom: "10px" }}>
                Requested discount · 10,000-unit tier
              </div>
              <div className="mini-row" style={{ padding: "6px 0" }}>
                <div className="mini-bar">
                  <i style={{ width: "58%" }}></i>
                </div>
                <span className="mono" style={{ fontSize: "11px", color: "var(--muted)" }}>
                  −9%
                </span>
              </div>
              <div className="floor-line" style={{ margin: "16px 0 12px" }}>
                <span>MARGIN FLOOR</span>
              </div>
              <div className="mini-row done">
                <span className="tag">HELD</span>
                <span>All tiers above floor · approved</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 4: Replenishment */}
        <div className="dive reveal in" id="dive-4">
          <div>
            <p className="eyebrow">REPLENISHMENT</p>
            <h2>Your best customers shouldn't have to email you.</h2>
            <p>
              In packaging, the account you already won is the revenue that matters — the same boxes, films, and
              fillers, ordered again and again. Every reorder that needs an email chain is friction, and friction is how
              a competitor with a portal takes the account.
            </p>
            <p>
              Nova Core's customer portal gives regulars self-service reordering against their saved specs and their
              pricing, with payment terms (Net 30/60/90) and real-time order tracking. The Customer Context Engine
              keeps their history loaded, so a requote starts from their reality, not a blank form.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Customer portal reorder">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <b style={{ fontSize: "13.5px" }}>Customer portal · Reorder</b>
                <span
                  className="tag"
                  style={{
                    background: "var(--mint-tint)",
                    color: "var(--mint)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    padding: "3px 8px",
                    borderRadius: "99px",
                  }}
                >
                  NET 30
                </span>
              </div>
              <div className="mini-row">
                <span className="tag">SAVED</span>
                <span>Mailer 310×230×105 · Kraft · 1c</span>
              </div>
              <div className="mini-row">
                <span className="tag">QTY</span>
                <span>5,000 units · contract pricing</span>
              </div>
              <div className="mini-row active">
                <span className="tag">TRACK</span>
                <span>Order placed · in fulfilment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
