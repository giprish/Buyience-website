"use client";

import React from "react";
import {
  BadgeCheck,
  ClipboardList,
  FileCheck2,
  Landmark,
  Layers,
  Truck,
} from "lucide-react";
import CapabilitiesChipGridSection from "@/components/CapabilitiesChipGridSection";

const CAPABILITIES = [
  {
    title: "5-step onboarding",
    description:
      "Structured workflow from basic info to approval. Company details, financials, compliance, logistics, and final review — all in one process.",
    icon: <ClipboardList size={20} strokeWidth={2} />,
  },
  {
    title: "Compliance & certificates",
    description:
      "Upload and track compliance documents. Certificate expiry monitoring with status automation: Valid, Pending, Expiring, Expired.",
    icon: <FileCheck2 size={20} strokeWidth={2} />,
  },
  {
    title: "Financial management",
    description:
      "Capture banking details with multi-currency support. Masked account numbers for security. Track payment terms and spending.",
    icon: <Landmark size={20} strokeWidth={2} />,
  },
  {
    title: "Status workflow",
    description:
      "Manage supplier status through an approval workflow — colour-coded badges with instant updates at every stage.",
    icon: <BadgeCheck size={20} strokeWidth={2} />,
  },
  {
    title: "Logistics configuration",
    description:
      "Configure shipping methods, service coverage, and delivery schedules. Set minimum orders, transit times, and temperature requirements.",
    icon: <Truck size={20} strokeWidth={2} />,
  },
  {
    title: "Bulk operations",
    description:
      "Select multiple suppliers for bulk actions. Multi-select, select all, bulk delete with confirmation. Permission-controlled operations.",
    icon: <Layers size={20} strokeWidth={2} />,
  },
];

export default function SupplierCapabilities({ purple = false }: { purple?: boolean }) {
  return (
    <CapabilitiesChipGridSection
      id="capabilities"
      eyebrow="CORE CAPABILITIES"
      heading="Everything you need to manage suppliers."
      lede="From onboarding to compliance. From logistics to purchase orders. One system for the entire supplier lifecycle."
      items={CAPABILITIES}
      purple={purple}
    />
  );
}
