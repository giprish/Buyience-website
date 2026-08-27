"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import GiftingHero from "./components/GiftingHero";
import GiftingProblem from "./components/GiftingProblem";
import GiftingCapabilities from "./components/GiftingCapabilities";
import GiftingDivesSection from "./components/GiftingDivesSection";
import GiftingHowItWorks from "./components/GiftingHowItWorks";
import GiftingIntegrations from "./components/GiftingIntegrations";
import GiftingPricing from "./components/GiftingPricing";
import GiftingFAQ from "./components/GiftingFAQ";

export default function GiftingPageContent() {
  return (
    <MarketingLayout
      mainClassName="gifting-page"
      cta={{
        capsule: "Get Ahead Of It",
        title: (
          <>
            Be ready before the next{" "}
            <span className="final-card-accent">peak season.</span>
          </>
        ),
        description: "Set up Nova Core now, quote in minutes when the rush arrives.",
        secondaryAction: {
          label: "Book a demo",
          href: "/request-a-demo",
          variant: "ghost",
        },
        purple: true,
      }}
    >
      <GiftingHero />
      <GiftingProblem />
      <GiftingCapabilities />
      <GiftingDivesSection purple />
      <GiftingHowItWorks />
      <GiftingIntegrations />
      <GiftingPricing />
      <GiftingFAQ />
    </MarketingLayout>
  );
}
