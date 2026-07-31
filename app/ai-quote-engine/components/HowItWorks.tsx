"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Request arrives",
    description:
      "The customer submits via storefront, email or a sales rep. Nova Core captures every detail instantly.",
  },
  {
    n: "2",
    title: "AI analyses & recommends",
    description:
      "In seconds, the AI weighs history, margins, inventory and deal context, and returns a win-probability score and a recommended price.",
  },
  {
    n: "3",
    title: "You review & decide",
    description:
      "See the recommendation with full context. Accept, adjust or escalate — the margin floor stays enforced. One click to send.",
  },
  {
    n: "done",
    title: "Negotiate in real time",
    description:
      "If the buyer counters, close it in the Digital Sales Room — in minutes, not days of email.",
  },
] as const;

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container">
        <div className="center-head">
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From quote request to closed deal.</h2>
          <p className="lede">
            A workflow that keeps your team focused on relationships, not spreadsheets.
          </p>
        </div>

        <ol className="steps">
          {steps.map((step, index) => {
            const done = step.n === "done";
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: 0.08 + index * 0.1,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`step${done ? " step-done" : ""}`}
              >
                <span className="step-n" aria-hidden="true">
                  {done ? <Check strokeWidth={2.5} className="step-check" /> : step.n}
                </span>
                <div className="step-copy">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
