import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import PlatformHeroMap from "@/app/platform-overview/components/PlatformHeroMap";

export default function NovaCoreHero() {
  return (
    <header className="platform-hero relative flex flex-col overflow-hidden bg-hero-grid sm:min-h-[var(--home-hero-h)] sm:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="platform-hero-inner relative z-10 mx-auto grid w-full max-w-[var(--w-max,1200px)] grid-cols-1 items-stretch gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div className="platform-hero-copy flex min-h-0 flex-col text-left">
          <div className="platform-hero-copy-main">
            <SectionCapsule>Nova Core · The platform inside Buyience</SectionCapsule>
            <h1>
              Your whole B2B operation, on <span className="grad-text">one core.</span>
            </h1>
            <p className="lede">
              Quoting, CPQ, sales rooms, orders, multi-warehouse inventory, and suppliers share one database, one
              price book, and one API — so a number agreed in a quote is the same number in the order, the stock
              check, and the invoice.
            </p>
          </div>
          <div className="platform-hero-copy-foot">
            <div className="cta-row">
              <Button variant="primary" size="lg" href="https://app.buyience.com/register">
                Start free trial →
              </Button>
              <Button variant="ghost" size="lg" href="/request-a-demo">
                Request a demo
              </Button>
            </div>
            <p className="trust-micro">
              <span className="trust-live" aria-hidden="true" />
              14-day trial · No card required
            </p>
          </div>
        </div>
        <PlatformHeroMap />
      </div>
    </header>
  );
}
