"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type WhatChangesCardItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

export default function WhatChangesCardsSection({
  heading,
  items,
}: {
  heading: string;
  items: WhatChangesCardItem[];
}) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section>
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">WHAT CHANGES</p>
          <h2>{heading}</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 min-[561px]:grid-cols-2 min-[961px]:grid-cols-3 min-[961px]:gap-5">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="rounded-(--radius-card) border border-(--border) bg-white p-7 text-left transition-[transform,box-shadow,border-color] duration-180 hover:-translate-y-0.5 hover:border-(--border-strong) hover:shadow-(--shadow-1)"
              >
                <div
                  className="mb-4 flex size-12 items-center justify-center rounded-[14px] bg-(--mint-tint) text-(--mint)"
                  aria-hidden="true"
                >
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="mb-2 text-[16px] tracking-[-0.01em]">{item.title}</h3>
                <p className="m-0 text-[13.5px] leading-normal text-(--muted)">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
