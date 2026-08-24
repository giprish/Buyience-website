import React from "react";
import type { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";
import FinalCTA from "@/components/FinalCTA";
import { pageMetadata } from "@/lib/seo";
import IntegrationsHero from "./components/IntegrationsHero";
import IntegrationsDirectory from "./components/IntegrationsDirectory";
import HowItConnects from "./components/HowItConnects";
import IntegrationsChallenge from "./components/IntegrationsChallenge";
import IntegrationsFAQ from "./components/IntegrationsFAQ";

export const metadata: Metadata = pageMetadata({
  title: "All-in-One B2B Integrations | Payments, Shipping, Marketing & SEO",
  description:
    "Unify your entire business with Buyience integrations. Sync products, automate orders, track analytics & connect Multiple tools in one platform.",
  path: "/integrations",
});

export default function IntegrationsPage() {
  return (
    <MarketingLayout mainClassName="integrations-page" cta={false}>
      <IntegrationsHero />
      <IntegrationsDirectory />
      <HowItConnects />
      <IntegrationsChallenge purple />
      <IntegrationsFAQ />
      <FinalCTA
        title={
          <>
            Your stack, connected{" "}
            <span className="final-card-accent">in an afternoon.</span>
          </>
        }
        description="Payments, commerce, marketing, shipping, analytics — plus an API for everything else."
        primaryAction={{
          label: "Start free trial",
          href: "https://app.buyience.com/register",
          variant: "primary",
        }}
        secondaryAction={{
          label: "See Pricing",
          href: "/pricing",
          variant: "ghost",
        }}
        purple
      />
    </MarketingLayout>
  );
}
