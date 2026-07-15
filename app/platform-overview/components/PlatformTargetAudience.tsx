"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PlatformTargetAudience() {
  const personas = [
    {
      title: "Manufacturers",
      description:
        "CPQ handles complex product configurations with real-time conflict resolution — eliminating SKU explosion.",
      href: "/solutions#industries",
    },
    {
      title: "Wholesalers & Distributors",
      description: "Tiered pricing, bulk ordering, and rapid quoting — built for volume selling and repeat replenishment.",
      href: "/solutions#industries",
    },
    {
      title: "Multi-Brand Operators",
      description: "Multi-tenant architecture keeps brands isolated — one platform, separate storefronts, clean data.",
      href: "/solutions#industries",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">BUILT FOR B2B</p>
          <h2>Designed for How B2B Actually Works</h2>
        </motion.div>

        <div className="who-grid">
          {personas.map((p, idx) => (
            <Link key={idx} href={p.href} className="who-card hover:no-underline">
              <motion.div
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="flex flex-col h-full"
              >
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="go">See how →</span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
