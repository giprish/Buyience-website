"use client";

import React from "react";
import ChallengeSection from "@/components/ChallengeSection";

const cards = [
  {
    marker: "FRAGMENTED",
    title: "Data in five systems",
    description:
      "Quote in email, payment in Stripe, status in a spreadsheet — no single source of truth.",
  },
  {
    marker: "MANUAL",
    title: "Re-keyed at every step",
    description:
      "Accepted quotes get re-typed into an order, inviting errors and wasting rep time.",
  },
  {
    marker: "BLIND",
    title: "No live status",
    description:
      "Customers ask \"where’s my order?\" and nobody can answer without three tabs open.",
  },
];

export default function OrderManagementProblem({ purple = false }: { purple?: boolean }) {
  return (
    <ChallengeSection
      eyebrow="THE PROBLEM"
      heading="Orders live in five places at once"
      lede="The quote is in email, the payment in Stripe, the status in a spreadsheet, and the returns in someone's inbox. Nobody has the full picture, and orders slip through the gaps."
      cards={cards}
      markerVariant="tag"
      purple={purple}
    />
  );
}
