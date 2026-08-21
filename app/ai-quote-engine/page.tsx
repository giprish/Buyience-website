import React from "react";
import type { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";
import QuoteHero from "./components/QuoteHero";
import Challenge from "./components/Challenge";
import Capabilities from "./components/Capabilities";
import HowItWorks from "./components/HowItWorks";
import Versus from "./components/Versus";
import Benefits from "./components/Benefits";
import DigitalSalesRoomSection from "./components/DigitalSalesRoomSection";
import Impact from "./components/Impact";
import FAQSection from "./components/FAQSection";

export const metadata: Metadata = {
  title: "AI Quote Engine for B2B | Smart Pricing & Quotes | Buyience",
  description:
    "Nova Core prices every B2B quote in seconds, scores win probability across 11+ factors, and enforces your margin floor. You stay in control; the AI does the maths.",
};

export default function AIQuoteEnginePage() {
  return (
    <MarketingLayout
      mainClassName="quote-engine-page home-landing"
      cta={{
        title: (
          <>
            Ready to quote faster and{" "}
            <span className="final-card-accent">win more deals?</span>
          </>
        ),
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
        secondaryAction: {
          label: "See pricing",
          href: "/pricing",
          variant: "ghost",
        },
        description: "Price your next quote with AI — scored, margin-protected, and ready in seconds.",
      }}
    >
      <QuoteHero />
      <Challenge />
      <Capabilities />
      <HowItWorks />
      <Versus />
      <Benefits />
      <Impact purple />
      <DigitalSalesRoomSection />
      <FAQSection />
    </MarketingLayout>
  );
}
