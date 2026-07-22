"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";

export default function SolutionsHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <header className="hero relative overflow-hidden bg-hero-grid">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10"
      >
        <motion.div variants={itemVariants}>
          <SectionCapsule>Solutions</SectionCapsule>
        </motion.div>
        <motion.h1 variants={itemVariants}>
          One platform. <span className="grad-text">Every step of the B2B sale.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="lede">
          From the first RFQ to the fulfilled order — quoting, configuration, negotiation, and margin control in one
          system. Explore it by capability, or jump straight to your industry.
        </motion.p>
        <motion.div variants={itemVariants} className="cta-row">
          <Button variant="primary" size="lg" href="#trial">
            Start free trial
          </Button>
          <Button variant="ghost" size="lg" href="#industries">
            Find your industry ↓
          </Button>
        </motion.div>
        <motion.p variants={itemVariants} className="trust-micro">
          14-day trial<span className="dot">·</span>No card required
        </motion.p>
      </motion.div>
    </header>
  );
}
