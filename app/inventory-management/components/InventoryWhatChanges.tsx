"use client";

import React from "react";
import { BellRing, Building2, Clock3, Search, ShieldCheck, Truck } from "lucide-react";
import WhatChangesCardsSection, { type WhatChangesCardItem } from "@/components/WhatChangesCardsSection";

export default function InventoryWhatChanges() {
  const items: WhatChangesCardItem[] = [
    {
      title: "No more stockouts",
      desc: "Safety-stock thresholds and automated alerts catch low stock before it's too late.",
      icon: BellRing,
    },
    {
      title: "Faster reorders",
      desc: "One-click purchase orders replace spreadsheet calculations and manual emails.",
      icon: Clock3,
    },
    {
      title: "Multi-location clarity",
      desc: "See stock across every warehouse without switching between systems.",
      icon: Building2,
    },
    {
      title: "Real-time accuracy",
      desc: "Stock updates instantly — no end-of-day syncs or manual reconciliation.",
      icon: ShieldCheck,
    },
    {
      title: "Supplier visibility",
      desc: "All supplier info in one place, linked directly to purchase orders.",
      icon: Truck,
    },
    {
      title: "Team accountability",
      desc: "Permission-based access keeps the right controls with the right people.",
      icon: Search,
    },
  ];
  return <WhatChangesCardsSection heading="What changes when inventory just works." items={items} />;
}
