"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";

export default function ConfiguratorFAQ() {
  const faqs = [
    {
      q: "How do option groups work?",
      a: "Each product can have unlimited option groups — memory, storage, power, safety, packaging — and each group holds its own values with their own prices and costs. Buyers pick one value per group (or quantities where enabled), and the configuration is assembled from those choices instead of from pre-built SKUs.",
    },
    {
      q: "What happens when options conflict?",
      a: "You define which combinations are incompatible during setup. When a buyer selects a conflicting option, the system detects it in real time, auto-deselects or adjusts the conflicting choice, and shows a clear message explaining why — so invalid configurations never reach a quote.",
    },
    {
      q: "How is pricing calculated?",
      a: "Base price plus the price of each selected option, multiplied by quantities where quantity selection is enabled. The total recalculates instantly on every selection, and because cost price is tracked per option value, margin is visible on the configuration as it's built.",
    },
    {
      q: "Can I track inventory per option?",
      a: "Yes — stock is tracked per option value rather than per SKU combination. Nine option values to manage instead of twenty-seven SKU permutations, with Nova Core's multi-warehouse inventory behind it.",
    },
    {
      q: "Does it work with quotes?",
      a: "Directly. Configured products flow into quotes with all options, quantities and pricing preserved, and convert to orders intact — no re-keying between configuration and quote.",
    },
    {
      q: "Is there AI in the configurator?",
      a: "The configurator itself is deliberately rules-based — conflicts you define, pricing derived from options — because configuration correctness should be deterministic. The AI enters once the configuration flows into a quote: the AI Quote Engine prices it in context, scores win probability, and enforces your margin floor.",
    },
  ];

  return (
    <FaqSection
      eyebrow="QUESTIONS, ANSWERED"
      title="CPQ configurator FAQs"
      items={faqs}
      className="problem"
    />
  );
}
