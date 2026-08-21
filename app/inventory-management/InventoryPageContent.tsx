"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import InventoryHero from "./components/InventoryHero";
import InventoryChallenge from "./components/InventoryChallenge";
import InventoryCapabilities from "./components/InventoryCapabilities";
import InventoryHowItWorks from "./components/InventoryHowItWorks";
import InventoryPOComparison from "./components/InventoryPOComparison";
import InventoryLocationDives from "./components/InventoryLocationDives";
import InventoryWhatChanges from "./components/InventoryWhatChanges";
import InventoryFAQ from "./components/InventoryFAQ";

export default function InventoryPageContent() {
  return (
    <MarketingLayout
      mainClassName="inventory-page"
      cta={{
        title: (
          <>
            Get your inventory{" "}
            <span className="final-card-accent">under control.</span>
          </>
        ),
        description:
          "Multi-warehouse tracking, automated reorders, and real-time visibility. Start your free trial today.",
      }}
    >
      <InventoryHero />
      <InventoryChallenge />
      <InventoryCapabilities />
      <InventoryHowItWorks />
      <InventoryPOComparison />
      <InventoryWhatChanges purple />
      <InventoryLocationDives />
      <InventoryFAQ />
    </MarketingLayout>
  );
}
