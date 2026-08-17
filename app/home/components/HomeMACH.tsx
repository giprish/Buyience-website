"use client";

import React from "react";
import MACHSection from "@/components/MACHSection";

const CARDS = [
  {
    letter: "M",
    title: "Micro-services",
    description: "True SaaS with complete data isolation per tenant.",
  },
  {
    letter: "A",
    title: "API-first",
    description: "Build custom frontends or integrate with any system.",
  },
  {
    letter: "C",
    title: "Cloud-native",
    description: "Auto-scaling infrastructure. No capacity planning.",
  },
  {
    letter: "H",
    title: "Headless",
    description: "Decoupled frontend. Use ours or build your own.",
  },
];

export default function HomeMACH({ purple = false }: { purple?: boolean }) {
  return (
    <MACHSection
      purple={purple}
      eyebrow="OUR PLATFORM"
      title="Built on MACH principles"
      lede="Modern architecture that scales with your business — from first order to enterprise."
      cards={CARDS}
      ctaHref="/mach-architecture"
      ctaLabel="Explore the architecture →"
    />
  );
}
