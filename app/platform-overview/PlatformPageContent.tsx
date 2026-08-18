"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import PlatformHero from "./components/PlatformHero";
import PlatformChallenge from "./components/PlatformChallenge";
import PlatformLifecycle from "./components/PlatformLifecycle";
import PlatformHowItWorks from "./components/PlatformHowItWorks";
import PlatformModuleDives from "./components/PlatformModuleDives";
import PlatformIntelLayer from "./components/PlatformIntelLayer";
import PlatformMACH from "./components/PlatformMACH";
import PlatformWordPress from "./components/PlatformWordPress";
import PlatformTargetAudience from "./components/PlatformTargetAudience";
import PlatformOutcomes from "./components/PlatformOutcomes";
import PlatformFAQ from "./components/PlatformFAQ";

export default function PlatformPageContent() {
  return (
    <MarketingLayout
      mainClassName="platform-page"
      cta={{
        title: (
          <>
            Ready to Stop Fighting{" "}
            <span className="final-card-accent">Your Platform?</span>
          </>
        ),
        description: "Start your 14-day free trial. No credit card required. Full access to all features.",
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
      }}
    >
      <PlatformHero />
      <PlatformChallenge />
      <PlatformLifecycle />
      <PlatformHowItWorks />
      <PlatformModuleDives />
      <PlatformIntelLayer />
      <PlatformMACH />
      <PlatformWordPress />
      <PlatformTargetAudience />
      <PlatformOutcomes />
      <PlatformFAQ />
    </MarketingLayout>
  );
}
