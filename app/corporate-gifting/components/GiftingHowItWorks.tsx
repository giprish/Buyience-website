"use client";

import React from "react";
import { BrainCircuit, CheckCheck, Handshake, Send, Sparkles } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

export default function GiftingHowItWorks() {
  const steps: StepRailStep[] = [
    {
      chip: "Step 1",
      title: "RFQ comes in",
      desc: "Email, storefront, or API — it lands in Nova Core.",
      Icon: Send,
    },
    {
      chip: "Step 2",
      title: "AI drafts & scores",
      desc: "Configured, priced, and win-probability scored.",
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
      desc: "Assistant active, margin floor enforced.",
      Icon: Handshake,
    },
    {
      chip: "Won",
      title: "Order & fulfil",
      desc: "Multi-warehouse inventory and shipping flow through.",
      Icon: Sparkles,
      won: true,
    },
  ];

  return (
    <StepRailSection eyebrow="HOW IT WORKS" heading="From RFQ to fulfilled order, in one system." steps={steps} />
  );
}
