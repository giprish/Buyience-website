"use client";

import React from "react";
import WhatChangesCardsSection, { type WhatChangesCardItem } from "@/components/WhatChangesCardsSection";

export default function SupplierWhatChanges({ purple = false }: { purple?: boolean }) {
  const items: WhatChangesCardItem[] = [
    {
      title: "Structured onboarding",
      desc: "The 5-step process ensures complete supplier profiles every time.",
    },
    {
      title: "Compliance visibility",
      desc: "Certificate expiries are flagged automatically before they lapse.",
    },
    {
      title: "Logistics clarity",
      desc: "Know exactly how each supplier delivers.",
    },
    {
      title: "Financial tracking",
      desc: "Banking details and spending in one place.",
    },
    {
      title: "Quick search",
      desc: "Find any supplier in seconds by name, email, or ID.",
    },
    {
      title: "Bulk efficiency",
      desc: "Manage multiple suppliers at once with bulk operations.",
    },
  ];
  return (
    <WhatChangesCardsSection
      heading="What changes when suppliers are organized."
      items={items}
      purple={purple}
    />
  );
}
