import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import QuoteConsole from "./QuoteConsole";

const ROTATING_WORDS = ["win.", "protect margin.", "close faster.", "win."];

const HERO_STATS = [
  { value: "85%", label: "faster quotes" },
  { value: "34%", label: "higher win rate" },
  { value: "23 min", label: "avg deal close" },
];

export default function QuoteHero() {
  return (
    <header className="quote-hero relative flex flex-col overflow-hidden bg-hero-grid sm:min-h-[var(--home-hero-h)] sm:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="quote-hero-inner relative z-10 mx-auto grid w-full max-w-[var(--w-max,1200px)] grid-cols-1 items-stretch gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div className="quote-hero-copy flex min-h-0 flex-col justify-center self-stretch text-left">
          <div className="quote-hero-copy-main">
            <SectionCapsule>AI Quote Engine · Now in Nova Core</SectionCapsule>
            <h1>
              Price every quote to{" "}
              <span className="home-rotator" aria-hidden="true">
                <span className="home-rotator-track">
                  {ROTATING_WORDS.map((word, i) => (
                    <span key={`${word}-${i}`} className="home-rotator-word grad-text">
                      {word}
                    </span>
                  ))}
                </span>
              </span>
              <span className="sr-only">win, protect margin, and close faster.</span>
            </h1>
            <p className="lede">
              Nova Core prices every quote for you, scores its win probability, and protects your margin floor — so you
              respond in seconds and win more deals. You stay in control; the AI does the maths.
            </p>
          </div>
          <div className="quote-hero-copy-foot">
            <div className="cta-row">
              <Button variant="primary" size="lg" href="https://app.buyience.com/register">
                Start free trial →
              </Button>
              <Button variant="ghost" size="lg" href="/request-a-demo">
                Request a demo
              </Button>
            </div>
            <dl className="quote-hero-stats flex flex-wrap items-stretch sm:flex-nowrap">
              {HERO_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex min-w-0 flex-col ${i > 0 ? "max-sm:mt-3 sm:ml-7 sm:border-l sm:border-[#E7DEFB] sm:pl-7" : ""}`}
                >
                  <dt className="font-heading text-[26px] leading-none font-extrabold tracking-tight text-[#1B1033]">
                    {stat.value}
                  </dt>
                  <dd className="m-0 mt-1.5 text-[13px] leading-snug font-semibold text-[#6A5A8C]">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <QuoteConsole />
      </div>
    </header>
  );
}
