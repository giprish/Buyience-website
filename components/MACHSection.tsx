"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export type MACHCard = {
  letter: string;
  title: string;
  description: string;
};

type MACHSectionProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede: string;
  cards: MACHCard[];
  ctaHref: string;
  ctaLabel: string;
  /** Sitewide alternating-section-background rule: true = purple (var(--surface)); default/false = white. */
  purple?: boolean;
};

export default function MACHSection({
  eyebrow,
  title,
  lede,
  cards,
  ctaHref,
  ctaLabel,
  purple = false,
}: MACHSectionProps) {
  return (
    <section className={`mach mach-section ${purple ? "bg-(--surface)" : ""}`.trim()}>
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
          <p className="lede">{lede}</p>
        </motion.div>

        <div className="mach-grid grid grid-cols-1 gap-[18px] mt-12 min-[641px]:grid-cols-2 min-[961px]:grid-cols-4">
          {cards.map((card, idx) => (
            <motion.div
              key={card.letter}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="mach-card reveal in bg-white text-left rounded-[18px] border border-[#EDE6FB] px-6 py-7"
            >
              <span
                className="letter block text-[52px] font-extrabold leading-none text-[#6E2CF4] opacity-[0.18]"
                aria-hidden="true"
              >
                {card.letter}
              </span>
              <h3 className="mt-2 mb-1.5 text-[19px] font-bold text-[#1B1033]">{card.title}</h3>
              <p className="m-0 text-sm font-medium leading-normal text-[#5A4B7C]">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="cta-row reveal in mt-8 flex justify-center"
        >
          <Link
            href={ctaHref}
            className="mach-cta inline-flex items-center justify-center gap-2 rounded-[13px] bg-[#1B1033] px-[26px] py-[14px] text-[15px] font-bold leading-[1.2] text-white no-underline hover:bg-[#2a1850] hover:text-white hover:no-underline"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
