"use client";

import React from "react";
import { motion } from "framer-motion";

const PERSONAS = [
  {
    label: "Wholesalers & distributors",
    title: "Complexity, made simple",
    description:
      "Multi-warehouse inventory, tiered pricing, and volume discounts. Manage real-world complexity without the operational overhead.",
  },
  {
    label: "Manufacturers",
    title: "No more SKU explosion",
    description:
      "The product configurator handles unlimited options. CPQ workflows turn quote-to-order into a few clicks — not a spreadsheet marathon.",
  },
  {
    label: "Multi-brand operators",
    title: "Many brands, one cockpit",
    description:
      "Run multiple brands from unified control. Separate customer databases, shared infrastructure, zero duplicated effort.",
  },
];

export default function HomeAudiences({ purple = false }: { purple?: boolean }) {
  return (
    <section className={purple ? "bg-(--surface)" : undefined}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">BUILT FOR YOU</p>
          <h2>However you sell, we fit</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 min-[861px]:grid-cols-3">
          {PERSONAS.map((persona, idx) => (
            <motion.article
              key={persona.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.06, duration: 0.5 }}
              className="rounded-[20px] border border-[#EDE6FB] bg-[linear-gradient(160deg,#fff,#FAF7FF)] p-[30px] text-left"
            >
              <p className="m-0 text-xs font-extrabold uppercase tracking-[0.08em] text-[#6E2CF4]">
                {persona.label}
              </p>
              <h3 className="mt-3 mb-2.5 !text-[22px] font-bold text-[#1B1033]">
                {persona.title}
              </h3>
              <p className="m-0 text-[15px] font-medium leading-[1.55] text-[#5A4B7C]">
                {persona.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
