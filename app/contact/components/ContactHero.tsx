"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactHero() {
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
    <header className="hero overflow-hidden relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container"
      >
        <motion.p variants={itemVariants} className="eyebrow">
          GET IN TOUCH
        </motion.p>
        <motion.h1 variants={itemVariants}>
          Talk to the people who <span className="grad-text">built the platform.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="lede">
          We're a small team, so there's no call centre and no ticket maze. Pick what you need below and you'll reach
          someone who can actually answer.
        </motion.p>
      </motion.div>
    </header>
  );
}
