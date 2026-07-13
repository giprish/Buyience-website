"use client";

import React from "react";
import Button from "@/components/Button";

export default function FinalCTASection() {
  return (
    <section className="final">
      <div className="container">
        <p className="eyebrow">GET STARTED</p>
        <h2>Ready to quote faster and win more deals?</h2>
        <p>Price your next quote with AI — scored, margin-protected, and ready in seconds.</p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="#trial">
            Start free trial
          </Button>
          <Button variant="ghost" size="lg" href="#pricing">
            See Pricing
          </Button>
        </div>
        <p className="trust-micro">
          14-day trial<span className="dot">·</span>No card required
        </p>
      </div>
    </section>
  );
}
