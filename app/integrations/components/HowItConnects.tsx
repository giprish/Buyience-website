"use client";

import React from "react";
import CapabilitiesChipGridSection from "@/components/CapabilitiesChipGridSection";

const STEPS = [
  {
    title: "Connect",
    description:
      "Add your keys in settings — no code, no consultants. Each connection is scoped to your tenant.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-5" />
        <path d="M9 8V2" />
        <path d="M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
      </svg>
    ),
  },
  {
    title: "Sync",
    description: "Products, orders, customers, and payments flow between systems automatically.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </svg>
    ),
  },
  {
    title: "React",
    description:
      "38 webhook events keep everything current — a paid order in Nova Core becomes a triggered flow in Klaviyo, a label in Shiprocket, a conversion in Google Ads.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function HowItConnects({ purple = false }: { purple?: boolean }) {
  return (
    <CapabilitiesChipGridSection
      id="how-it-works"
      eyebrow="HOW IT WORKS"
      heading="Connected in settings. Kept alive by events."
      items={STEPS}
      purple={purple}
    />
  );
}
