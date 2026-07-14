"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PackagingProblem() {
  return (
    <section className="problem">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="narrow reveal in"
        >
          <p className="eyebrow">THE TREADMILL</p>
          <h2>Every packaging quote is three quotes. And procurement is timing you.</h2>
          <p>
            A packaging RFQ is never one number. It's a spec — dimensions, board grade, flute, print, tooling — priced
            at three or four quantity breaks, because the buyer wants to see where the curve bends. Built by hand,
            that's spreadsheet work with real consequences: forget the plate charge once and the margin on the whole
            run is gone.
          </p>
          <p>
            Meanwhile you're one of three suppliers being compared by a procurement team that will shortlist whoever
            answers first with something complete. And under it all, your input costs move. A quote built on last
            month's board price looks fine when it goes out and hurts when it converts.
          </p>
          <p>
            Thin margins don't forgive any of this. In packaging, a few points of careless discounting is the difference
            between a good quarter and a pointless one.
          </p>
          <figure className="costline" aria-label="Illustrative input-cost movement against a fixed quote price">
            <svg viewBox="0 0 680 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <line x1="10" y1="72" x2="670" y2="72" stroke="#D3CCEA" strokeWidth="2" strokeDasharray="6 6" />
              <text x="14" y="62" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
                your quoted price
              </text>
              <path
                d="M10 118 C 70 116, 110 120, 160 112 C 220 102, 260 108, 310 98 C 360 88, 400 96, 450 84 C 500 72, 540 78, 585 62 C 620 50, 645 52, 670 44"
                stroke="#8B5CF6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="670" cy="44" r="4" fill="#D444EE" />
              <text x="520" y="34" fontFamily="Space Mono" fontSize="11" fill="#6D28D9">
                input costs
              </text>
              <text x="10" y="152" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
                QUOTE SENT
              </text>
              <text x="560" y="152" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
                ORDER LANDS
              </text>
            </svg>
            <figcaption className="costline-note">when yesterday's quote meets today's costs</figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
