"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function InventoryFinalCTA() {
  return (
    <section className="final">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="container reveal in"
      >
        <p className="eyebrow">GET STARTED</p>
        <h2>Get your inventory under control.</h2>
        <p>Multi-warehouse tracking, automated reorders, and real-time visibility. Start your free trial today.</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="/contact">
            Start free trial
          </Button>
          <Button variant="ghost" size="lg" href="/pricing">
            See Pricing
          </Button>
        </div>
        <p className="trust-micro">
          14-day trial<span className="dot" aria-hidden="true">·</span>No card required
        </p>
      </motion.div>
    </section>
  );
}
