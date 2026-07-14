"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnerFAQ() {
  const faqs = [
    {
      q: "What commission do partners earn?",
      a: "Recurring commission on the subscriptions you bring, for as long as the client stays. The exact percentage is agreed on your intro call — the program is young enough that terms are set in conversation, and founding partners benefit from that directly.",
    },
    {
      q: "Who owns the client relationship?",
      a: "You do. You scope and bill your implementation work directly, and registered deals are protected as yours. Nova Core is the product inside your service business, not a competitor to it.",
    },
    {
      q: "Do I need to be technical?",
      a: "Less than you'd think. The platform is configuration-first — storefront generation, pricing rules, workflows, and the product configurator are all set up without code. Developers become valuable for custom frontends and API integrations, but a consultant can deliver a full implementation without them.",
    },
    {
      q: "How do I register a deal?",
      a: "Directly with the team. At founding stage, deal registration is a message to the people you already know from onboarding, not a portal form — and it's answered fast for the same reason. Registered deals are protected as yours.",
    },
    {
      q: "What support do partners get during implementations?",
      a: "Guided onboarding for your team, a trial environment to learn in, and direct access to the founding team while you deliver your first client projects. We'd rather over-support early partners than scale a program nobody succeeds in.",
    },
  ];

  return (
    <section className="how" id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">QUESTIONS, ANSWERED</p>
          <h2>Partner program FAQs</h2>
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
