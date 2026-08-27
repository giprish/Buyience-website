"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";

const CAPABILITY_JUMPS = [
  {
    n: "01",
    label: "Unified commerce",
    href: "#capabilities",
    color: "#5B6F00",
    dot: "#D6FB4F",
  },
  {
    n: "02",
    label: "AI Quote Engine",
    href: "#capabilities",
    color: "#6E2CF4",
    dot: "#9B5DE5",
  },
  {
    n: "03",
    label: "Digital Sales Room",
    href: "#capabilities",
    color: "#0284C7",
    dot: "#0EA5E9",
  },
  {
    n: "04",
    label: "Pricing & margin",
    href: "#capabilities",
    color: "#15803D",
    dot: "#16A34A",
  },
  {
    n: "05",
    label: "By industry",
    href: "#industries",
    color: "#DB2777",
    dot: "#EC4899",
  },
];

export default function SolutionsHero() {
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
              <SectionCapsule>Solutions</SectionCapsule>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mt-4 mb-5 max-w-[16ch] text-(--ink) sm:mt-5 sm:mb-6"
            >
              One platform.{" "}
              <span className="grad-text">Every step of the B2B sale.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="lede m-0 max-w-[34rem] text-(--muted) sm:text-[18.5px] sm:leading-[1.7]"
            >
              From the first RFQ to the fulfilled order — quoting, configuration, negotiation, and
              margin control in one system. Explore it by capability, or jump straight to your
              industry.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="cta-row !justify-start">
              <Button variant="primary" size="lg" href="https://app.buyience.com/register">
                Start free trial
              </Button>
              <Button variant="ghost" size="lg" href="#industries">
                Find your industry ↓
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
          <div className="sol-jump relative w-full pt-[18px] pr-3.5">
            <p className="sol-jump-float absolute top-0 right-0 z-1 m-0 rounded-[11px] bg-[#D6FB4F] px-[13px] py-2 text-[12px] font-extrabold text-[#1B1033] shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
              Capability → industry, in one map
            </p>

            <div
              className="sol-jump-card relative overflow-hidden rounded-[22px] border border-(--border) p-5 sm:p-6"
              style={{
                background:
                  "radial-gradient(ellipse 55% 45% at 50% 48%, rgba(110, 44, 244, 0.06), transparent 70%), linear-gradient(165deg, #ffffff 0%, #faf8ff 48%, #f7f3ff 100%)",
                boxShadow:
                  "0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 1px 2px rgba(23, 18, 65, 0.04), 0 18px 40px rgba(23, 18, 65, 0.08)",
              }}
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span
                  className="flex size-[30px] shrink-0 items-center justify-center rounded-[9px] bg-linear-to-br from-[#6E2CF4] to-[#9B5DE5] font-heading text-[16px] leading-none font-extrabold text-white"
                  aria-hidden="true"
                >
                  b
                </span>
                <span className="font-heading text-[15px] font-extrabold tracking-[-0.01em] text-[#1B1033]">
                  Jump in
                </span>
                <span className="ml-auto text-[10px] font-extrabold tracking-[0.08em] text-[#6A5A8C] uppercase">
                  One map · every path
                </span>
              </div>

              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {CAPABILITY_JUMPS.map((item) => (
                  <li key={item.n + item.label}>
                    <a
                      href={item.href}
                      className="sol-jump-link group flex items-center gap-3 rounded-[13px] border border-(--border) bg-white px-3.5 py-3 text-(--ink) no-underline transition-[border-color,box-shadow,background-color] duration-150 hover:border-[#D9CEF5] hover:bg-[#FBF9FF] hover:shadow-[0_6px_16px_rgba(23,18,65,0.06)] hover:no-underline"
                    >
                      <span
                        className="w-7 shrink-0 font-heading text-[12px] font-extrabold tracking-[0.04em]"
                        style={{ color: item.color }}
                      >
                        {item.n}
                      </span>
                      <span className="min-w-0 flex-1 text-[13.5px] font-semibold tracking-[-0.01em] text-[#1B1033] sm:text-[14px]">
                        {item.label}
                      </span>
                      <span
                        className="size-2 shrink-0 rounded-full shadow-[0_0_0_1px_rgba(27,16,51,0.08)]"
                        style={{ background: item.dot }}
                        aria-hidden="true"
                      />
                      <ArrowRight
                        size={15}
                        strokeWidth={2.4}
                        className="shrink-0 text-(--violet-deep) transition-transform duration-180 group-hover:translate-x-[3px]"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap items-center gap-2.5 rounded-[13px] bg-linear-to-r from-[#6E2CF4] to-[#8B45F0] px-4 py-3">
                <span
                  className="flex size-[22px] shrink-0 items-center justify-center rounded-[7px] bg-[#D6FB4F] text-[12px] leading-none text-[#1B1033]"
                  aria-hidden="true"
                >
                  ✦
                </span>
                <span className="font-heading text-[12px] font-extrabold tracking-[0.06em] text-white uppercase">
                  Full platform
                </span>
                <span className="ml-auto text-[11px] font-semibold text-[#EDE4FF]">
                  Quote · configure · close
                </span>
              </div>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </header>
  );
}
