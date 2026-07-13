"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function IntegrationsFinalCTA() {
  return (
    <section className="final">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="container"
      >
        <p className="eyebrow">GET STARTED</p>
        <h2>Your stack, connected in an afternoon.</h2>
        <p>Payments, commerce, marketing, shipping, analytics — plus an API for everything else.</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="#trial">
            Start free trial
          </Button>
          <Button variant="ghost" size="lg" href="/solutions#pricing">
            See Pricing
          </Button>
        </div>
        <p className="trust-micro">
          14-day trial<span className="dot">·</span>No card required
        </p>
      </motion.div>
    </section>
  );
}
