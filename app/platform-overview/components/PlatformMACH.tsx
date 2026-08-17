"use client";

import React from "react";
import MACHSection from "@/components/MACHSection";

const CARDS = [
  {
    letter: "M",
    title: "Microservices",
    description: "Independent services that scale on their own — no monolith to fight.",
  },
  {
    letter: "A",
    title: "API-First",
    description: "Every capability exposed as an API. Build on Nova Core, not around it.",
  },
  {
    letter: "C",
    title: "Cloud-Native",
    description: "Multi-tenant, elastic, and resilient — built for the cloud from day one.",
  },
  {
    letter: "H",
    title: "Headless",
    description: "Your frontend, your rules. The storefront is yours to shape.",
  },
];

export default function PlatformMACH({ purple = false }: { purple?: boolean }) {
  return (
    <MACHSection
      purple={purple}
      eyebrow="BUILT DIFFERENT"
      title="API-First. Cloud-Native. Headless."
      lede="Nova Core is built on MACH architecture — so it composes with your stack instead of replacing it."
      cards={CARDS}
      ctaHref="/mach-architecture"
      ctaLabel="Explore the architecture →"
    />
  );
}
