"use client";

import { Calculator, ClipboardList, FilePlus2, PackageCheck } from "lucide-react";
import WhatChangesSection, { type WhatChangesItem } from "@/components/WhatChangesSection";

const items: WhatChangesItem[] = [
  {
    title: "Check stock levels",
    from: "Open spreadsheet, scan rows",
    after: "Real-time low stock alerts",
    desc: "Threshold-based alerts surface exactly what needs replenishment.",
    Icon: ClipboardList,
  },
  {
    title: "Calculate order quantity",
    from: "Manual math based on thresholds",
    after: "Auto-calculated from safety stock",
    desc: "Reorder quantities are calculated from your min/max and safety stock rules.",
    Icon: Calculator,
  },
  {
    title: "Create purchase order",
    from: "Copy data to email or another system",
    after: "One-click PO linked to supplier",
    desc: "Generate a supplier-linked PO from the alert without retyping line items.",
    Icon: FilePlus2,
  },
  {
    title: "Update when received",
    from: "Manually update the spreadsheet",
    after: "One-click receive updates stock",
    desc: "Receiving a PO posts inventory updates immediately across locations.",
    Icon: PackageCheck,
  },
];

export default function InventoryPOComparison() {
  return (
    <WhatChangesSection
      eyebrow="PURCHASE ORDERS"
      heading="Low stock alert -> PO -> received. Done."
      lede='No more spreadsheet calculations. No more "I thought we ordered that."'
      outcomeLabel="Process"
      fromLabel="Manual method"
      toLabel="With Nova Core"
      items={items}
    />
  );
}
