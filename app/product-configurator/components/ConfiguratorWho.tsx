"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConfiguratorWho() {
  const cards = [
    {
      title: "Manufacturers",
      use: "Industrial equipment with power, automation, safety and installation options.",
      bLine: "81 configurations would mean 81 products without CPQ",
      gLine: "1 product with 4 option groups — far less to manage",
      res: "81 SKUs become 1 configurable product",
    },
    {
      title: "Wholesalers",
      use: "Product bundles with size, colour, quantity and packaging options.",
      bLine: "Bundle pricing manual, inventory fragmented",
      gLine: "Option-level inventory and dynamic bundle pricing",
      res: "Unified inventory · instant price updates",
    },
    {
      title: "Distributors",
      use: "Technical products with specs, accessories and service options.",
      bLine: "Complex catalogues; configuration errors cause returns",
      gLine: "Option-level rules with conflict prevention",
      res: "Invalid combinations caught before they ship",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="who" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">WHO IT'S FOR</p>
          <h2>Built for complex B2B products.</h2>
        </motion.div>

        <div className="who-grid">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="who-card reveal in"
            >
              <h3>{c.title}</h3>
              <p className="use">{c.use}</p>
              <div className="who-line dim">
                <span className="b">✕</span>
                <span>{c.bLine}</span>
              </div>
              <div className="who-line">
                <span className="g">✓</span>
                <span>{c.gLine}</span>
              </div>
              <div className="who-res">{c.res}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
