import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import MarginConsole from "./MarginConsole";

const ROTATING_WORDS = ["margin.", "floor.", "deal.", "margin."];

export default function MarginHero() {
  return (
    <header className="margin-hero relative flex flex-col overflow-hidden bg-hero-grid sm:min-h-[var(--home-hero-h)] sm:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="margin-hero-inner relative z-10 mx-auto grid w-full max-w-[var(--w-max,1200px)] grid-cols-1 items-start gap-10 px-5 py-12 sm:px-8">
        <div className="margin-hero-capsule">
          <SectionCapsule>Pricing &amp; Margin Control</SectionCapsule>
        </div>
        <div className="margin-hero-copy flex min-h-0 flex-col text-left">
          <div className="margin-hero-copy-main">
            <h1 className="text-[1.75rem] leading-[1.1] font-extrabold tracking-normal">
              Price every quote. Protect every{" "}
              <span className="home-rotator" aria-hidden="true">
                <span className="home-rotator-track">
                  {ROTATING_WORDS.map((word, i) => (
                    <span key={`${word}-${i}`} className="home-rotator-word grad-text">
                      {word}
                    </span>
                  ))}
                </span>
              </span>
              <span className="sr-only">margin, floor, and deal.</span>
            </h1>
            <p className="lede max-w-[34rem]">
              Customer-specific rates, volume tiers, and configurable floors — applied the same way whether a rep
              writes the quote or AI drafts it. Discount pressure has a hard stop, and it isn&apos;t anyone&apos;s
              willpower.
            </p>
          </div>
          <div className="margin-hero-copy-foot">
            <div className="cta-row">
              <Button variant="primary" size="lg" href="https://app.buyience.com/register">
                Start free trial →
              </Button>
              <Button variant="ghost" size="lg" href="/request-a-demo">
                Request a demo
              </Button>
            </div>
          </div>
        </div>
        <MarginConsole />
      </div>
    </header>
  );
}
