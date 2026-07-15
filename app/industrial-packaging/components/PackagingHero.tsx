"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { useCurrency } from "@/components/CurrencyProvider";

export default function PackagingHero() {
  const { format } = useCurrency();
  const [winProb, setWinProb] = useState(0);
  const target = 73;

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      setWinProb(Math.round(target * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const radius = 32;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = 2 * Math.PI * 32; // match HTML template circumference
  const strokeDashoffset = circumference - (winProb / 100) * circumference;

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        <div className="flex flex-col text-left">
          <p className="eyebrow">
            SOLUTIONS <b>/ INDUSTRIAL PACKAGING</b>
          </p>
          <h1>
            Spec-heavy RFQs. <span className="grad-text">Quotes in minutes.</span>
          </h1>
          <p className="lede">
            Board grades, print specs, tooling charges, quantity breaks — Nova Core turns packaging RFQs into complete,
            margin-protected quotes with a win probability score before you send.
          </p>
          <div className="cta-row">
            <Button variant="primary" size="lg" href="/contact">
              Start free trial
            </Button>
            <Button variant="ghost" size="lg" href="/contact">
              See it on a real RFQ
            </Button>
          </div>
          <p className="trust-micro">
            14-day trial<span className="dot" aria-hidden="true">·</span>No card required
          </p>
        </div>

        <div className="quote-card" aria-label="Example packaging quote in Nova Core">
          <div className="qc-head">
            <div>
              <div className="qc-title">Custom Mailer Box — 3-tier quote</div>
              <div className="qc-sub">QT-3117 · RFQ received 08:42</div>
            </div>
            <span className="qc-badge">AI DRAFT</span>
          </div>
          <div className="qc-spec" aria-label="Specification">
            <span>310×230×105 mm</span>
            <span>E-flute</span>
            <span>Kraft</span>
            <span>1-colour print</span>
            <span>Tooling incl.</span>
          </div>
          <table className="tier-table">
            <thead>
              <tr>
                <th>QTY</th>
                <th>Unit</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,000</td>
                <td>{format(0.92, 2)}</td>
                <td>{format(920, 2)}</td>
              </tr>
              <tr className="rec">
                <td>5,000</td>
                <td>{format(0.71, 2)}</td>
                <td>{format(3550, 2)}</td>
              </tr>
              <tr>
                <td>10,000</td>
                <td>{format(0.64, 2)}</td>
                <td>{format(6400, 2)}</td>
              </tr>
            </tbody>
          </table>
          <div className="qc-foot">
            <div className="wp-ring" role="img" aria-label={`Win probability ${winProb} percent`}>
              <svg width="76" height="76" viewBox="0 0 76 76" aria-hidden="true">
                <circle className="track" cx="38" cy="38" r="32" fill="none" strokeWidth="6" stroke="#ECE8F8" />
                <circle
                  className="prog"
                  cx="38"
                  cy="38"
                  r="32"
                  fill="none"
                  strokeWidth="6"
                  stroke="#0E9E7E"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>
              <span className="wp-num">
                <span>{winProb}</span>%
              </span>
            </div>
            <p className="wp-label">
              <b>Win probability</b>Scored across 11+ factors before you send.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
