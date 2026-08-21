"use client";

import React from "react";
import WhatChangesCardsSection, { type WhatChangesCardItem } from "@/components/WhatChangesCardsSection";

const items: WhatChangesCardItem[] = [
  {
    title: "Fewer SKUs",
    desc: "One configurable product replaces dozens of SKU combinations.",
  },
  {
    title: "Fewer config errors",
    desc: "Conflict resolution prevents the invalid combinations you define.",
  },
  {
    title: "Faster quotes",
    desc: "Real-time pricing replaces manual calculation and spreadsheet lookups.",
  },
  {
    title: "Margin visibility",
    desc: "Per-option cost tracking protects profitability as products are built.",
  },
  {
    title: "Better UX",
    desc: "Customers see clear options, not an overwhelming catalogue.",
  },
  {
    title: "Unified inventory",
    desc: "Track stock per option value, not per SKU combination.",
  },
];

export default function ConfiguratorWhatChanges() {
  return <WhatChangesCardsSection heading="What changes when products configure themselves." items={items} />;
}
