"use client";

import React from "react";
import WhatChangesCardsSection, { type WhatChangesCardItem } from "@/components/WhatChangesCardsSection";

const items: WhatChangesCardItem[] = [
  {
    title: "Faster order creation",
    desc: "A guided four-step flow replaces complex forms and multiple systems.",
  },
  {
    title: "No payment friction",
    desc: "Stripe, PayPal and manual options cover every B2B scenario.",
  },
  {
    title: "One-click conversion",
    desc: "Accepted quotes become orders with all pricing and details intact.",
  },
  {
    title: "Complete visibility",
    desc: "Every status, every change, every history entry lives in one place.",
  },
  {
    title: "Fewer lost sales",
    desc: "Abandoned-checkout tracking catches sales before they disappear.",
  },
  {
    title: "Streamlined returns",
    desc: "Handle returns and refunds through a clear flow, no spreadsheets.",
  },
];

export default function OrderManagementWhatChanges({
  purple = false,
}: {
  purple?: boolean;
}) {
  return (
    <WhatChangesCardsSection
      heading="What changes when orders just work"
      items={items}
      purple={purple}
    />
  );
}
