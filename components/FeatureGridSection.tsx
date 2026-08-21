"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type FeatureGridItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  /** Optional uppercase tag above the title (e.g. "REAL-TIME UPDATES") */
  label?: string;
};

export type FeatureGridSectionProps = {
  eyebrow: string;
  heading: React.ReactNode;
  lede?: React.ReactNode;
  features: FeatureGridItem[];
  /** Anchor id on the section root (e.g. "solution") */
  id?: string;
  /** Sitewide alternating-section-background rule */
  purple?: boolean;
  className?: string;
};

/**
 * Shared solution / capabilities section: centered header + feature card grid.
 *
 * Usage:
 * ```tsx
 * <FeatureGridSection
 *   eyebrow="THE SOLUTION"
 *   heading="One room. Both parties. Real-time."
 *   lede="..."
 *   features={[
 *     { title: "...", description: "...", icon: <svg>...</svg> },
 *   ]}
 * />
 * ```
 */
export default function FeatureGridSection({
  eyebrow,
  heading,
  lede,
  features,
  id,
  purple = false,
  className = "",
}: FeatureGridSectionProps) {
  const reduceMotion = useReducedMotion() === true;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section id={id} className={`${purple ? "bg-(--surface)" : ""} ${className}`.trim()}>
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2>{heading}</h2>
          {lede ? <p className="lede">{lede}</p> : null}
        </motion.div>

        <div className="feat-grid">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              custom={idx}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="feat-card reveal in"
            >
              <div className="feat-icon" aria-hidden="true">
                {feat.icon}
              </div>
              {feat.label ? <span className="feat-label">{feat.label}</span> : null}
              <h3>{feat.title}</h3>
              <p>{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
