"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionCapsule from "@/components/SectionCapsule";
import Button from "@/components/Button";

export default function HomeHero() {
  return (
    <header className="home-hero relative overflow-hidden bg-hero-grid">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="home-container relative z-10 flex flex-col items-center px-6 pb-16 pt-20 text-center sm:pt-24 md:pb-20 md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SectionCapsule>
            AI Quote Engine · Real-Time Negotiation · MACH Architecture
          </SectionCapsule>
        </motion.div>

        <motion.h1
          className="home-hero-title mt-7 max-w-4xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
        >
          <span className="home-hero-grad">The B2B Platform That</span>
          <br />
          <span className="text-[#171241]">Actually Understands B2B.</span>
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-[17px] leading-relaxed text-[#5B5F76] sm:text-[18px]"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
        >
          Quotes that price themselves. A negotiation room that closes deals in minutes. Margin intelligence that tells
          you exactly where to push and where to hold. Built for distributors and wholesalers who sell in the real world
          — not just online.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
        >
          <Button variant="ghost" size="lg" href="https://app.buyience.com/register">
            Start Free Trial
          </Button>
          <Button variant="primary" size="lg" href="/request-a-demo">
            See It In Action
          </Button>
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SectionCapsule variant="soft" showIcon>
            Core Capabilities
          </SectionCapsule>
        </motion.div>
      </div>
    </header>
  );
}
