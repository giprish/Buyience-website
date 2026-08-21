"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "./OutcomesStrip.module.css";

export type OutcomesStripItem = {
  big: string;
  title: string;
  description?: string;
};

type OutcomesStripProps = {
  items: OutcomesStripItem[];
  className?: string;
};

export default function OutcomesStrip({ items, className }: OutcomesStripProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55 }}
      className={[styles.banner, className].filter(Boolean).join(" ")}
    >
      {items.map((item) => (
        <div key={item.title} className={styles.item}>
          <span className={styles.value}>{item.big}</span>
          <b className={styles.title}>{item.title}</b>
          {item.description ? <p className={styles.desc}>{item.description}</p> : null}
        </div>
      ))}
    </motion.div>
  );
}
