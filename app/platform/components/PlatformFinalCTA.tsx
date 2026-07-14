"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function PlatformFinalCTA() {
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
        <h2>Ready to Stop Fighting Your Platform?</h2>
        <p>Start your 14-day free trial. No credit card required. Full access to all features.</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="/contact">
            Start For Free
          </Button>
          <Button variant="ghost" size="lg" href="/pricing">
            See Pricing
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
