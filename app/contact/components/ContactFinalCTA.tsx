"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function ContactFinalCTA() {
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
        <h2>Ready to stop fighting your platform?</h2>
        <p>Start your 14-day free trial. No credit card required. Full access to all features.</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="#trial">
            Start For Free
          </Button>
          <Button variant="ghost" size="lg" href="/pricing">
            See Pricing
          </Button>
        </div>
        <p className="trust">14-day trial · No card required</p>
      </motion.div>
    </section>
  );
}
