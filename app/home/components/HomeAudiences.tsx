"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PERSONAS = [
  {
    title: "Wholesalers & distributors",
    kicker: "Complexity, made simple",
    description:
      "Multi-warehouse inventory, tiered pricing, and volume discounts. Manage real-world complexity without the operational overhead.",
    href: "/solutions#industries",
  },
  {
    title: "Manufacturers",
    kicker: "No more SKU explosion",
    description:
      "The product configurator handles unlimited options. CPQ workflows turn quote-to-order into a few clicks — not a spreadsheet marathon.",
    href: "/solutions#industries",
  },
  {
    title: "Multi-brand operators",
    kicker: "Many brands, one cockpit",
    description:
      "Run multiple brands from unified control. Separate customer databases, shared infrastructure, zero duplicated effort.",
    href: "/solutions#industries",
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

        <div className="who-grid">
          {PERSONAS.map((persona, idx) => (
            <Link key={persona.title} href={persona.href} className="who-card hover:no-underline">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex h-full flex-col"
              >
                <h3>{persona.title}</h3>
                <p className="home-who-kicker">{persona.kicker}</p>
                <p>{persona.description}</p>
                <span className="go">See how →</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
