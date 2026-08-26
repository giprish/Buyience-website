"use client";

import React from "react";
import ChallengeSection from "@/components/ChallengeSection";

const cards = [
  {
    marker: "01",
    title: "Pricing lives in a spreadsheet",
    description:
      "List price here, a side deal there, last quarter's discount in someone's inbox. Nobody can say what this customer should pay today.",
  },
  {
    marker: "02",
    title: "Floors depend on memory",
    description:
      "Reps know the 'don't go below' number until a buyer pushes hard. Then the floor becomes a suggestion, and margin leaks one exception at a time.",
  },
  {
    marker: "03",
    title: "AI and humans price differently",
    description:
      "If the engine uses one rulebook and the sales team uses another, returning buyers see different numbers — and you lose the argument about consistency.",
  },
];

export default function MarginChallenge({ purple = false }: { purple?: boolean }) {
  return (
    <ChallengeSection
      eyebrow="THE CHALLENGE"
      heading="Margin shouldn't depend on who typed the quote."
      lede="Customer-specific rates, volume breaks, and floors only work if they apply the same way on every line — whether a person or the AI is pricing it."
      cards={cards}
      purple={purple}
    />
  );
}
