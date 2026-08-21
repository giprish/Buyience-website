"use client";

import React from "react";
import FeatureGridSection from "@/components/FeatureGridSection";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const features = [
  {
    label: "REAL-TIME UPDATES",
    title: "Complete order lifecycle",
    description:
      "Track orders from creation to delivery across 10+ status types, with real-time updates and a full history on every order.",
    icon: (
      <svg {...iconProps}>
        <path d="M23 4v6h-6" />
        <path d="M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
      </svg>
    ),
  },
  {
    label: "STRIPE + PAYPAL",
    title: "Multi-gateway payments",
    description:
      "Take payment through Stripe or PayPal, generate and send payment links, or simply mark an order as paid manually.",
    icon: (
      <svg {...iconProps}>
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
  },
  {
    label: "1-CLICK CONVERSION",
    title: "Quote-to-order conversion",
    description:
      "Convert an accepted quote to an order in one click — pricing, products and configurations transfer automatically.",
    icon: (
      <svg {...iconProps}>
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    label: "SAVE & RESUME",
    title: "Draft order management",
    description:
      "Save incomplete orders as drafts, edit them anytime, email them to customers for review, and convert when ready.",
    icon: (
      <svg {...iconProps}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M12 18v-6M9 15h6" />
      </svg>
    ),
  },
  {
    label: "AUTO-TRACKED",
    title: "Abandoned-checkout recovery",
    description:
      "Automatically track abandoned checkouts, flag high-value carts, and act to recover the sale before it’s lost.",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    label: "FULL TRACKING",
    title: "Returns & refunds",
    description:
      "Process return requests through a clear status flow from pending to refunded, and manage exchanges in one place.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 7v6h6" />
        <path d="M21 17a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 13" />
      </svg>
    ),
  },
];

export default function OrderManagementCapabilities({ purple = false }: { purple?: boolean }) {
  return (
    <FeatureGridSection
      eyebrow="CORE CAPABILITIES"
      heading="Everything you need to manage orders"
      lede="From creation to fulfilment, payment to delivery — one system for the entire order lifecycle."
      features={features}
      purple={purple}
    />
  );
}
