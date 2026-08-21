"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";

const SECTION_JUMPS = [
  { n: "01", label: "Our story", href: "#story" },
  { n: "02", label: "Mission & vision", href: "#mission" },
  { n: "03", label: "The founders", href: "#founders" },
  { n: "04", label: "Our values", href: "#values" },
];

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.48, ease: "easeOut" as const },
    },
  };

  return (
    <header className="hero relative flex flex-col overflow-hidden bg-hero-grid text-left">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 grid w-full flex-[0_1_auto] grid-cols-1 items-stretch gap-10 py-12 sm:grid-cols-2 sm:gap-9 sm:py-[clamp(20px,3vh,36px)] lg:gap-12"
      >
        <div className="flex min-h-0 flex-col justify-center gap-[clamp(28px,4vh,56px)]">
          <div>
            <motion.div variants={itemVariants}>
              <SectionCapsule>About Buyience</SectionCapsule>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mt-4 mb-5 max-w-[18ch] text-(--ink) sm:mt-5 sm:mb-6"
            >
              We&apos;re building the B2B platform we{" "}
              <span className="grad-text">wished existed.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="lede m-0 max-w-[34rem] text-(--muted) sm:text-[18.5px] sm:leading-[1.7]"
            >
              Nova Core exists because the tools wholesalers, distributors and manufacturers were
              handed never fit how B2B actually works — so we set out to build the one that does.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="cta-row !justify-start">
              <Button variant="primary" size="lg" href="https://app.buyience.com/register">
                Start free trial
              </Button>
              <Button variant="ghost" size="lg" href="/request-a-demo">
                Request a demo
              </Button>
            </div>
            <p className="m-0 text-[13px] font-medium text-(--muted)">
              14-day trial
              <span className="mx-1.5 text-(--border-strong)" aria-hidden="true">
                ·
              </span>
              No card required
            </p>
          </motion.div>
        </div>

        <motion.aside
          variants={itemVariants}
          className="flex min-h-0 flex-col justify-center"
          aria-label="Jump to a section"
        >
          <div className="rounded-(--radius-card) border border-(--border) bg-white p-5 shadow-(--shadow-1) sm:p-6">
            <p className="m-0 mb-3.5 font-mono text-[11px] tracking-[0.14em] text-(--violet-deep) uppercase">
              Jump in
            </p>
            <ul className="m-0 flex list-none flex-col gap-0.5 p-0">
              {SECTION_JUMPS.map((item) => (
                <li key={item.n + item.label}>
                  <a
                    href={item.href}
                    className="about-jump-link group flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-(--ink) no-underline transition-colors duration-150 hover:bg-(--violet-tint) hover:no-underline"
                  >
                    <span className="w-6 shrink-0 font-mono text-[11px] tracking-[0.06em] text-(--muted)">
                      {item.n}
                    </span>
                    <span className="min-w-0 flex-1 text-[14.5px] font-semibold tracking-[-0.01em]">
                      {item.label}
                    </span>
                    <span
                      className="text-(--violet-deep) transition-transform duration-180 group-hover:translate-x-[3px]"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </motion.div>
    </header>
  );
}
