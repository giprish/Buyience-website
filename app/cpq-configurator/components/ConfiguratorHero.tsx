import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import ConfiguratorDemo from "./ConfiguratorDemo";

export default function ConfiguratorHero() {
  return (
    <header className="cfg-hero relative flex flex-col overflow-hidden bg-hero-grid sm:min-h-[var(--home-hero-h)] sm:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="cfg-hero-inner relative z-10 mx-auto grid w-full max-w-[var(--w-max,1200px)] grid-cols-1 items-stretch gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div className="cfg-hero-copy flex min-h-0 flex-col text-left">
          <div className="cfg-hero-copy-main">
            <SectionCapsule>CPQ · Product Configurator</SectionCapsule>
            <h1>
              Complex products, made <span className="grad-text">simple</span>
            </h1>
            <p className="lede">
              Define options once, sell every combination. Real-time pricing, automatic conflict resolution, and
              configured products that flow straight into quotes — one product instead of exploding SKUs.
            </p>
          </div>
          <div className="cfg-hero-copy-foot">
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
        <ConfiguratorDemo />
      </div>
    </header>
  );
}
