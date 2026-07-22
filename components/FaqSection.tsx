"use client";

import React from "react";
import { motion } from "framer-motion";

export type FaqItem = {
  q: string;
  a: React.ReactNode;
};

type FaqSectionProps = {
  eyebrow: string;
  title: React.ReactNode;
  items: FaqItem[];
  /** Extra classes on the <section> (e.g. page section utility classes). */
  className?: string;
  /** Inline styles on the <section> (spacing / background overrides). */
  style?: React.CSSProperties;
};

/** Site-wide FAQ accordion: divider list with + toggle (Platform FAQ UI). */
export default function FaqSection({
  eyebrow,
  title,
  items,
  className = "",
  style,
}: FaqSectionProps) {
  return (
    <section id="faq" className={className || undefined} style={style}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="faq-list reveal in"
        >
          {items.map((faq, idx) => (
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
