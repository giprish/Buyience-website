"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SalesRoomDivesSection() {
  return (
    <section className="challenge" style={{ paddingBottom: "60px" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE AI IN THE ROOM</p>
          <h2>A negotiation copilot that knows your floor.</h2>
          <p className="lede">
            Fast is only good if it's also safe. The AI assistant reads the negotiation as it happens and suggests the
            next move — always grounded in your margin floor, the buyer's context, and what actually raises the odds of
            closing.
          </p>
        </motion.div>

        {/* Dive 1: Floor-Grounded Suggestions */}
        <div className="dive reveal in" style={{ borderTop: 0 }}>
          <div>
            <p className="eyebrow">FLOOR-GROUNDED SUGGESTIONS</p>
            <h2>Every suggestion respects your margin. By construction.</h2>
            <p>
              When the buyer pushes on price, the AI doesn't just draft a polite reply — it proposes a specific counter,
              shows the margin it leaves you, and tells you what it does to win probability. All of it computed above your
              configured floor.
            </p>
            <p>
              You choose: build a formal counter from the suggestion, insert it as a reply, or ignore it entirely. Speed
              without a single below-floor error — that's the point.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="AI suggestion grounded in the margin floor">
              <div className="ai-card" style={{ marginTop: 0 }}>
                <div className="ai-h">✦ AI SUGGESTION</div>
                <p>
                  Counter robe at <b>$20.50</b> (24.6% margin), hold tee at <b>$8.80</b> — win probability <b>81%</b>, above
                  your <b>22% floor</b>.
                </p>
              </div>
              <div className="mini-row warn">
                <span className="tag">BLOCKED</span>
                <span>$8.40 request breaches floor at qty 24</span>
              </div>
              <div className="mini-row done">
                <span className="tag">SAFE</span>
                <span>$8.40 works at qty 30 — floor holds</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 2: AI Quote Triggers */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">AI QUOTE TRIGGERS</p>
            <h2>It spots the deal inside the conversation.</h2>
            <p>
              The copilot listens for signals — a quantity mention, a budget hint, a deadline — and surfaces the
              opportunity as a concrete move: "Offer $8.40 at qty 30 — adds $252 volume, holds 27.5% margin."
            </p>
            <p>
              One click applies it to a structured counter-offer. The contextual read your best negotiator does
              instinctively, available on every deal, at any hour.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="AI quote trigger">
              <div className="mini-row done">
                <span className="tag">SIGNAL</span>
                <span>"…if we bump qty to 30?"</span>
              </div>
              <div className="mini-row active">
                <span className="tag">TRIGGER</span>
                <span>Volume-break opportunity detected</span>
              </div>
              <div className="ai-card">
                <div className="ai-h">✦ SUGGESTED NEXT MOVE</div>
                <p>
                  Offer <b>$8.40 @ qty 30</b> — adds <b>$252</b> volume, holds <b>27.5% margin</b>.
                </p>
                <div className="acts">
                  <span>⇄ Apply to counter</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 3: Rounds & The AI Read */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">ROUNDS &amp; THE AI READ</p>
            <h2>Every round on the record. Momentum, readable.</h2>
            <p>
              Counter history keeps each round — who moved, by how much, on which lines — as a structured timeline, not an
              inbox archaeology project. The current gap is always one number.
            </p>
            <p>
              Above it, the AI read tells you what the pattern means: "Buyer moved up 5% across 3 rounds. Accepting Round 3
              captures 86.9% of opening value at healthy margin." You decide with the whole negotiation in view.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui rounds" aria-label="Counter history with AI read">
              <div className="r">
                <span className="rn">R3</span>
                <div className="rt">
                  <b>Buyer counter · pending</b>
                  <span>"Can you do $8.40 on the tee at qty 30?"</span>
                </div>
                <div className="amt">
                  $35,860<i>▼ $1,390 gap</i>
                </div>
              </div>
              <div className="r">
                <span className="rn">R2</span>
                <div className="rt">
                  <b>Seller counter · rejected</b>
                  <span>Met partway on the robe</span>
                </div>
                <div className="amt">$37,250</div>
              </div>
              <div className="r">
                <span className="rn">R1</span>
                <div className="rt">
                  <b>Buyer counter · rejected</b>
                  <span>Initial targets attached</span>
                </div>
                <div className="amt">$34,120</div>
              </div>
              <div className="trend">▾ Down 13.1% · trending to close</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
