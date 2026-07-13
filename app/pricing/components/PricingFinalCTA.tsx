"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function PricingFinalCTA() {
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
        <h2>Start your 14-day free trial today.</h2>
        <p>Full access to all features. No credit card required.</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="#trial">
            Start free trial
          </Button>
          <Button variant="ghost" size="lg" href="#demo">
            Request demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
