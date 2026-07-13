"use client";

import React from "react";
import { motion } from "framer-motion";

interface PricingHeroProps {
  billingPeriod: "monthly" | "annual";
  setBillingPeriod: (period: "monthly" | "annual") => void;
}

export default function PricingHero({ billingPeriod, setBillingPeriod }: PricingHeroProps) {
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
          NO HIDDEN FEES · CANCEL ANYTIME
        </motion.p>
        <motion.h1 variants={itemVariants}>
          Simple, <span className="grad-text">transparent pricing.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="lede">
          Start with a 14-day free trial on any plan. Pay monthly, or save 17% paying annually.
        </motion.p>

        {/* Founder Launch Banner */}
        <motion.div variants={itemVariants} className="launch reveal in">
          <div className="txt">
            <b>Founders Launch Pricing</b>
            <p>
              60% off for life — $99/mo instead of the standard <b>$249/mo</b>. Your rate never rises while your
              subscription is active.
            </p>
          </div>
          <div className="spots" aria-label="31 of 50 founder spots taken">
            <div className="n">19 of 50 spots left</div>
            <div className="track">
              <div className="fill"></div>
            </div>
          </div>
        </motion.div>

        {/* Billing Controls Toggle */}
        <motion.div variants={itemVariants} className="controls">
          <div className="toggle" role="group" aria-label="Billing period">
            <button
              type="button"
              id="btnMonthly"
              aria-pressed={billingPeriod === "monthly"}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              id="btnAnnual"
              aria-pressed={billingPeriod === "annual"}
              onClick={() => setBillingPeriod("annual")}
            >
              Annual<span className="save">SAVE 17%</span>
            </button>
          </div>
          <div className="currency">
            $ USD · <a href="#currency">GBP</a> / <a href="#currency">EUR</a> / <a href="#currency">INR</a>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}
