"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import { integrationsData } from "../data/integrations";

export default function IntegrationsHero() {
  const liveCount = integrationsData.filter((i) => i.status === "live").length;
  const soonCount = integrationsData.filter((i) => i.status === "soon").length;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  const nodes = [
    { cx: 280, cy: 58, label: "PAYMENTS" },
    { cx: 468, cy: 148, label: "COMMERCE" },
    { cx: 478, cy: 342, label: "MARKETING" },
    { cx: 280, cy: 432, label: "SHIPPING" },
    { cx: 82, cy: 342, label: "ANALYTICS" },
    { cx: 92, cy: 148, label: "INFRA" },
  ] as const;

  return (
    <header className="hero relative overflow-hidden bg-hero-grid">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="container hero-grid relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants}>
            <SectionCapsule>Integrations</SectionCapsule>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            Integrations that connect Nova Core to{" "}
            <span className="grad-text">the stack you already run.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="lede">
            Payments, commerce platforms, marketing, shipping, and analytics — connected in settings, kept in sync by
            webhooks. And when a tool isn&apos;t here yet, the API is.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-count">
            <span className="pulse" aria-hidden="true"></span>
            <span>
              {liveCount} live integrations {soonCount > 0 && `· ${soonCount} coming soon`}
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="cta-row">
            <Button variant="primary" size="lg" href="#directory">
              Browse integrations
            </Button>
            <Button variant="ghost" size="lg" href="#trial">
              Start free trial
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="constellation reveal in"
          aria-hidden="true"
        >
          <svg viewBox="0 0 560 490" xmlns="http://www.w3.org/2000/svg" role="presentation">
            <defs>
              <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#D444EE" />
                <stop offset=".55" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6D5DF6" />
              </linearGradient>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.28" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
              </radialGradient>
              <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1b1140" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* Soft hub glow */}
            <circle cx="280" cy="245" r="118" fill="url(#hubGlow)" />

            {/* Orbit ring */}
            <circle className="const-orbit" cx="280" cy="245" r="158" />

            {/* Spokes */}
            {nodes.map((node) => (
              <line
                key={`line-${node.label}`}
                className="const-line"
                x1="280"
                y1="245"
                x2={node.cx}
                y2={node.cy}
              />
            ))}

            {/* Outer nodes */}
            {nodes.map((node) => (
              <g key={node.label}>
                <circle
                  className="const-node"
                  cx={node.cx}
                  cy={node.cy}
                  r="40"
                  filter="url(#nodeShadow)"
                />
                <text className="const-label" x={node.cx} y={node.cy + 4} textAnchor="middle">
                  {node.label}
                </text>
              </g>
            ))}

            {/* Hub */}
            <circle className="const-hub-ring" cx="280" cy="245" r="72" />
            <circle className="const-hub" cx="280" cy="245" r="62" />
            <text className="const-hub-label" x="280" y="239" textAnchor="middle">
              NOVA
            </text>
            <text className="const-hub-label" x="280" y="258" textAnchor="middle">
              CORE
            </text>
          </svg>
        </motion.div>
      </div>
    </header>
  );
}
