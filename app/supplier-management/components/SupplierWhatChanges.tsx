"use client";

import React from "react";
import { Boxes, Building2, FileCheck2, Search, ShieldAlert, Wallet } from "lucide-react";
import WhatChangesCardsSection, { type WhatChangesCardItem } from "@/components/WhatChangesCardsSection";

export default function SupplierWhatChanges() {
  const items: WhatChangesCardItem[] = [
    {
      title: "Structured onboarding",
      desc: "The 5-step process ensures complete supplier profiles every time.",
      icon: FileCheck2,
    },
    {
      title: "Compliance visibility",
      desc: "Certificate expiries are flagged automatically before they lapse.",
      icon: ShieldAlert,
    },
    {
      title: "Logistics clarity",
      desc: "Know exactly how each supplier delivers.",
      icon: Building2,
    },
    {
      title: "Financial tracking",
      desc: "Banking details and spending in one place.",
      icon: Wallet,
    },
    {
      title: "Quick search",
      desc: "Find any supplier in seconds by name, email, or ID.",
      icon: Search,
    },
    {
      title: "Bulk efficiency",
      desc: "Manage multiple suppliers at once with bulk operations.",
      icon: Boxes,
    },
  ];
  return <WhatChangesCardsSection heading="What changes when suppliers are organized." items={items} />;
}
