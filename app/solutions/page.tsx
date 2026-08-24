import React from "react";
import type { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";
import { pageMetadata } from "@/lib/seo";
import SolutionsHero from "./components/SolutionsHero";
import CapabilitiesSuite from "./components/CapabilitiesSuite";
import IndustriesSection from "./components/IndustriesSection";
import IntegrationsSection from "./components/IntegrationsSection";

export const metadata: Metadata = pageMetadata({
  title: "B2B Commerce Solutions | Wholesale & Distribution | Buyience",
  description:
    "Complete B2B commerce suite—AI Quote Engine, inventory management, customer portals, and order management. Built for wholesalers, distributors & manufacturers.",
  path: "/solutions",
});

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
          variant: "ghost",
        },
      }}
    >
      <SolutionsHero />
      <CapabilitiesSuite />
      <IndustriesSection purple />
      <IntegrationsSection />
    </MarketingLayout>
  );
}
