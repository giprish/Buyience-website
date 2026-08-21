"use client";

import React from "react";
import WhoItsForSection from "@/components/WhoItsForSection";

const cards = [
  {
    title: "Wholesalers",
    description: "High order volumes across many repeat B2B accounts.",
    negative: "Orders re-keyed by hand; status lost across tools",
    positive: "Quote-to-order in one click; every status in one board",
    tagline: "Higher volume, less admin",
  },
  {
    title: "Distributors",
    description: "Multi-line orders with mixed payment terms and shipments.",
    negative: "Payments and tracking scattered across systems",
    positive: "Stripe, PayPal and manual options in one order record",
    tagline: "One record, every payment path",
  },
  {
    title: "Manufacturers",
    description: "Configured products flowing from quote to fulfilment.",
    negative: "Configurations re-entered; returns handled ad-hoc",
    positive: "Configs carry across; returns follow a clear flow",
    tagline: "Quote to delivery, unbroken",
  },
];

export default function OrderManagementWho({ purple = false }: { purple?: boolean }) {
  return (
    <WhoItsForSection
      eyebrow="WHO IT'S FOR"
      heading="Built for high-volume B2B operations"
      cards={cards}
      purple={purple}
    />
  );
}
