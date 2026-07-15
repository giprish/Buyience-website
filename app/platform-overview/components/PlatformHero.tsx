"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

type StageCardProps = {
  custom: number;
  x: number;
  y: number;
  width: number;
  height: number;
  cx: number;
  title: string;
  lines: string[];
  accent: string;
  accentSoft: string;
  icon: React.ReactNode;
};

function StageCard({
  custom,
  x,
  y,
  width,
  height,
  cx,
  title,
  lines,
  accent,
  accentSoft,
  icon,
  nodeVariants,
}: StageCardProps & {
  nodeVariants: {
    hidden: { scale: number; opacity: number };
    visible: (custom: number) => {
      scale: number;
      opacity: number;
      transition: { delay: number; duration: number; type: "spring"; stiffness: number };
    };
  };
}) {
  const iconR = 9;
  const iconTitleGap = 7;
  // Mono 10px + letter-spacing ~0.16em ≈ 7.4px per character
  const titleWidth = title.length * 7.4;
  const headerWidth = iconR * 2 + iconTitleGap + titleWidth;
  const headerLeft = cx - headerWidth / 2;
  const iconCx = headerLeft + iconR;
  const titleX = iconCx + iconR + iconTitleGap;
  const headerY = y + 30;
  const titleBaseline = headerY + 3.5;
  const firstLineY = y + 54;
  const lineGap = 13;

  return (
    <motion.g variants={nodeVariants} custom={custom} initial="hidden" animate="visible">
      {/* Soft color wash under card */}
      <rect x={x + 5} y={y + 7} width={width} height={height} rx="16" fill={accent} opacity="0.08" />

      {/* Card face */}
      <rect
        className="stage"
        x={x}
        y={y}
        width={width}
        height={height}
        rx="16"
        fill="url(#stageFill)"
        filter="url(#cardShadow)"
      />
      {/* Inner highlight */}
      <rect
        x={x + 0.75}
        y={y + 0.75}
        width={width - 1.5}
        height={height - 1.5}
        rx="15.25"
        fill="none"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth="1"
      />

      {/* Icon + title on one line */}
      <circle cx={iconCx} cy={headerY} r={iconR} fill={accentSoft} />
      <circle
        cx={iconCx}
        cy={headerY}
        r={iconR}
        fill="none"
        stroke={accent}
        strokeOpacity="0.18"
        strokeWidth="1"
      />
      <g transform={`translate(${iconCx - 6}, ${headerY - 6})`} fill={accent} fillRule="evenodd">
        {icon}
      </g>
      <text className="stage-t" x={titleX} y={titleBaseline} textAnchor="start">
        {title}
      </text>

      {lines.map((line, i) => (
        <text key={line} className="mods" x={cx} y={firstLineY + i * lineGap} textAnchor="middle">
          {line}
        </text>
      ))}
    </motion.g>
  );
}

const iconSell = (
  <path d="M6 1.6 10.4 4v4.8L6 11.2 1.6 8.8V4L6 1.6Zm0 1.35L2.9 4.65v3.5L6 9.9l3.1-1.75v-3.5L6 2.95Zm0 1.55 1.7.95v1.9L6 8.35l-1.7-.95v-1.9L6 4.5Z" />
);

const iconTransact = (
  <>
    <rect x="1.6" y="2.4" width="8.8" height="1.15" rx="0.4" />
    <rect x="1.6" y="5.15" width="8.8" height="1.15" rx="0.4" />
    <rect x="1.6" y="7.9" width="5.2" height="1.15" rx="0.4" />
    <path d="M8.1 7.55 9.85 9.3l2.05-2.05-.85-.85-1.2 1.2-.9-.9-.85.85Z" />
  </>
);

const iconFulfil = (
  <path d="M1.5 3.8 6 1.5l4.5 2.3v5.1L6 11.3 1.5 8.9V3.8Zm1.25.7v3.95L6 10l3.25-1.55V4.5L6 2.9 2.75 4.5ZM6 5l2 1.05L6 7.15 4 6.05 6 5Z" />
);

const iconSupply = (
  <path d="M1.7 2.2h8.6v1.2H1.7V2.2Zm.9 1.8h6.8v4.5H2.6V4Zm1.3 1.25h4.2v2H3.9v-2ZM1.7 9.2h8.6v1.2H1.7V9.2Z" />
);

const iconConnect = (
  <path d="M4.35 2.1a2.15 2.15 0 0 1 3.04 0l.65.65-1 1-.65-.65a.75.75 0 0 0-1.06 0L3.5 5a.75.75 0 0 0 0 1.06l.65.65-1 1-.65-.65a2.15 2.15 0 0 1 0-3.04l1.85-1.92Zm3.2 3.2 1-1 .65.65a2.15 2.15 0 0 1 0 3.04l-1.85 1.85a2.15 2.15 0 0 1-3.04 0l-.65-.65 1-1 .65.65a.75.75 0 0 0 1.06 0L8.2 7a.75.75 0 0 0 0-1.06l-.65-.65Z" />
);

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

  const stages: Omit<StageCardProps, "custom">[] = [
    {
      x: 185,
      y: 22,
      width: 190,
      height: 98,
      cx: 280,
      title: "SELL",
      lines: ["B2B Storefront · AI Quote Engine", "Digital Sales Room · CPQ"],
      accent: "#7C3AED",
      accentSoft: "#F0EAFD",
      icon: iconSell,
    },
    {
      x: 380,
      y: 110,
      width: 172,
      height: 94,
      cx: 466,
      title: "TRANSACT",
      lines: ["Order Management", "Net 30/60/90 · Buyer Portal"],
      accent: "#2563EB",
      accentSoft: "#E9F1FE",
      icon: iconTransact,
    },
    {
      x: 364,
      y: 314,
      width: 172,
      height: 94,
      cx: 450,
      title: "FULFIL",
      lines: ["Multi-Warehouse Inventory", "Real-Time Tracking"],
      accent: "#0E9E7E",
      accentSoft: "#E6F7EF",
      icon: iconFulfil,
    },
    {
      x: 24,
      y: 314,
      width: 172,
      height: 94,
      cx: 110,
      title: "SUPPLY",
      lines: ["Supplier Management", "Approval Workflows"],
      accent: "#EA7A17",
      accentSoft: "#FEF1E4",
      icon: iconSupply,
    },
    {
      x: 6,
      y: 110,
      width: 172,
      height: 94,
      cx: 92,
      title: "CONNECT",
      lines: ["80+ API Endpoints", "38 Webhooks · WooCommerce"],
      accent: "#4F46E5",
      accentSoft: "#EBEBFD",
      icon: iconConnect,
    },
  ];

  const connectors = [
    { x2: 280, y2: 78 },
    { x2: 470, y2: 160 },
    { x2: 450, y2: 360 },
    { x2: 110, y2: 360 },
    { x2: 90, y2: 160 },
  ];

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
          <div className="pmap-glow" aria-hidden="true" />
          <svg
            viewBox="0 0 560 470"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Nova Core platform map: Sell, Transact, Fulfil, Supply, and Connect stages around one core"
          >
            <defs>
              <linearGradient id="coreGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#D444EE" />
                <stop offset=".55" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6D5DF6" />
              </linearGradient>
              <linearGradient id="stageFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FFFFFF" />
                <stop offset="1" stopColor="#FBFaff" />
              </linearGradient>
              <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#B8A6E8" stopOpacity="0.35" />
                <stop offset="0.5" stopColor="#9B87D8" stopOpacity="0.85" />
                <stop offset="1" stopColor="#B8A6E8" stopOpacity="0.35" />
              </linearGradient>
              <radialGradient id="coreAura" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.28" />
                <stop offset="0.55" stopColor="#8B5CF6" stopOpacity="0.1" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
              </radialGradient>
              <filter id="cardShadow" x="-30%" y="-30%" width="160%" height="170%">
                <feDropShadow dx="0" dy="1" stdDeviation="1.2" floodColor="#171241" floodOpacity="0.04" />
                <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#171241" floodOpacity="0.09" />
              </filter>
              <filter id="coreShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#7C3AED" floodOpacity="0.35" />
              </filter>
            </defs>

            {/* Ambient core field */}
            <circle cx="280" cy="235" r="118" fill="url(#coreAura)" />

            {/* Links/Edges */}
            {connectors.map((c, i) => (
              <motion.line
                key={`link-${i}`}
                className="link"
                x1="280"
                y1="235"
                x2={c.x2}
                y2={c.y2}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                stroke="url(#linkGrad)"
              />
            ))}

            {/* Endpoint dots */}
            {connectors.map((c, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx={c.x2}
                cy={c.y2}
                r="3.5"
                fill="#fff"
                stroke="#9B87D8"
                strokeWidth="1.5"
                variants={nodeVariants}
                custom={i + 1}
                initial="hidden"
                animate="visible"
              />
            ))}

            {/* Intelligence Ring */}
            <circle
              className="intel-ring"
              cx="280"
              cy="235"
              r="78"
              fill="none"
              stroke="#0E9E7E"
              strokeWidth="1.25"
              strokeDasharray="3.5 5.5"
              opacity=".55"
            />
            <circle
              cx="280"
              cy="235"
              r="78"
              fill="none"
              stroke="#0E9E7E"
              strokeWidth="6"
              strokeOpacity="0.06"
            />

            {/* Core Node */}
            <motion.g variants={nodeVariants} custom={0} initial="hidden" animate="visible">
              <circle cx="280" cy="235" r="62" fill="#fff" opacity="0.55" />
              <circle
                cx="280"
                cy="235"
                r="56"
                fill="url(#coreGrad)"
                filter="url(#coreShadow)"
              />
              <circle
                cx="280"
                cy="235"
                r="56"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.25"
              />
              <text x="280" y="230" textAnchor="middle" fill="#fff" fontSize="11.5" fontWeight="700" letterSpacing="2.2">
                NOVA
              </text>
              <text x="280" y="246" textAnchor="middle" fill="rgba(255,255,255,0.92)" fontSize="11.5" fontWeight="700" letterSpacing="2.2">
                CORE
              </text>
            </motion.g>

            {stages.map((stage, i) => (
              <StageCard key={stage.title} {...stage} custom={i + 1} nodeVariants={nodeVariants} />
            ))}

            <text className="intel-label" x="280" y="334" textAnchor="middle">
              INTELLIGENCE LAYER
            </text>
          </svg>
          <p className="pmap-cap">One system · every stage of the B2B sale</p>
        </motion.div>
      </div>
    </header>
  );
}
