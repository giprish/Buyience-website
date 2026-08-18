"use client";

import React from "react";
import { Handshake, PlayCircle, UserPlus, Users } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

export default function PartnerHowItWorks() {
  const steps: StepRailStep[] = [
    {
      chip: "Step 1",
      title: "Apply",
      desc: "Five fields, two minutes. Tell us who you are and who your clients are.",
      Icon: UserPlus,
    },
    {
      chip: "Step 2",
      title: "Talk to the founders",
      desc: "A direct call to check fit and agree the economics — no application portal, no waiting weeks.",
      Icon: Users,
    },
    {
      chip: "Step 3",
      title: "Get hands-on",
      desc: "Guided platform onboarding and a trial environment so your team knows Nova Core inside out.",
      Icon: PlayCircle,
    },
    {
      chip: "Live",
      title: "Bring clients, earn",
      desc: "Register deals, implement on your terms, and earn recurring commission plus your own fees.",
      Icon: Handshake,
      won: true,
    },
  ];

  return (
    <StepRailSection eyebrow="HOW IT WORKS" heading="From application to first client." steps={steps} />
  );
}
