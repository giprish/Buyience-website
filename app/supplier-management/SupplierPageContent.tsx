"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import SupplierHero from "./components/SupplierHero";
import SupplierChallenge from "./components/SupplierChallenge";
import SupplierCapabilities from "./components/SupplierCapabilities";
import SupplierHowItWorks from "./components/SupplierHowItWorks";
import SupplierDivesSection from "./components/SupplierDivesSection";
import SupplierWhatChanges from "./components/SupplierWhatChanges";
import SupplierFAQ from "./components/SupplierFAQ";

export default function SupplierPageContent() {
  return (
    <MarketingLayout
      mainClassName="supplier-page"
      cta={{
        title: (
          <>
            Take control of your{" "}
            <span className="final-card-accent">supplier relationships.</span>
          </>
        ),
        description: "Structured onboarding. Compliance tracking. Logistics configuration. Everything in one place.",
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
      }}
    >
      <SupplierHero />
      <SupplierChallenge />
      <SupplierCapabilities />
      <SupplierHowItWorks />
      <SupplierDivesSection />
      <SupplierWhatChanges />
      <SupplierFAQ />
    </MarketingLayout>
  );
}
