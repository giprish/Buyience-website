"use client";

import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import SalesRoomDemo from "./SalesRoomDemo";

export default function SalesRoomHero() {
  return (
    <header className="sales-room-hero relative flex flex-col overflow-hidden bg-hero-grid sm:min-h-[var(--home-hero-h)] sm:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="sales-room-hero-inner relative z-10 mx-auto grid w-full max-w-[var(--w-max,1200px)] grid-cols-1 items-stretch gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div className="sales-room-hero-copy flex min-h-0 flex-col text-left">
          <div className="sales-room-hero-copy-main">
            <SectionCapsule>Digital Sales Room</SectionCapsule>
            <h1>
              One link. The whole <span className="grad-text">deal.</span>
            </h1>
            <p className="lede">
              Replace the email-and-PDF chase with a shared, buyer-facing room. Live quote, mutual action plan, files,
              and a running conversation — every stakeholder aligned in one place, right through to signature.
            </p>
          </div>
          <div className="sales-room-hero-copy-foot">
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
        <SalesRoomDemo />
      </div>
    </header>
  );
}
