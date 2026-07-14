"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnerFAQ() {
  const faqs = [
    {
      q: "How many customers would my integration reach?",
      a: "Fewer than a mature platform would offer you — we're a founding-stage company with paying customers in corporate gifting and industrial supplies, and we'd rather tell you that than inflate a number you'd check anyway. The trade is position: an early integration becomes the default in its category and grows with the platform, instead of being one of thousands nobody scrolls to.",
    },
    {
      q: "What does the integration actually connect to?",
      a: "Everything the platform does: quotes, orders, inventory across warehouses, suppliers, customers, and payments — 80+ REST endpoints, with 38 webhook events so your system reacts in real time rather than polling. Nova Core is API-first by architecture, so there's no functionality locked behind the UI.",
    },
    {
      q: "Is there a fee to join the program?",
      a: "No. We're not running a certification business — we want the integrations our customers ask for to exist.",
    },
    {
      q: "Who builds and maintains the integration?",
      a: "Typically you do, against our API and sandbox, with our engineers available while you build. For integrations our customers are actively asking for, we'll talk about sharing the work — that's a conversation, not a policy.",
    },
    {
      q: "How do you decide which partners to accept?",
      a: "Mostly customer demand. If our customers are asking for you, the conversation is short. If they aren't yet, we'll be straight with you about that rather than string you along through a partner funnel.",
    },
  ];

  return (
    <section id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">QUESTIONS, ANSWERED</p>
          <h2>Technology partner FAQs</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="faq-list reveal in"
        >
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
