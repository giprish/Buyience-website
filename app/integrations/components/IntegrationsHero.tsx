"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { integrationsData } from "../data/integrations";

export default function IntegrationsHero() {
  const liveCount = integrationsData.filter((i) => i.status === "live").length;
  const soonCount = integrationsData.filter((i) => i.status === "soon").length;

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
      <div className="container hero-grid">
        {/* Left Side: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.p variants={itemVariants} className="eyebrow">
            INTEGRATIONS
          </motion.p>
          <motion.h1 variants={itemVariants}>
            Integrations that connect Nova Core to{" "}
            <span className="grad-text">the stack you already run.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="lede">
            Payments, commerce platforms, marketing, shipping, and analytics — connected in settings, kept in sync by
            webhooks. And when a tool isn't here yet, the API is.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-count">
            <span className="pulse" aria-hidden="true"></span>
            <span>
              {liveCount} live integrations {soonCount > 0 && `· ${soonCount} coming soon`}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="cta-row" style={{ marginTop: "22px" }}>
            <Button variant="primary" size="lg" href="#directory">
              Browse integrations
            </Button>
            <Button variant="ghost" size="lg" href="#trial">
              Start free trial
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Constellation SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="constellation reveal in"
          aria-hidden="true"
        >
          <svg viewBox="0 0 480 420" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#D444EE" />
                <stop offset=".55" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6D5DF6" />
              </linearGradient>
            </defs>
            <line className="const-line" x1="240" y1="210" x2="240" y2="62" />
            <line className="const-line" x1="240" y1="210" x2="402" y2="128" />
            <line className="const-line" x1="240" y1="210" x2="410" y2="300" />
            <line className="const-line" x1="240" y1="210" x2="240" y2="368" />
            <line className="const-line" x1="240" y1="210" x2="72" y2="300" />
            <line className="const-line" x1="240" y1="210" x2="80" y2="128" />
            <g>
              <circle className="const-node" cx="240" cy="52" r="34" />
              <text className="const-label" x="240" y="56" textAnchor="middle">
                PAYMENTS
              </text>
              <circle className="const-node" cx="410" cy="122" r="34" />
              <text className="const-label" x="410" y="126" textAnchor="middle">
                COMMERCE
              </text>
              <circle className="const-node" cx="418" cy="304" r="34" />
              <text className="const-label" x="418" y="308" textAnchor="middle">
                MARKETING
              </text>
              <circle className="const-node" cx="240" cy="376" r="34" />
              <text className="const-label" x="240" y="380" textAnchor="middle">
                SHIPPING
              </text>
              <circle className="const-node" cx="64" cy="304" r="34" />
              <text className="const-label" x="64" y="308" textAnchor="middle">
                ANALYTICS
              </text>
              <circle className="const-node" cx="72" cy="122" r="34" />
              <text className="const-label" x="72" y="126" textAnchor="middle">
                INFRA
              </text>
            </g>
            <circle className="const-hub" cx="240" cy="210" r="52" />
            <text className="const-hub-label" x="240" y="206" textAnchor="middle">
              NOVA
            </text>
            <text className="const-hub-label" x="240" y="222" textAnchor="middle">
              CORE
            </text>
          </svg>
        </motion.div>
      </div>
    </header>
  );
}
