"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GiftingDivesSection() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        {/* Dive 1: AI Quote Engine */}
        <div className="dive reveal in" id="dive-1">
          <div>
            <p className="eyebrow">AI QUOTE ENGINE</p>
            <h2>Quote the RFQ, not the spreadsheet.</h2>
            <p>
              When a request lands, four agents go to work: an Orchestrator coordinates the job, a Research agent assembles
              product and customer context, a Pricing agent builds the numbers against your rules, and a Writer drafts the
              quote itself.
            </p>
            <p>
              You get a complete draft with a win probability score — computed across 11+ factors — so you know where you
              stand before you send. Review, adjust, done.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Agent pipeline processing a quote">
              <div className="mini-row done">
                <span className="tag">ORCHESTRATOR</span>
                <span>Job accepted · QT-2041</span>
              </div>
              <div className="mini-row done">
                <span className="tag">RESEARCH</span>
                <span>Customer + catalog context loaded</span>
              </div>
              <div className="mini-row done">
                <span className="tag">PRICING</span>
                <span>250-unit tier applied · floor OK</span>
              </div>
              <div className="mini-row active">
                <span className="tag">WRITER</span>
                <span>Drafting quote document…</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 2: CPQ + BOM */}
        <div className="dive reveal in" id="dive-2">
          <div>
            <p className="eyebrow">CPQ + BOM</p>
            <h2>A gift box is a BOM. Treat it like one.</h2>
            <p>
              Every kit you sell is a bill of materials: the box, the products inside it, the branding treatment, the
              insert, the packaging tier. Nova Core's configurator builds kits as real BOMs, so pricing is derived — not
              retyped — and errors stop reaching production.
            </p>
            <p>Change a component, and quantity breaks, costs, and the quote total follow automatically.</p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Kit configurator generating a bill of materials">
              <div className="mini-row">
                <span className="tag">BOM-01</span>
                <span>Rigid box · lid print (1 colour)</span>
              </div>
              <div className="mini-row">
                <span className="tag">BOM-02</span>
                <span>Bottle 500ml · laser engrave</span>
              </div>
              <div className="mini-row">
                <span className="tag">BOM-03</span>
                <span>Chocolate 6-pc · sleeve</span>
              </div>
              <div className="mini-row">
                <span className="tag">BOM-04</span>
                <span>Insert card · gold foil</span>
              </div>
              <div className="mini-row done">
                <span className="tag">PRICED</span>
                <span>€45.36 / unit · 250 units</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 3: Digital Sales Room */}
        <div className="dive reveal in" id="dive-3">
          <div>
            <p className="eyebrow">DIGITAL SALES ROOM</p>
            <h2>Quotes that survive the forwarding chain.</h2>
            <p>
              The HR manager who requested your quote isn't the one who signs off on it. A PDF dies somewhere in that
              forwarding chain. A Sales Room link doesn't: the whole committee views the same live quote, and you see
              engagement instead of silence.
            </p>
            <p>
              When the conversation turns to price, the AI negotiation assistant activates — in real time, inside the
              room — with your margin floor already in play.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Sales room with multiple viewers online">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                <b style={{ fontSize: "13.5px" }}>Sales Room · QT-2041</b>
                <div className="presence" aria-label="Three participants, two online">
                  <span className="av on">HR</span>
                  <span className="av on">FI</span>
                  <span className="av">PR</span>
                </div>
              </div>
              <div className="mini-row done">
                <span className="tag">VIEWED</span>
                <span>Quote opened by 2 stakeholders</span>
              </div>
              <div className="mini-row done">
                <span className="tag">COMMENT</span>
                <span>"Can we do 300 units?"</span>
              </div>
              <div className="mini-row active">
                <span className="tag">ASSIST</span>
                <span>Negotiation assistant active</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 4: Margin Protection */}
        <div className="dive reveal in" id="dive-4">
          <div>
            <p className="eyebrow">MARGIN PROTECTION</p>
            <h2>December deals. January margins intact.</h2>
            <p>
              Set configurable margin floors once, and every quote — human-written or AI-drafted — respects them.
              Discount pressure has a hard stop, and it isn't the rep's willpower.
            </p>
            <p>
              Pair it with the Customer Context Engine: when a repeat corporate buyer comes back next season, last
              year's spec, pricing history, and preferences are already loaded. Repeat revenue stops depending on
              someone's sent folder.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Margin floor applied to a discount">
              <div style={{ fontSize: "12.5px", color: "var(--muted)", marginBottom: "10px" }}>Requested discount</div>
              <div className="mini-row" style={{ padding: "6px 0" }}>
                <div className="mini-bar">
                  <i style={{ width: "62%" }}></i>
                </div>
                <span className="mono" style={{ fontSize: "11px", color: "var(--muted)" }}>
                  −12%
                </span>
              </div>
              <div className="floor-line" style={{ margin: "16px 0 12px" }}>
                <span>MARGIN FLOOR</span>
              </div>
              <div className="mini-row done">
                <span className="tag">HELD</span>
                <span>Quote stays above floor · approved</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
