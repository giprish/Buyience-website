"use client";

import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import OrderCommandDemo from "./OrderCommandDemo";

export default function OrderManagementHero() {
  return (
    <header className="om-hero relative flex flex-col overflow-hidden bg-hero-grid sm:min-h-[var(--home-hero-h)] sm:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="om-hero-inner relative z-10 mx-auto grid w-full max-w-[var(--w-max,1200px)] grid-cols-1 items-stretch gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div className="om-hero-copy flex min-h-0 flex-col text-left">
          <div className="om-hero-copy-main">
            <SectionCapsule>Order Management</SectionCapsule>
            <h1>
              Every order. Every status. One <span className="grad-text">command centre.</span>
            </h1>
            <p className="lede">
              Create orders in minutes, take payment through Stripe or PayPal, track every status from
              pending to delivered, and convert an accepted quote to an order in a single click.
            </p>
          </div>
          <div className="om-hero-copy-foot">
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
        <OrderCommandDemo />
      </div>
    </header>
  );
}
