"use client";

import React from "react";
import CapabilitiesChipGridSection from "@/components/CapabilitiesChipGridSection";

const CAPABILITIES = [
  {
    title: "AI Quote Engine",
    description:
      "Multi-agent AI drafts the full quote — every quantity break in one pass — and scores win probability across 11+ factors before you send.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
    href: "#dive-1",
  },
  {
    title: "Spec-driven CPQ",
    description:
      "A custom box is a spec and a BOM: board, print, tooling, packing. Configure it once — pricing is derived, and plate charges never get forgotten.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M3 11h18M12 7V3M8 3h8" />
      </svg>
    ),
    href: "#dive-2",
  },
  {
    title: "Margin floors",
    description:
      "Thin-margin categories get a hard stop. Every quote — human or AI-drafted — respects your floor, at every quantity tier.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    href: "#dive-3",
  },
  {
    title: "Self-service reordering",
    description:
      "Repeat replenishment is the business. Customer portals with saved specs and pricing let regulars reorder without an email chain.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
    href: "#dive-4",
  },
];

export default function PackagingCapabilities({ purple = false }: { purple?: boolean }) {
  return (
    <CapabilitiesChipGridSection
      id="capabilities"
      eyebrow="HOW NOVA CORE FITS"
      heading="Four things packaging suppliers stop doing by hand."
      items={CAPABILITIES}
      purple={purple}
    />
  );
}
