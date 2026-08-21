"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import OutcomesStrip from "@/components/OutcomesStrip";

const FACTS = [
  {
    big: "2023",
    title: "Buyience Ltd founded",
  },
  {
    big: "UK",
    title: "Headquarters",
  },
  {
    big: "Jan 2026",
    title: "Nova Core launched",
  },
  {
    big: "Self-funded",
    title: "Independent & founder-led",
  },
];

export default function AboutFacts() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section id="facts">
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE FACTS</p>
          <h2>Where we stand today.</h2>
        </motion.div>

        <OutcomesStrip items={FACTS} />

        <p className="m-0 mt-8 text-center text-[13.5px] text-(--muted)">
          Company No: 14871419. Registered in England and Wales.
        </p>
      </div>
    </section>
  );
}
