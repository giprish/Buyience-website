"use client";

import React from "react";
import CapabilitiesChipGridSection from "@/components/CapabilitiesChipGridSection";

const CAPABILITIES = [
  {
    title: "AI Quote Engine",
    description:
      "Multi-agent AI drafts the quote — research, pricing, and copy — and scores win probability across 11+ factors before you send.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
    href: "#dive-1",
  },
  {
    title: "CPQ with real BOM",
    description:
      "Configure kitted gift boxes as actual bills of materials: products, branding, inserts, packaging — priced correctly, every time.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M3 11h18M12 7V3M8 3h8" />
      </svg>
    ),
    href: "#dive-2",
  },
  {
    title: "Digital Sales Room",
    description:
      "One live link instead of a PDF. The whole buying committee sees the quote, and the AI negotiation assistant activates when talks start.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    href: "#dive-3",
  },
  {
    title: "Margin protection",
    description: "Set your floor once. Seasonal discounting pressure never takes a deal below it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    href: "#dive-4",
  },
];

export default function GiftingCapabilities({ purple = false }: { purple?: boolean }) {
  return (
    <CapabilitiesChipGridSection
      id="capabilities"
      eyebrow="HOW NOVA CORE FITS"
      heading="Four things gifting suppliers stop doing by hand."
      items={CAPABILITIES}
      purple={purple}
    />
  );
}
