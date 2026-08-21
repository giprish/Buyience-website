"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type WhoItsForCard = {
  title: string;
  description: string;
  /** Prefaced with circular ✕ — muted “without us” line */
  negative: string;
  /** Prefaced with circular ✓ — clearer “with us” line */
  positive: string;
  /** Footer mono pill tagline */
  tagline: string;
};

export type WhoItsForSectionProps = {
  eyebrow: string;
  heading: React.ReactNode;
  cards: WhoItsForCard[];
  /** Sitewide alternating-section-background rule */
  purple?: boolean;
  className?: string;
};

/**
 * Shared “Who it’s for” section: centered header + persona cards with
 * negative/positive comparison lines and a footer tagline.
 *
 * Usage:
 * ```tsx
 * <WhoItsForSection
 *   eyebrow="WHO IT'S FOR"
 *   heading="Built for high-volume B2B operations"
 *   cards={[
 *     {
 *       title: "Wholesalers",
 *       description: "...",
 *       negative: "...",
 *       positive: "...",
 *       tagline: "...",
 *     },
 *   ]}
 *   purple
 * />
 * ```
 */
export default function WhoItsForSection({
  eyebrow,
  heading,
  cards,
  purple = false,
  className = "",
}: WhoItsForSectionProps) {
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
    <section className={`${purple ? "bg-(--surface)" : ""} ${className}`.trim()}>
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
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 min-[861px]:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.article
              key={card.title}
              custom={idx}
              initial={reduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="reveal in group flex h-full flex-col rounded-(--radius-card) border border-(--border) bg-white p-7 text-left shadow-(--shadow-1) transition-[transform,box-shadow,border-color] duration-180 hover:-translate-y-0.5 hover:border-(--border-strong) hover:shadow-[0_8px_28px_rgba(23,18,65,0.1)] sm:p-8"
            >
              <h3 className="mb-2 text-[18px] tracking-[-0.01em]">{card.title}</h3>
              <p className="m-0 mb-5 text-[14.5px] leading-[1.55] text-(--muted)">
                {card.description}
              </p>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-start gap-2.75">
                  <span
                    className="mt-0.75 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-(--red) text-[10px] font-bold text-white"
                    aria-hidden="true"
                  >
                    ✕
                  </span>
                  <span className="text-[13.5px] leading-[1.5] text-(--muted)">
                    {card.negative}
                  </span>
                </div>

                <div className="flex items-start gap-2.75">
                  <span
                    className="mt-0.75 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-(--violet) text-[10px] font-bold text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-[13.5px] leading-[1.5] text-(--ink-soft)">
                    {card.positive}
                  </span>
                </div>
              </div>

              <div className="mt-auto pt-5">
                <div className="rounded-lg bg-(--violet-tint) px-3.5 py-2.5 font-mono text-[11px] leading-snug tracking-[0.01em] text-(--violet-deep)">
                  {card.tagline}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
