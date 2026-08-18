"use client";

import React from "react";
import { BadgeCheck, BrainCircuit, ClipboardList, MessageSquareText } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

const steps: StepRailStep[] = [
  {
    chip: "Received",
    title: "Request arrives",
    desc: "The customer submits via storefront, email or a sales rep. Nova Core captures every detail instantly.",
    Icon: ClipboardList,
  },
  {
    chip: "Scoring",
    title: "AI analyses & recommends",
    desc: "In seconds, the AI weighs history, margins, inventory and deal context, and returns a win-probability score and a recommended price.",
    Icon: BrainCircuit,
    live: true,
  },
  {
    chip: "Review",
    title: "You review & decide",
    desc: "See the recommendation with full context. Accept, adjust or escalate — the margin floor stays enforced. One click to send.",
    Icon: MessageSquareText,
  },
  {
    chip: "Closed",
    title: "Negotiate in real time",
    desc: "If the buyer counters, close it in the Digital Sales Room — in minutes, not days of email.",
    Icon: BadgeCheck,
    won: true,
  },
];

export default function HowItWorks() {
  return (
    <StepRailSection
      eyebrow="HOW IT WORKS"
      heading="From quote request to closed deal."
      lede="A workflow that keeps your team focused on relationships, not spreadsheets."
      steps={steps}
    />
  );
}
