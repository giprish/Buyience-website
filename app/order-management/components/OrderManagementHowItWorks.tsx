"use client";

import React from "react";
import { ClipboardCheck, CreditCard, PackagePlus, UserRound } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

const steps: StepRailStep[] = [
  {
    chip: "Step 1",
    title: "Select customer",
    desc: "Choose a B2B customer by email — their addresses auto-populate.",
    Icon: UserRound,
  },
  {
    chip: "Step 2",
    title: "Add products",
    desc: "Search and add products with variants; prices update in real time.",
    Icon: PackagePlus,
  },
  {
    chip: "Step 3",
    title: "Review & create",
    desc: "Review totals with tax and shipping, then create the order or save a draft.",
    Icon: ClipboardCheck,
  },
  {
    chip: "Step 4",
    title: "Process payment",
    desc: "Collect via Stripe, PayPal, a payment link, or mark as paid manually.",
    Icon: CreditCard,
  },
];

export default function OrderManagementHowItWorks({ purple = false }: { purple?: boolean }) {
  return (
    <StepRailSection
      eyebrow="HOW IT WORKS"
      heading="Create an order in four steps"
      lede="No complex forms, no switching between systems — everything in one flow."
      steps={steps}
      purple={purple}
    />
  );
}
