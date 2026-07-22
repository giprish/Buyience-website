"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionCapsule from "@/components/SectionCapsule";
import ContactRoutes from "./ContactRoutes";

interface ContactHeroProps {
  selectedReason: string;
  onSelectReason: (reason: string) => void;
}

export default function ContactHero({ selectedReason, onSelectReason }: ContactHeroProps) {
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
          <SectionCapsule>Get in Touch</SectionCapsule>
        </motion.div>
        <motion.h1 variants={itemVariants}>
          Talk to the people who <span className="grad-text">built the platform.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="lede">
          We&apos;re a small team, so there&apos;s no call centre and no ticket maze. Pick what you need below and you&apos;ll
          reach someone who can actually answer.
        </motion.p>
      </motion.div>

      <ContactRoutes selectedReason={selectedReason} onSelectReason={onSelectReason} />
    </header>
  );
}
