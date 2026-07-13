"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function QuoteHero() {
  const [winProb, setWinProb] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 81;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setWinProb(Math.round(end * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const radius = 30;
  const strokeDasharray = 2 * Math.PI * radius;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * winProb) / 100;

  return (
    <header className="hero">
      <div className="container hero-grid">
        {/* Left column */}
        <div className="text-left">
          <p className="eyebrow">AI QUOTE ENGINE · NOW IN NOVA CORE</p>
          <h1>
            The AI quote engine built for B2B. <span className="grad-text">Built to win.</span>
          </h1>
          <p className="lede">
            Nova Core prices every quote for you, scores its win probability, and protects your margin floor — so you
            respond in seconds and win more deals. You stay in control; the AI does the maths.
          </p>
          <div className="cta-row">
            <Button variant="primary" size="lg" href="#trial">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" href="#demo">
              Request Demo
            </Button>
          </div>
          <p className="trust-micro">
            14-day trial<span className="dot">·</span>No card required
          </p>
        </div>

        {/* Right column (Console) */}
        <div className="console" aria-label="AI Quote Engine pricing a quote">
          <div className="cs-head">
            <div>
              <div className="cs-title">Quote QT-4402 · 500 units</div>
              <div className="cs-sub font-mono">Gold-tier customer · 14 prior orders</div>
            </div>
            <span className="cs-badge">AI PRICED</span>
          </div>

          <div className="cs-rec">
            <div>
              <span className="lab">RECOMMENDED PRICE</span>
              <span className="val">
                €23.40 <span className="unit">/ unit</span>
              </span>
            </div>
            <div className="text-right">
              <span className="lab">MARGIN FLOOR</span>
              <span className="val" style={{ fontSize: "1.1rem", color: "var(--amber)" }}>
                Held ✓
              </span>
            </div>
          </div>

          <div className="floor-meter" aria-hidden="true">
            <div className="track">
              <div className="fill" style={{ width: "72%" }}></div>
              <div className="floor" style={{ left: "38%" }}></div>
            </div>
            <div className="lbls font-mono">
              <span>cost</span>
              <span className="f">floor</span>
              <span>recommended</span>
              <span>list</span>
            </div>
          </div>

          <div className="cs-foot">
            <div className="wp-ring" role="img" aria-label="Win probability 81 percent">
              <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden="true">
                <circle className="track" cx="36" cy="36" r="30" fill="none" strokeWidth="6" />
                <circle
                  className="prog"
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  strokeWidth="6"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
              <span className="wp-num">
                <span>{winProb}</span>%
              </span>
            </div>
            <p className="wp-label text-left">
              <b>Win probability</b>
              Scored across 11+ factors before you send.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
