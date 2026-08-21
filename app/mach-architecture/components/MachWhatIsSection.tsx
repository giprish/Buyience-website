"use client";

import React from "react";
import MACHSection from "@/components/MACHSection";
import OutcomesStrip from "@/components/OutcomesStrip";

const CARDS = [
  {
    letter: "M",
    title: "Microservices",
    description: "Individual components that are independently developed, deployed, and managed.",
  },
  {
    letter: "A",
    title: "API-First",
    description: "All functionality exposed via APIs, enabling any frontend or integration.",
  },
  {
    letter: "C",
    title: "Cloud-Native",
    description: "Built for the cloud from day one, leveraging cloud capabilities.",
  },
  {
    letter: "H",
    title: "Headless",
    description: "Frontend presentation decoupled from backend business logic.",
  },
];

const STATS = [
  {
    big: "80+",
    title: "REST API endpoints",
    description: "Full commerce surface area, documented and ready",
  },
  {
    big: "38",
    title: "Webhook events",
    description: "Real-time hooks for orders, stock, and status",
  },
  {
    big: "1 DB",
    title: "Per tenant",
    description: "Isolated by design — not shared tables",
  },
  {
    big: "<2 wks",
    title: "Typical go-live",
    description: "From kickoff to production without a rebuild",
  },
];

export default function MachWhatIsSection({ purple = true }: { purple?: boolean }) {
  return (
    <MACHSection
      purple={purple}
      eyebrow="THE FOUNDATION"
      title="What is MACH architecture?"
      lede="MACH is a set of guiding principles for modern enterprise technology. It represents best practices for building software that's flexible, scalable, and future-proof."
      cards={CARDS}
    >
      <OutcomesStrip items={STATS} />
    </MACHSection>
  );
}
