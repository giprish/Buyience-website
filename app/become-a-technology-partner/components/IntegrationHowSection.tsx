"use client";

import React from "react";
import { Boxes, Code2, GitPullRequestArrow, Send } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

export default function IntegrationHowSection() {
  const steps: StepRailStep[] = [
    {
      chip: "Step 1",
      title: "Apply",
      desc: "Tell us what your product does and what you'd connect. Two minutes.",
      Icon: Send,
    },
    {
      chip: "Step 2",
      title: "Scope the integration",
      desc:
        "A technical call with the people who built the API. We agree what flows where, and where the value is for shared customers.",
      Icon: GitPullRequestArrow,
    },
    {
      chip: "Step 3",
      title: "Build against a sandbox",
      desc: "A sandbox tenant, full API access, and engineering support while you build.",
      Icon: Code2,
    },
    {
      chip: "Listed",
      title: "Ship & get listed",
      desc: "Your integration goes live in the directory, and we announce it together.",
      Icon: Boxes,
      won: true,
    },
  ];

  return (
    <StepRailSection eyebrow="HOW IT WORKS" heading="From application to listed integration." steps={steps} />
  );
}
