"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import ConfiguratorHero from "./components/ConfiguratorHero";
import ConfiguratorProblem from "./components/ConfiguratorProblem";
import ConfiguratorCapabilities from "./components/ConfiguratorCapabilities";
import ConfiguratorDivesSection from "./components/ConfiguratorDivesSection";
import ConfiguratorWho from "./components/ConfiguratorWho";
import ConfiguratorComparison from "./components/ConfiguratorComparison";
import ConfiguratorWhatChanges from "./components/ConfiguratorWhatChanges";
import ConfiguratorFAQ from "./components/ConfiguratorFAQ";

export default function ConfiguratorPageContent() {
  return (
    <MarketingLayout
      mainClassName="configurator-page"
      cta={{
        title: (
          <>
            Stop managing{" "}
            <span className="final-card-accent">hundreds of SKUs.</span>
          </>
        ),
        description:
          "One product. Multiple options. Every combination priced in real time — and the invalid ones never reach a quote.",
      }}
    >
      <ConfiguratorHero />
      <ConfiguratorProblem />
      <ConfiguratorCapabilities />
      <ConfiguratorDivesSection />
      <ConfiguratorWho />
      <ConfiguratorComparison />
      <ConfiguratorWhatChanges />
      <ConfiguratorFAQ />
    </MarketingLayout>
  );
}
