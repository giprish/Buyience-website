"use client";

import React from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type SplitCopyCardsItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SplitCopyCardsProps = {
  eyebrow: string;
  heading: React.ReactNode;
  body: React.ReactNode;
  cta?: React.ReactNode;
  cards: SplitCopyCardsItem[];
  purple?: boolean;
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.5 },
  }),
};

export default function SplitCopyCards({
  eyebrow,
  heading,
  body,
  cta,
  cards,
  purple = false,
}: SplitCopyCardsProps) {
  return (
    <section style={purple ? { background: "var(--surface)" } : undefined}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 min-[921px]:grid-cols-2 min-[921px]:gap-18">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <p className="m-0 text-[12px] font-extrabold uppercase tracking-[0.06em] text-[#8b5cf6]">
              {eyebrow}
            </p>
            <h2 className="mt-3 mb-4">{heading}</h2>
            <div className="text-[15.5px] leading-[1.6] text-(--muted) sm:text-[16.5px] sm:leading-[1.55] [&_p]:m-0">
              {body}
            </div>
            {cta ? <div className="mt-7 flex justify-start">{cta}</div> : null}
          </motion.div>

          <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className="rounded-[var(--radius-card)] border border-(--border) bg-white p-6 text-left shadow-(--shadow-1) transition-[transform,box-shadow,border-color] duration-180 hover:-translate-y-0.5 hover:border-(--border-strong)"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-[10px] bg-(--violet-tint) text-(--violet-deep)" aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3 className="mb-2 text-[16px] font-bold tracking-[-0.01em]">{card.title}</h3>
                  <p className="m-0 text-[13.5px] leading-normal text-(--muted)">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
