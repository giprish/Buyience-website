"use client";

import {
  Activity,
  CreditCard,
  Database,
  FilePenLine,
  MousePointerClick,
  RotateCcw,
  ShoppingCart,
} from "lucide-react";
import WhatChangesSection, { type WhatChangesItem } from "@/components/WhatChangesSection";

const items: WhatChangesItem[] = [
  {
    title: "Source of truth",
    from: "Spread across email, Stripe, spreadsheets",
    after: "One order record with full history",
    Icon: Database,
  },
  {
    title: "Quote to order",
    from: "Manually re-typed, error-prone",
    after: "One click, everything transfers",
    Icon: MousePointerClick,
  },
  {
    title: "Payments",
    from: "Separate gateway, reconciled by hand",
    after: "Stripe, PayPal or manual, in-record",
    Icon: CreditCard,
  },
  {
    title: "Status tracking",
    from: '"Let me check and get back to you"',
    after: "10+ live statuses, real-time updates",
    Icon: Activity,
  },
  {
    title: "Draft orders",
    from: "Half-finished orders lost in inboxes",
    after: "Saved, editable, emailable drafts",
    Icon: FilePenLine,
  },
  {
    title: "Abandoned carts",
    from: "Invisible — sales quietly lost",
    after: "Auto-tracked, high-value flagged",
    Icon: ShoppingCart,
  },
  {
    title: "Returns",
    from: "Spreadsheet chaos",
    after: "Clear status flow to resolution",
    Icon: RotateCcw,
  },
];

export default function OrderManagementComparison({ purple = false }: { purple?: boolean }) {
  return (
    <WhatChangesSection
      purple={purple}
      eyebrow="THE DIFFERENCE"
      heading="Scattered tools vs Nova Core orders"
      outcomeLabel="Aspect"
      fromLabel="Scattered tools"
      toLabel="Nova Core orders"
      items={items}
    />
  );
}
