"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useCurrency } from "@/components/CurrencyProvider";

const FEATURES = [
  {
    title: "Real-time chat",
    description: "Instant messaging with typing indicators. No more waiting for email replies.",
  },
  {
    title: "Quote always visible",
    description: "Both parties see items, prices and current offer status at all times.",
  },
  {
    title: "One-click counters",
    description: "Propose new prices without leaving the conversation. Accept instantly.",
  },
  {
    title: "Full audit trail",
    description: "Every message, offer and agreement logged for compliance and reference.",
  },
];

export default function DigitalSalesRoomSection() {
  const { format } = useCurrency();
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay },
        };

  return (
    <section className="dsr">
      <div className="container dsr-grid">
        {/* Left column: copy + feature grid */}
        <motion.div className="dsr-copy text-left" {...reveal(0)}>
          <p className="dsr-eyebrow">Digital Sales Room</p>
          <h2>
            Priced the quote?
            <br />
            Now close it live.
          </h2>
          <p className="lede">
            When a buyer counters, you don&apos;t drop back into a week of email. The Digital Sales Room is a shared,
            real-time workspace where buyer and seller see the same quote, message each other, and settle on a price in
            minutes.
          </p>

          <div className="dsr-feats">
            {FEATURES.map((feat) => (
              <div key={feat.title} className="dsr-feat">
                <div className="dsr-feat-head">
                  <span className="dsr-check" aria-hidden="true">
                    ✓
                  </span>
                  <b>{feat.title}</b>
                </div>
                <p>{feat.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right column: live sales room thread */}
        <motion.div {...reveal(0.08)}>
          <div className="dsr-card" aria-label="Digital sales room negotiation thread">
            <div className="dsr-card-head">
              <span className="dsr-card-dot" aria-hidden="true" />
              <span className="dsr-card-title">Sales Room · Quote #Q-4471</span>
              <span className="dsr-card-online">2 online</span>
            </div>

            <div className="dsr-thread">
              <div className="dsr-pill">Quote sent · 600 units · {format(2190, 2)}</div>

              <div className="dsr-msg dsr-msg--buyer">
                <div className="dsr-msg-from">Buyer</div>
                Can you do {format(3.35, 2)}/unit? We&apos;re comparing three vendors.
              </div>

              <div className="dsr-msg dsr-msg--ai">
                <div className="dsr-msg-from">✦ AI recommendation</div>
                Counter at {format(3.48, 2)} — protects 24% margin, 91% close probability. Offer Net 60 as the
                sweetener.
              </div>

              <div className="dsr-msg dsr-msg--you">
                <div className="dsr-msg-from">You</div>
                {format(3.48, 2)}/unit with Net 60 terms — works?
              </div>

              <div className="dsr-success">
                <span className="dsr-success-check" aria-hidden="true">
                  ✓
                </span>
                Deal closed — {format(2088, 0)} order · 23.9% margin secured.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
