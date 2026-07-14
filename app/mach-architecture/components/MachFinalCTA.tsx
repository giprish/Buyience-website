"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function MachFinalCTA() {
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
        <h2>Ready to build on MACH?</h2>
        <p>
          API-first architecture. Database-per-tenant security. Real-time capabilities. Start building your B2B
          commerce solution today.
        </p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="/contact">
            Start For Free
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
