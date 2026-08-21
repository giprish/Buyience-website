"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type ChallengeCard = {
  /** Number ("01") or tag label ("FRAGMENTED") shown above the title */
  marker: string;
  title: string;
  description: string;
};

export type ChallengeSectionProps = {
  eyebrow: string;
  heading: React.ReactNode;
  lede?: React.ReactNode;
  cards: ChallengeCard[];
  /**
   * `number` — large purple numerals (digital sales room style).
   * `tag` — compact coral uppercase labels (order-management problem style).
   */
  markerVariant?: "number" | "tag";
  /** Sitewide alternating-section-background rule */
  purple?: boolean;
  className?: string;
};

/**
 * Shared challenge / problem section: centered header + 3-up card grid.
 *
 * Usage:
 * ```tsx
 * <ChallengeSection
 *   eyebrow="THE CHALLENGE"
 *   heading="B2B deals die in email threads."
 *   lede="..."
 *   cards={[
 *     { marker: "01", title: "...", description: "..." },
 *   ]}
 *   purple
 * />
 * ```
 */
export default function ChallengeSection({
  eyebrow,
  heading,
  lede,
  cards,
  markerVariant = "number",
  purple = false,
  className = "",
}: ChallengeSectionProps) {
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
    <section className={`challenge ${purple ? "bg-(--surface)" : ""} ${className}`.trim()}>
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

        <div className="chal-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={card.marker}
              custom={idx}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="chal-card reveal in"
            >
              <span className={markerVariant === "tag" ? "chal-tag" : "num"}>{card.marker}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
