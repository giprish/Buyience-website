import React from "react";
import type { Metadata } from "next";
import MarketingLayout from "@/components/MarketingLayout";
import IntegrationsHero from "./components/IntegrationsHero";
import IntegrationsDirectory from "./components/IntegrationsDirectory";
import HowItConnects from "./components/HowItConnects";
import IntegrationsChallenge from "./components/IntegrationsChallenge";
import IntegrationsFAQ from "./components/IntegrationsFAQ";

export const metadata: Metadata = {
  title: "Integrations | Connect Payments, Commerce & Marketing Tools | Buyience",
  description:
    "Connect Nova Core to Stripe, Razorpay, PayPal, Shopify, WooCommerce, Klaviyo, Brevo, Google Ads, Shiprocket and more — plus 80+ REST endpoints and 38 webhooks to build your own.",
};

export default function IntegrationsPage() {
  return (
    <MarketingLayout
      mainClassName="integrations-page"
      cta={{
        title: (
          <>
            Your stack, connected{" "}
            <span className="final-card-accent">in an afternoon.</span>
          </>
        ),
        description: "Payments, commerce, marketing, shipping, analytics — plus an API for everything else.",
        primaryAction: {
          label: "Start free trial",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
        secondaryAction: {
          label: "See Pricing",
          href: "/pricing",
          variant: "primary",
        },
        purple: true,
      }}
    >
      <IntegrationsHero />
      <IntegrationsDirectory />
      <HowItConnects />
      <IntegrationsChallenge purple />
      <IntegrationsFAQ />
    </MarketingLayout>
  );
}
