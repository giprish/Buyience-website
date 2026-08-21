"use client";

import React from "react";
import { motion } from "framer-motion";
import OutcomesStrip from "@/components/OutcomesStrip";

const OUTCOMES = [
  {
    big: "< 2 weeks",
    title: "Time to go live",
    description: "vs. 6–12 month enterprise implementations",
  },
  {
    big: "2 clicks",
    title: "To a complete quote",
    description: "AI drafts it; you review and send",
  },
  {
    big: "Every quote",
    title: "Margin-checked",
    description: "Floors enforced before anything goes out",
  },
  {
    big: "1 platform",
    title: "Replaces the stack",
    description: "No more disconnected spreadsheets",
  },
];

export default function PlatformOutcomes({ purple = false }: { purple?: boolean }) {
  return (
    <section className={purple ? "bg-(--surface)" : undefined}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">OUTCOMES</p>
          <h2>What Changes When B2B Commerce Works</h2>
        </motion.div>

        <OutcomesStrip items={OUTCOMES} />
      </div>
    </section>
  );
}
