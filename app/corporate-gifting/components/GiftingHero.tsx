"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import { useCurrency } from "@/components/CurrencyProvider";

export default function GiftingHero() {
  const { format } = useCurrency();
  const [winProb, setWinProb] = useState(0);
  const target = 78;

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
            SOLUTIONS <b>/ CORPORATE GIFTING</b>
          </p>
          <h1>
            Quote every gift box in minutes. <span className="u">Even in December.</span>
          </h1>
          <p className="lede">
            Nova Core turns gifting RFQs into configured, priced, margin-protected quotes — with AI that scores your win
            probability before you hit send.
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

        <div className="quote-card" aria-label="Example quote in Nova Core">
          <div className="qc-head">
            <div>
              <div className="qc-title">Festive Kit — Client Tier A</div>
              <div className="qc-sub">QT-2041 · 250 units · RFQ received 09:14</div>
            </div>
            <span className="qc-badge">AI DRAFT</span>
          </div>
          <div className="qc-lines">
            <div className="qc-line">
              <span>Rigid gift box, branded lid</span>
              <span className="q">×250</span>
            </div>
            <div className="qc-line">
              <span>Insulated bottle, laser engrave</span>
              <span className="q">×250</span>
            </div>
            <div className="qc-line">
              <span>Artisan chocolate, 6-pc</span>
              <span className="q">×250</span>
            </div>
            <div className="qc-line">
              <span>Insert card, foil print</span>
              <span className="q">×250</span>
            </div>
            <div className="qc-line total">
              <span>Quote total</span>
              <span>{format(11340, 2)}</span>
            </div>
          </div>
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
