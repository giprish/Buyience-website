"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type WhatChangesCardItem = {
  title: string;
  desc: string;
};

export default function WhatChangesCardsSection({
  heading,
  items,
  purple = false,
}: {
  heading: string;
  items: WhatChangesCardItem[];
  purple?: boolean;
}) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section className={purple ? "bg-(--surface)" : undefined}>
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

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-4.5 lg:grid-cols-3 lg:gap-5">
          {items.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="flex items-start gap-3 rounded-(--radius-card) border border-(--border) bg-white p-5 text-left transition-[transform,box-shadow,border-color] duration-180 hover:-translate-y-0.5 hover:border-(--border-strong) hover:shadow-(--shadow-1) sm:gap-[13px] sm:p-6"
            >
              <span
                className="mt-0.5 flex size-[26px] shrink-0 items-center justify-center rounded-full bg-(--violet) text-[14px] font-extrabold leading-none text-white"
                aria-hidden="true"
              >
                ✓
              </span>
              <div className="min-w-0">
                <h3 className="mb-1.5 text-[16px] leading-snug tracking-[-0.01em] sm:mb-[5px] sm:text-[17px]">
                  {item.title}
                </h3>
                <p className="m-0 text-[13.5px] leading-[1.5] font-medium text-(--muted) sm:text-[14px]">
                  {item.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
