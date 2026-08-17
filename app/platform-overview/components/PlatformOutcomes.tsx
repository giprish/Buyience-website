"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./PlatformOutcomes.module.css";

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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className={styles.banner}
          style={{
            background:
              "linear-gradient(105deg, #8b5cf6 0%, #6e2cf4 42%, #4c1d95 100%)",
          }}
        >
          {OUTCOMES.map((out) => (
            <div key={out.title} className={styles.item}>
              <span className={styles.value}>{out.big}</span>
              <b className={styles.title}>{out.title}</b>
              <p className={styles.desc}>{out.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
