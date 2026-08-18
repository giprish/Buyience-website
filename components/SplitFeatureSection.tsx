"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type SplitFeatureHeader = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  sparkles?: "start" | "both";
};

export type SplitFeatureRow = {
  id?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  visual: React.ReactNode;
  reversed?: boolean;
};

export default function SplitFeatureSection({
  purple = false,
  header,
  rows,
  footer,
  className = "",
}: {
  purple?: boolean;
  header?: SplitFeatureHeader;
  rows: SplitFeatureRow[];
  footer?: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion() === true;

  const copyReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-50px" as const },
        transition: { duration: 0.55 },
      };

  const wellReveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.98 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-50px" as const },
        transition: { duration: 0.55, delay: 0.1 },
      };

  return (
    <section className={`${purple ? "bg-(--surface)" : ""} ${className}`.trim()}>
      <div className="container">
        {header ? (
          <div
            className={`mx-auto flex max-w-[62ch] flex-col items-center text-center ${header.className ?? ""}`.trim()}
          >
            <span className="inline-flex h-8 w-fit max-w-full items-center gap-1.5 rounded-full border border-[#985eff] bg-[#faf8ff] px-3.5 text-[11.5px] font-semibold uppercase leading-none tracking-[0.06em] text-[#985eff]">
              <span aria-hidden="true">✦</span>
              {header.eyebrow}
              {header.sparkles === "both" ? <span aria-hidden="true">✦</span> : null}
            </span>
            <h2 className="mt-3.5 mb-0">{header.title}</h2>
            {header.description ? (
              <p className="mt-3 mb-0 text-[16.5px] leading-[1.7] text-(--muted)">{header.description}</p>
            ) : null}
          </div>
        ) : null}

        {rows.map((row, index) => {
          const reversed = row.reversed ?? index % 2 === 1;

          return (
            <div
              id={row.id}
              key={row.id ?? (typeof row.title === "string" ? row.title : index)}
              className={`grid grid-cols-1 items-center gap-9 py-11 min-[921px]:grid-cols-2 min-[921px]:gap-18 min-[921px]:py-15 ${index > 0 ? "border-t border-(--border)" : ""}`}
            >
              <motion.div {...copyReveal} className="text-left">
                {typeof row.eyebrow === "string" ? (
                  <p className="m-0 inline-flex w-fit items-center rounded-md  px-1 py-1 text-[12px] text-[#985eff] font-extrabold uppercase tracking-[0.06em]">
                  {row.eyebrow}
                </p>
                 
                ) : (
                  row.eyebrow
                )}
                <h2 className="mt-3 mb-4">{row.title}</h2>
                <div className="m-0 text-[16.5px] leading-[1.65] text-(--muted) [&_p]:m-0 [&_p+p]:mt-3.5">
                  {typeof row.description === "string" ? <p>{row.description}</p> : row.description}
                </div>
              </motion.div>

              <motion.div
                {...wellReveal}
                className={`flex min-h-0 items-center justify-center min-[921px]:min-h-65 max-[920px]:order-first ${reversed ? "min-[921px]:order-first" : ""}`}
              >
                {row.visual}
              </motion.div>
            </div>
          );
        })}
        {footer}
      </div>
    </section>
  );
}
