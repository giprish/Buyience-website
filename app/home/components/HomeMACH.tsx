"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CARDS = [
  {
    letter: "M",
    title: "Micro-services",
    description: "True SaaS with complete data isolation per tenant.",
  },
  {
    letter: "A",
    title: "API-first",
    description: "Build custom frontends or integrate with any system.",
  },
  {
    letter: "C",
    title: "Cloud-native",
    description: "Auto-scaling infrastructure. No capacity planning.",
  },
  {
    letter: "H",
    title: "Headless",
    description: "Decoupled frontend. Use ours or build your own.",
  },
];

export default function HomeMACH() {
  return (
    <section className="mach">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">OUR PLATFORM</p>
          <h2>Built on MACH principles</h2>
          <p className="lede">Modern architecture that scales with your business — from first order to enterprise.</p>
        </motion.div>

        <div className="mach-grid">
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.letter}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="mach-card reveal in"
            >
              <span className="letter" aria-hidden="true">{card.letter}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="cta-row reveal in justify-center"
        >
          <Link href="/mach-architecture" className="mach-cta">
            Explore the architecture →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
