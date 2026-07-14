"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function PlatformHero() {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" as const },
    },
  };

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: custom * 0.15, duration: 0.4, type: "spring" as const, stiffness: 100 },
    }),
  };

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        {/* Left Side Content */}
        <div className="flex flex-col text-left">
          <p className="eyebrow">B2B COMMERCE PLATFORM · NOVA CORE</p>
          <h1>
            The B2B commerce platform that works like you do.{" "}
            <span className="grad-text">Fast, flexible, intelligent.</span>
          </h1>
          <p className="lede">
            One platform for quoting, inventory, and B2B storefronts. AI-powered pricing. Real-time sync. Live in
            weeks, not months.
          </p>
          <div className="cta-row">
            <Button variant="primary" size="lg" href="/contact">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" href="/contact">
              Request Demo
            </Button>
          </div>
          <p className="trust-micro">
            14-day trial<span className="dot" aria-hidden="true">·</span>No card required
          </p>
        </div>

        {/* Right Side SVG Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pmap"
        >
          <svg
            viewBox="0 0 560 470"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Nova Core platform map: Sell, Transact, Fulfil, Supply, and Connect stages around one core"
          >
            {/* Links/Edges */}
            <motion.line className="link" x1="280" y1="235" x2="280" y2="78" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.line className="link" x1="280" y1="235" x2="470" y2="160" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.line className="link" x1="280" y1="235" x2="450" y2="360" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.line className="link" x1="280" y1="235" x2="110" y2="360" variants={lineVariants} initial="hidden" animate="visible" />
            <motion.line className="link" x1="280" y1="235" x2="90" y2="160" variants={lineVariants} initial="hidden" animate="visible" />

            {/* Core Node */}
            <motion.circle
              cx="280"
              cy="235"
              r="56"
              fill="url(#g)"
              variants={nodeVariants}
              custom={0}
              initial="hidden"
              animate="visible"
            />
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#D444EE" />
                <stop offset=".55" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6D5DF6" />
              </linearGradient>
            </defs>
            <text x="280" y="231" textAnchor="middle" fill="#fff" fontSize="12" letterSpacing="2">
              NOVA
            </text>
            <text x="280" y="247" textAnchor="middle" fill="#fff" fontSize="12" letterSpacing="2">
              CORE
            </text>

            {/* SELL Node */}
            <motion.g variants={nodeVariants} custom={1} initial="hidden" animate="visible">
              <rect className="stage" x="185" y="30" width="190" height="86" rx="14" />
              <text className="stage-t" x="280" y="54" textAnchor="middle">
                SELL
              </text>
              <text className="mods" x="280" y="72" textAnchor="middle">
                B2B Storefront · AI Quote Engine
              </text>
              <text className="mods" x="280" y="86" textAnchor="middle">
                Digital Sales Room · CPQ
              </text>
            </motion.g>

            {/* TRANSACT Node */}
            <motion.g variants={nodeVariants} custom={2} initial="hidden" animate="visible">
              <rect className="stage" x="382" y="118" width="170" height="82" rx="14" />
              <text className="stage-t" x="467" y="142" textAnchor="middle">
                TRANSACT
              </text>
              <text className="mods" x="467" y="160" textAnchor="middle">
                Order Management
              </text>
              <text className="mods" x="467" y="174" textAnchor="middle">
                Net 30/60/90 · Buyer Portal
              </text>
            </motion.g>

            {/* FULFIL Node */}
            <motion.g variants={nodeVariants} custom={3} initial="hidden" animate="visible">
              <rect className="stage" x="366" y="322" width="170" height="82" rx="14" />
              <text className="stage-t" x="451" y="346" textAnchor="middle">
                FULFIL
              </text>
              <text className="mods" x="451" y="364" textAnchor="middle">
                Multi-Warehouse Inventory
              </text>
              <text className="mods" x="451" y="378" textAnchor="middle">
                Real-Time Tracking
              </text>
            </motion.g>

            {/* SUPPLY Node */}
            <motion.g variants={nodeVariants} custom={4} initial="hidden" animate="visible">
              <rect className="stage" x="26" y="322" width="170" height="82" rx="14" />
              <text className="stage-t" x="111" y="346" textAnchor="middle">
                SUPPLY
              </text>
              <text className="mods" x="111" y="364" textAnchor="middle">
                Supplier Management
              </text>
              <text className="mods" x="111" y="378" textAnchor="middle">
                Approval Workflows
              </text>
            </motion.g>

            {/* CONNECT Node */}
            <motion.g variants={nodeVariants} custom={5} initial="hidden" animate="visible">
              <rect className="stage" x="8" y="118" width="170" height="82" rx="14" />
              <text className="stage-t" x="93" y="142" textAnchor="middle">
                CONNECT
              </text>
              <text className="mods" x="93" y="160" textAnchor="middle">
                80+ API Endpoints
              </text>
              <text className="mods" x="93" y="174" textAnchor="middle">
                38 Webhooks · WooCommerce
              </text>
            </motion.g>

            {/* Intelligence Ring */}
            <circle
              cx="280"
              cy="235"
              r="76"
              fill="none"
              stroke="#0E9E7E"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              opacity=".7"
            />
            <text x="280" y="332" textAnchor="middle" fill="#0E9E7E" fontSize="9" letterSpacing="1.5">
              INTELLIGENCE LAYER
            </text>
          </svg>
          <p className="pmap-cap">One system · every stage of the B2B sale</p>
        </motion.div>
      </div>
    </header>
  );
}
