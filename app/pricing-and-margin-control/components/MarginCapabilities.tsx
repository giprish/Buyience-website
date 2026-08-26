"use client";

import React from "react";
import CapabilitiesChipGridSection from "@/components/CapabilitiesChipGridSection";

const CAPABILITIES = [
  {
    title: "Margin control",
    description:
      "Configurable floors and targets per product, customer, or deal. The floor is enforced in the workflow — not as a reminder after the quote has already gone out.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Customer-specific pricing",
    description:
      "Contract rates, gold-tier lists, and one-off agreements load automatically. Repeat buyers don't restart from list price every time they request a quote.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Volume & tiered rates",
    description:
      "Breaks resolve at the line, not in a follow-up email. Quantity changes recalculate price and margin instantly — including during a live negotiation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-4 3 3 5-7" />
      </svg>
    ),
  },
  {
    title: "Real-time insights",
    description:
      "See margin, vs-list, and headroom on every line as the price moves. Know what a discount actually costs before you offer it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    title: "Same rules for AI and reps",
    description:
      "The Quote Engine drafts against the same floors and customer rates your team uses. No shadow spreadsheet. No 'the AI gave them a better price.'",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z" />
      </svg>
    ),
  },
  {
    title: "Audit trail on every exception",
    description:
      "If someone overrides a floor, it's a logged decision — who, when, and why — not a silent cell change in a shared workbook.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </svg>
    ),
  },
];

export default function MarginCapabilities({ purple = false }: { purple?: boolean }) {
  return (
    <CapabilitiesChipGridSection
      id="capabilities"
      eyebrow="CAPABILITIES"
      heading="Everything you need to price with confidence."
      lede="Floors, customer rates, and volume breaks — one rulebook, applied on every quote."
      items={CAPABILITIES}
      purple={purple}
    />
  );
}
