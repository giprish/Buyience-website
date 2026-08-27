"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import PartnerHero from "./components/PartnerHero";
import PartnerHowItWorks from "./components/PartnerHowItWorks";
import PartnerEarn from "./components/PartnerEarn";
import PartnerFounding from "./components/PartnerFounding";
import PartnerWho from "./components/PartnerWho";
import PartnerFAQ from "./components/PartnerFAQ";

export default function SolutionPartnerPageContent() {
  return (
    <MarketingLayout
      mainClassName="solution-partner-page"
      cta={{
        capsule: "Join the Program",
        title: (
          <>
            Your clients need modern B2B commerce.{" "}
            <span className="final-card-accent">Be the one who brings it.</span>
          </>
        ),
        description: "Apply in two minutes — applications go straight to the founding team.",
        primaryAction: {
          label: "Apply now",
          variant: "primary",
          onClick: () => {
            const firstInput = document.getElementById("first");
            if (firstInput) {
              firstInput.scrollIntoView({ behavior: "smooth", block: "center" });
              firstInput.focus();
            }
          },
        },
        secondaryAction: {
          label: "Explore the platform",
          href: "/platform-overview",
          variant: "ghost",
        },
        trust: null,
      }}
    >
      <PartnerHero />
      <PartnerHowItWorks />
      <PartnerEarn />
      <PartnerFounding />
      <PartnerWho />
      <PartnerFAQ />
    </MarketingLayout>
  );
}
