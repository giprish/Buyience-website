import React from "react";
import type { Metadata } from "next";
import SimpleMarketingPage from "@/components/SimpleMarketingPage";

export const metadata: Metadata = {
  title: "Automotive B2B Commerce Solutions | Buyience",
  description:
    "B2B commerce for automotive distributors and parts wholesalers — complex catalogs, customer pricing, and AI quoting.",
};

export default function AutomotiveSolutionsPage() {
  return (
    <SimpleMarketingPage
      capsule="Industries"
      title="Automotive distribution, modernized"
      description="Parts complexity, OEM catalogs, and dealer-specific pricing demand more than a generic storefront. Nova Core is built for automotive wholesale motion."
      secondaryCta={{ label: "All Solutions", href: "/solutions" }}
    >
      <div className="space-y-6">
        <p>
          Manage SKU-heavy catalogs, customer-specific nets, and quote-heavy sales cycles with AI-assisted pricing and a
          Digital Sales Room that keeps buying committees moving.
        </p>
        <p>
          Pair inventory across warehouses with a B2B storefront so repeat orders stop clogging your sales team&apos;s
          inbox.
        </p>
      </div>
    </SimpleMarketingPage>
  );
}
