"use client";

import React from "react";
import { BrainCircuit, CheckCheck, Handshake, Repeat, Send } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

export default function PackagingHowItWorks() {
  const steps: StepRailStep[] = [
    {
      chip: "Step 1",
      title: "RFQ comes in",
      desc: "Email, storefront, or API — spec and quantities land in Nova Core.",
      Icon: Send,
    },
    {
      chip: "Step 2",
      title: "AI drafts & scores",
      desc: "Every tier priced, floors checked, win probability attached.",
      Icon: BrainCircuit,
      live: true,
    },
    {
      chip: "Step 3",
      title: "You approve & send",
      desc: "One review, one click, one live Sales Room link.",
      Icon: CheckCheck,
    },
    {
      chip: "Step 4",
      title: "Negotiate",
      desc: "Assistant active, margin floor enforced at every tier.",
      Icon: Handshake,
    },
    {
      chip: "Won",
      title: "Order, fulfil, reorder",
      desc: "Multi-warehouse fulfilment — then the portal handles the repeats.",
      Icon: Repeat,
      won: true,
    },
  ];

  return (
    <StepRailSection eyebrow="HOW IT WORKS" heading="From RFQ to repeat order, in one system." steps={steps} />
  );
}
