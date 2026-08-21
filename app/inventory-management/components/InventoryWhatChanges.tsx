"use client";

import React from "react";
import WhatChangesCardsSection, { type WhatChangesCardItem } from "@/components/WhatChangesCardsSection";

export default function InventoryWhatChanges({ purple = false }: { purple?: boolean }) {
  const items: WhatChangesCardItem[] = [
    {
      title: "No more stockouts",
      desc: "Safety-stock thresholds and automated alerts catch low stock before it's too late.",
    },
    {
      title: "Faster reorders",
      desc: "One-click purchase orders replace spreadsheet calculations and manual emails.",
    },
    {
      title: "Multi-location clarity",
      desc: "See stock across every warehouse without switching between systems.",
    },
    {
      title: "Real-time accuracy",
      desc: "Stock updates instantly — no end-of-day syncs or manual reconciliation.",
    },
    {
      title: "Supplier visibility",
      desc: "All supplier info in one place, linked directly to purchase orders.",
    },
    {
      title: "Team accountability",
      desc: "Permission-based access keeps the right controls with the right people.",
    },
  ];
  return (
    <WhatChangesCardsSection
      heading="What changes when inventory just works."
      items={items}
      purple={purple}
    />
  );
}
