"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConfiguratorProblem() {
  const painPoints = [
    {
      title: "Inventory nightmare",
      desc: "Track stock for 27 SKUs — or track 9 option values?",
    },
    {
      title: "Price-update hell",
      desc: "Update prices on 27 products — or 9 option prices?",
    },
    {
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
              <b>{p.title}</b>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
