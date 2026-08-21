"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import EyebrowPill from "@/components/EyebrowPill";

export type NarrowProseSectionProps = {
  eyebrow: string;
  heading: React.ReactNode;
  /** Body paragraphs and optional figure / footer content */
  children: React.ReactNode;
  /** Sitewide alternating-section-background rule */
  purple?: boolean;
  className?: string;
  id?: string;
};

/**
 * Shared narrow left-aligned prose section: pill eyebrow + heading + body.
 * Used for narrative “problem” blocks (e.g. packaging treadmill, gifting season).
 *
 * Usage:
 * ```tsx
 * <NarrowProseSection
 *   eyebrow="THE TREADMILL"
 *   heading="Every packaging quote is three quotes."
 *   purple
 * >
 *   <p>...</p>
 *   <p>...</p>
 * </NarrowProseSection>
 * ```
 */
export default function NarrowProseSection({
  eyebrow,
  heading,
  children,
  purple = false,
  className = "",
  id,
}: NarrowProseSectionProps) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section id={id} className={`${purple ? "bg-(--surface)" : ""} ${className}`.trim()}>
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="reveal in mx-auto max-w-(--w-text) text-left"
        >
          <EyebrowPill className="mb-1">{eyebrow}</EyebrowPill>
          <h2 className="mt-3.5 mb-[26px]">{heading}</h2>
          <div className="text-[18.5px] leading-[1.75] text-(--ink-soft) [&_p]:mb-[22px] [&_p:last-of-type]:mb-0">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
