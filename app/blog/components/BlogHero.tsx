"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionCapsule from "@/components/SectionCapsule";

export default function BlogHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
          <SectionCapsule>The Buyience Blog</SectionCapsule>
        </motion.div>
        <motion.h1 variants={itemVariants}>
          B2B commerce insights, <span className="grad-text">from people building it.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="lede">
          Practical writing on B2B commerce, AI-powered quoting, and composable architecture — for teams running modern
          B2B sales operations. No listicles, no rewritten press releases.
        </motion.p>
      </motion.div>
    </header>
  );
}
