import React from "react";
import type { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";
import SolutionsHero from "./components/SolutionsHero";
import CapabilitiesSuite from "./components/CapabilitiesSuite";
import IndustriesSection from "./components/IndustriesSection";
import IntegrationsSection from "./components/IntegrationsSection";

export const metadata: Metadata = {
  title: "B2B Commerce Solutions | AI Quoting, CPQ & Sales Rooms — Buyience",
  description:
    "One platform for the whole B2B sale: AI Quote Engine, CPQ with real BOMs, Digital Sales Rooms, and margin-protected pricing — by capability and by industry.",
};

export default function SolutionsPage() {
  return (
    <MarketingLayout
      mainClassName="solutions-page"
      cta={{
        id: "trial",
        title: (
          <>
            See it on{" "}
            <span className="final-card-accent">your own catalog.</span>
          </>
        ),
        description: "Set up Nova Core in a trial account, load your products, and send your first AI-drafted quote.",
        primaryAction: {
          label: "Start free trial",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
        secondaryAction: {
          label: "Request a demo",
          href: "/request-a-demo",
          variant: "primary",
        },
      }}
    >
      <SolutionsHero />
      <CapabilitiesSuite />
      <IndustriesSection />
      <IntegrationsSection />
    </MarketingLayout>
  );
}
