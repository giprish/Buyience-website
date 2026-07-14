"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PlatformIntelLayer() {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => ({
      pathLength: 1,
      opacity: 0.7,
      transition: { delay: custom * 0.15, duration: 0.8, ease: "easeOut" as const },
    }),
  };

  return (
    <section className="intel">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in text-center"
        >
          <p className="eyebrow">THE INTELLIGENCE LAYER</p>
          <h2>The platform learns your customers.</h2>
          <p className="lede">
            Win probability scoring and the Customer Context Engine aren't a fifth module — they're a layer under all
            four. Every quote is scored across 11+ factors before it's sent. Every buyer's pricing history,
            preferences, and past orders stay loaded. The more you sell, the sharper the system gets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="intel-visual reveal in"
        >
          <svg
            viewBox="0 0 720 150"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Context from all four modules flows into the intelligence layer"
          >
            {/* Module Nodes */}
            <rect x="20" y="18" width="150" height="40" rx="10" fill="none" stroke="#4A3E80" />
            <text x="95" y="42" textAnchor="middle" fill="#BEB7DC" fontSize="11">
              QUOTES
            </text>

            <rect x="196" y="18" width="150" height="40" rx="10" fill="none" stroke="#4A3E80" />
            <text x="271" y="42" textAnchor="middle" fill="#BEB7DC" fontSize="11">
              ORDERS
            </text>

            <rect x="372" y="18" width="150" height="40" rx="10" fill="none" stroke="#4A3E80" />
            <text x="447" y="42" textAnchor="middle" fill="#BEB7DC" fontSize="11">
              SUPPLIERS
            </text>

            <rect x="548" y="18" width="150" height="40" rx="10" fill="none" stroke="#4A3E80" />
            <text x="623" y="42" textAnchor="middle" fill="#BEB7DC" fontSize="11">
              CONFIGURATIONS
            </text>

            {/* Connecting Lines */}
            <motion.line
              x1="95"
              y1="58"
              x2="330"
              y2="102"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              variants={lineVariants}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.line
              x1="271"
              y1="58"
              x2="348"
              y2="102"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              variants={lineVariants}
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.line
              x1="447"
              y1="58"
              x2="372"
              y2="102"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              variants={lineVariants}
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.line
              x1="623"
              y1="58"
              x2="390"
              y2="102"
              stroke="#8B5CF6"
              strokeWidth="1.5"
              variants={lineVariants}
              custom={4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />

            {/* Core intelligence engine node */}
            <rect x="240" y="100" width="240" height="38" rx="19" fill="none" stroke="#0E9E7E" strokeDasharray="4 6" />
            <text x="360" y="123" textAnchor="middle" fill="#54E0BC" fontSize="10.5" letterSpacing="2">
              CONTEXT ENGINE · WIN SCORING
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
