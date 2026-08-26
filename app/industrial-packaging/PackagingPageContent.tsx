"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import PackagingHero from "./components/PackagingHero";
import PackagingProblem from "./components/PackagingProblem";
import PackagingCapabilities from "./components/PackagingCapabilities";
import PackagingDivesSection from "./components/PackagingDivesSection";
import PackagingHowItWorks from "./components/PackagingHowItWorks";
import PackagingIntegrations from "./components/PackagingIntegrations";
import PackagingPricing from "./components/PackagingPricing";
import PackagingFAQ from "./components/PackagingFAQ";

export default function PackagingPageContent() {
  return (
    <MarketingLayout
      mainClassName="packaging-page"
      cta={{
        capsule: "Get Ahead Of It",
        title: (
          <>
            Answer the next RFQ{" "}
            <span className="final-card-accent">first.</span>
          </>
        ),
        description: "Load your specs into Nova Core and send your first tiered, margin-protected quote this week.",
        secondaryAction: {
          label: "Book a demo",
          href: "/request-a-demo",
          variant: "ghost",
        },
        purple: true,
      }}
    >
      <PackagingHero />
      <PackagingProblem />
      <PackagingCapabilities />
      <PackagingDivesSection purple />
      <PackagingHowItWorks />
      <PackagingIntegrations />
      <PackagingPricing />
      <PackagingFAQ />
    </MarketingLayout>
  );
}
