"use client";

import React from "react";
import { motion } from "framer-motion";

export default function GiftingProblem() {
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
          <p className="eyebrow">THE SEASON</p>
          <h2>Your busiest season is your slowest quoting.</h2>
          <p>
            Peak season in corporate gifting doesn't arrive gradually. One week it's a trickle of enquiries; the next,
            every HR team and agency in your pipeline wants a custom kit — their quantities, their branding, their
            deadline. Each request is really a bill of materials wearing a bow: box, products, personalisation, insert,
            packaging tier. Priced by hand, each one costs hours.
          </p>
          <p>
            And hours are the whole game. The supplier who replies first with a clean, complete quote usually wins — not
            the one with the better box. Meanwhile the deals you do close land late in the season, under negotiation
            pressure, and reps discount to get them over the line. Nobody sees what that did to margin until January.
          </p>
          <p>Spreadsheets didn't cause this, but they can't fix it either.</p>
          <figure className="season" aria-label="Illustrative seasonal demand curve peaking in Q4">
            <svg viewBox="0 0 680 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
              <path
                d="M10 130 C 90 122, 150 118, 210 112 C 280 105, 330 108, 390 96 C 450 84, 500 60, 545 28 C 570 12, 600 10, 620 24 C 645 42, 660 90, 672 128"
                stroke="#D3CCEA"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path d="M500 60 C 520 44, 535 33, 545 28 C 570 12, 600 10, 620 24" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
              <circle cx="580" cy="14" r="4" fill="#D444EE" />
              <text x="10" y="152" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
                JAN
              </text>
              <text x="330" y="152" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
                JUL
              </text>
              <text x="640" y="152" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
                DEC
              </text>
            </svg>
            <figcaption className="season-note">when quote speed decides revenue</figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
