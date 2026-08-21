"use client";

import React from "react";
import ChallengeSection from "@/components/ChallengeSection";

const cards = [
  {
    marker: "01",
    title: "Email quote ping-pong",
    description:
      "They request a quote, you send it, they counter, you revise — back and forth over days while momentum dies in the inbox.",
  },
  {
    marker: "02",
    title: "No visibility into intent",
    description:
      "Did they open the quote? Are they comparing you to a competitor? Who else is deciding? You're flying blind until they ghost you.",
  },
  {
    marker: "03",
    title: "Scattered deal context",
    description:
      "Quote versions in email, specs in PDFs, negotiation notes in your head. When the buyer asks 'what did we agree?', nobody's sure.",
  },
];

export default function SalesRoomChallenge({ purple = false }: { purple?: boolean }) {
  return (
    <ChallengeSection
      eyebrow="THE CHALLENGE"
      heading="B2B deals die in email threads."
      lede="Your buyers want to negotiate and your team wants to close — but email wasn't built for complex B2B deals. It's where deal momentum goes to die."
      cards={cards}
      purple={purple}
    />
  );
}
