"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function GiftingFinalCTA() {
  return (
    <section className="final">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container reveal in"
      >
        <p className="eyebrow">GET AHEAD OF IT</p>
        <h2>Be ready before the next peak season.</h2>
        <p>Set up Nova Core now, quote in minutes when the rush arrives.</p>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <Button variant="primary" size="lg" href="/contact">
            Start free trial
          </Button>
          <Button variant="ghost" size="lg" href="/contact">
            Book a demo
          </Button>
        </div>
        <p className="trust-micro">
          14-day trial<span className="dot" aria-hidden="true">·</span>No card required
        </p>
      </motion.div>
    </section>
  );
}
