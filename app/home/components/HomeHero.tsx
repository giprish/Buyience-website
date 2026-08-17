import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import HomeQuoteDemo from "./HomeQuoteDemo";

const ROTATING_WORDS = ["quoting.", "negotiation.", "your margins.", "real B2B.", "quoting."];

const HERO_STATS = [
  { value: "90%", label: "faster quoting" },
  { value: "95%", label: "pricing accuracy" },
  { value: "15 min", label: "to launch" },
];

export default function HomeHero() {
  return (
    <header className="home-hero relative flex flex-col overflow-hidden bg-hero-grid sm:min-h-[var(--home-hero-h)] sm:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="home-hero-inner relative z-10 mx-auto grid w-full max-w-[var(--w-max,1200px)] grid-cols-1 items-stretch gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div className="home-hero-copy flex min-h-0 flex-col text-left">
          <div className="home-hero-copy-main">
            <SectionCapsule>AI Quote Engine · Real-Time Negotiation · MACH</SectionCapsule>
            <h1 className="text-[clamp(2.1rem,5vw,4rem)] leading-[1.03] font-extrabold tracking-normal">
              The B2B platform that actually understands{" "}
              <span className="home-rotator" aria-hidden="true">
                <span className="home-rotator-track">
                  {ROTATING_WORDS.map((word, i) => (
                    <span key={`${word}-${i}`} className="home-rotator-word grad-text">
                      {word}
                    </span>
                  ))}
                </span>
              </span>
              <span className="sr-only">quoting, negotiation, your margins, and real B2B.</span>
            </h1>
            <p className="lede max-w-[34rem]">
              Quotes that price themselves. A negotiation room that closes deals in minutes. Margin intelligence that
              tells you exactly where to push and where to hold — built for distributors and wholesalers who sell in the
              real world.
            </p>
          </div>
          <div className="home-hero-copy-foot">
            <div className="cta-row">
              <Button variant="primary" size="lg" href="https://app.buyience.com/register">
                Start free trial →
              </Button>
              <Button variant="ghost" size="lg" href="/request-a-demo">
                See it in action
              </Button>
            </div>
            <dl className="home-hero-stats flex flex-wrap items-stretch sm:flex-nowrap">
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
        <HomeQuoteDemo />
      </div>
    </header>
  );
}
