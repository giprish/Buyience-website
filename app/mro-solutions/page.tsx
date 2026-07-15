import React from "react";
import type { Metadata } from "next";
import SimpleMarketingPage from "@/components/SimpleMarketingPage";

export const metadata: Metadata = {
  title: "MRO B2B Commerce Solutions | Buyience",
  description:
    "B2B commerce for MRO suppliers — contract pricing, multi-warehouse inventory, and faster quote-to-order cycles.",
};

export default function MroSolutionsPage() {
  return (
    <SimpleMarketingPage
      capsule="Industries"
      title="MRO sales that move as fast as the floor needs parts"
      description="Maintenance, repair, and operations buyers expect contract pricing and rapid turnaround. Nova Core delivers both — with margin protection built in."
      secondaryCta={{ label: "All Solutions", href: "/solutions" }}
    >
      <div className="space-y-6">
        <p>
          Support contract accounts with customer-specific pricing, AI drafts for rush quotes, and inventory visibility
          across locations so you never promise what you can&apos;t ship.
        </p>
        <p>
          Give facility buyers a self-service portal for reorders while your team focuses on complex RFQs in the Digital
          Sales Room.
        </p>
      </div>
    </SimpleMarketingPage>
  );
}
