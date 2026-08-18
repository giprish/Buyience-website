"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConfiguratorProblem() {
  const painPoints = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
          <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
        </svg>
      ),
      title: "Inventory nightmare",
      desc: "Track stock for 27 SKUs — or track 9 option values?",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      title: "Price-update hell",
      desc: "Update prices on 27 products — or 9 option prices?",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      title: "Configuration errors",
      desc: "Manual validation across 27 SKUs — or automatic conflict resolution?",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section className="problem">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE PROBLEM</p>
          <h2>Without CPQ, your catalogue explodes.</h2>
          <p className="lede">
            Every option combination becomes a separate product. Three options × three options × three options means
            exponential SKU growth.
          </p>
        </motion.div>

        <div className="explode reveal in">
          <div className="exp-col bad">
            <h3>Without CPQ</h3>
            <div className="exp-row">
              <span>Memory: 16 / 32 / 64 GB</span>
              <span className="x">×3</span>
            </div>
            <div className="exp-row">
              <span>Storage: 500 GB / 1 / 2 TB</span>
              <span className="x">×3</span>
            </div>
            <div className="exp-row">
              <span>Processor: Std / Pro / Ent</span>
              <span className="x">×3</span>
            </div>
            <div className="exp-total">= 27 products</div>
          </div>

          <div className="vs">vs</div>

          <div className="exp-col good">
            <h3>With Nova Core</h3>
            <div className="exp-row">
              <span>Base product</span>
              <span className="x">1</span>
            </div>
            <div className="exp-row">
              <span>Option groups</span>
              <span className="x">3</span>
            </div>
            <div className="exp-row">
              <span>Total option values</span>
              <span className="x">9</span>
            </div>
            <div className="exp-total">= 1 product</div>
          </div>
        </div>

        <div className="pain-grid">
          {painPoints.map((p, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="pain reveal in"
            >
              <div
                aria-hidden="true"
                className="w-10 h-10 rounded-[10px] bg-(--violet-tint) flex items-center justify-center mb-4 text-(--violet-deep)"
              >
                {p.icon}
              </div>
              <b>{p.title}</b>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
