import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import QuoteConsole from "./QuoteConsole";

export default function QuoteHero() {
  return (
    <header className="hero relative overflow-hidden bg-hero-grid">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="container hero-grid relative z-10">
        {/* Left column */}
        <div className="text-left">
          <SectionCapsule>AI Quote Engine · Now in Nova Core</SectionCapsule>
          <h1>
            The AI quote engine built for B2B. <span className="grad-text">Built to win.</span>
          </h1>
          <p className="lede">
            Nova Core prices every quote for you, scores its win probability, and protects your margin floor — so you
            respond in seconds and win more deals. You stay in control; the AI does the maths.
          </p>
          <div className="cta-row">
            <Button variant="primary" size="lg" href="https://app.buyience.com/register">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" href="/request-a-demo">
              Request Demo
            </Button>
          </div>
          <p className="trust-micro">
            14-day trial<span className="dot">·</span>No card required
          </p>
        </div>

        {/* Right column (Console) */}
        <QuoteConsole />
      </div>
    </header>
  );
}
