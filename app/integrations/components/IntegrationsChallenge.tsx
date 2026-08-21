"use client";

import React from "react";
import ChallengeSection from "@/components/ChallengeSection";

const cards = [
  {
    marker: "01",
    title: "Complex Products",
    description:
      "Configurable options, tiered pricing, volume discounts. Spreadsheets can't keep up.",
  },
  {
    marker: "02",
    title: "Disconnected Systems",
    description:
      "Store in one tool, quotes in another, inventory in a third. Nothing talks. Everything gets retyped.",
  },
  {
    marker: "03",
    title: "Slow Quote Cycles",
    description:
      "Days to get a quote out. Manual pricing. Margin mistakes. Customers go elsewhere.",
  },
];

/** Same challenge pattern as platform-overview / shared ChallengeSection (home has no challenge block). */
export default function IntegrationsChallenge({ purple = false }: { purple?: boolean }) {
  return (
    <ChallengeSection
      eyebrow="THE CHALLENGE"
      heading="B2B Commerce Shouldn't Be This Hard"
      lede="You're managing spreadsheets, disconnected systems, and slow quote cycles. Your platform wasn't built for B2B."
      cards={cards}
      purple={purple}
    />
  );
}
