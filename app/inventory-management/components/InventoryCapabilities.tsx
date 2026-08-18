"use client";

import React from "react";
import CapabilitiesChipGridSection from "@/components/CapabilitiesChipGridSection";

export default function InventoryCapabilities() {
  const capabilities = [
    {
      title: "Real-time stock tracking",
      description:
        "Monitor on-hand, committed, expected and available inventory. Stock updates instantly as orders are placed or goods received.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 3 3 5-6" />
        </svg>
      ),
    },
    {
      title: "Multi-warehouse management",
      description:
        "Track inventory separately per warehouse. Filter by location, set location-specific safety stock, designate defaults.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10l9-6 9 6-9 6-9-6z" />
          <path d="M3 10v8l9 6 9-6v-8" />
        </svg>
      ),
    },
    {
      title: "Automated stock status",
      description:
        "In Stock, Low Stock and Out of Stock are calculated automatically from your thresholds — colour-coded for instant visibility.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="18" cy="12" r="2" />
        </svg>
      ),
    },
    {
      title: "Purchase order automation",
      description:
        "Generate POs in one click when stock falls below safety stock. Quantities auto-calculate and link to preferred suppliers.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      title: "Inter-warehouse transfers",
      description: "Move inventory between locations with transfer orders. Track Pending → In Transit → Completed, with priority levels.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7h10" />
          <path d="M3 12h14" />
          <path d="M3 17h10" />
          <path d="M17 7l4 5-4 5" />
        </svg>
      ),
    },
    {
      title: "Built-in supplier management",
      description:
        "Onboard suppliers, track compliance and link them directly to purchase orders — no third-party tool needed.",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <path d="M20 8v6" />
          <path d="M23 11h-6" />
        </svg>
      ),
    },
  ];

  return (
    <CapabilitiesChipGridSection
      id="capabilities"
      eyebrow="CORE CAPABILITIES"
      heading="Everything you need to control inventory."
      lede="Real-time tracking, automated workflows and multi-location management — built for B2B operations."
      items={capabilities}
    />
  );
}
