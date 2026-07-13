"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <section className="final" id="trial">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="container"
      >
        <p className="eyebrow">GET STARTED</p>
        <h2>See it on your own catalog.</h2>
        <p>Set up Nova Core in a trial account, load your products, and send your first AI-drafted quote.</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="#trial">
            Start free trial
          </Button>
          <Button variant="ghost" size="lg" href="#demo">
            Request a demo
          </Button>
        </div>
        <p className="trust-micro">
          14-day trial<span className="dot">·</span>No card required
        </p>
      </motion.div>
    </section>
  );
}
