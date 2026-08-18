import React from "react";
import { BadgeCheck, MessageSquareText, PanelsTopLeft, Send } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

const steps: StepRailStep[] = [
  {
    chip: "Sent",
    title: "Counter-offer sent",
    desc: "The seller sends pricing through the quote system. The buyer is notified instantly.",
    Icon: Send,
  },
  {
    chip: "Open",
    title: "The room opens",
    desc: "Both parties enter the shared room, with the quote details visible to everyone.",
    Icon: PanelsTopLeft,
  },
  {
    chip: "Live",
    title: "Live negotiation",
    desc: "Chat, counter and discuss in real time — with the AI copilot suggesting floor-safe moves.",
    Icon: MessageSquareText,
    live: true,
  },
  {
    chip: "Won",
    title: "Deal closed",
    desc: "One click to accept, and the quote converts to an order automatically.",
    Icon: BadgeCheck,
    won: true,
  },
];

export default function SalesRoomHowItWorks() {
  return (
    <StepRailSection
      eyebrow="HOW IT WORKS"
      heading="From counter-offer to closed deal."
      lede="A streamlined flow that gets both parties to agreement faster."
      steps={steps}
    />
  );
}
