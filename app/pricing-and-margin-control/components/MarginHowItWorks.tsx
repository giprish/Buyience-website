"use client";

import React from "react";
import { BadgePercent, ListChecks, ShieldCheck, SlidersHorizontal } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

const steps: StepRailStep[] = [
  {
    chip: "Rules",
    title: "Set floors and lists",
    desc: "Configure margin floors, targets, and customer or contract rates once. They apply to every channel that prices a line.",
    Icon: SlidersHorizontal,
  },
  {
    chip: "Resolve",
    title: "Price resolves at the line",
    desc: "Volume breaks, customer rates, and list price stack in a defined order. Quantity or config changes recalculate instantly.",
    Icon: ListChecks,
  },
  {
    chip: "Guard",
    title: "The floor holds",
    desc: "AI drafts and human edits are checked the same way. A below-floor price is blocked or flagged before it can be sent.",
    Icon: ShieldCheck,
    live: true,
  },
  {
    chip: "Live",
    title: "Negotiate on the same rules",
    desc: "Counters in the Sales Room still see live margin. The floor does not disappear because the conversation moved out of the quote form.",
    Icon: BadgePercent,
    won: true,
  },
];

export default function MarginHowItWorks({ purple = false }: { purple?: boolean }) {
  return (
    <StepRailSection
      eyebrow="HOW IT WORKS"
      heading="From rulebook to closed deal."
      lede="Set the floors once. Every quote — drafted or negotiated — stays inside them."
      steps={steps}
      purple={purple}
    />
  );
}
