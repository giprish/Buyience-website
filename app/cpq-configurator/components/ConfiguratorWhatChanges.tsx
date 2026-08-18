"use client";

import React from "react";
import {
  Boxes,
  ChartNoAxesCombined,
  Layers2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import WhatChangesCardsSection, { type WhatChangesCardItem } from "@/components/WhatChangesCardsSection";

const items: WhatChangesCardItem[] = [
  {
    title: "Fewer SKUs",
    desc: "One configurable product replaces dozens of SKU combinations.",
    icon: Layers2,
  },
  {
    title: "Fewer config errors",
    desc: "Conflict resolution prevents the invalid combinations you define.",
    icon: ShieldCheck,
  },
  {
    title: "Faster quotes",
    desc: "Real-time pricing replaces manual calculation and spreadsheet lookups.",
    icon: Zap,
  },
  {
    title: "Margin visibility",
    desc: "Per-option cost tracking protects profitability as products are built.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Better UX",
    desc: "Customers see clear options, not an overwhelming catalogue.",
    icon: Sparkles,
  },
  {
    title: "Unified inventory",
    desc: "Track stock per option value, not per SKU combination.",
    icon: Boxes,
  },
];

export default function ConfiguratorWhatChanges() {
  return <WhatChangesCardsSection heading="What changes when products configure themselves." items={items} />;
}
