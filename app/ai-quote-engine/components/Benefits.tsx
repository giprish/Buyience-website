"use client";

import React from "react";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

export default function Benefits() {
  return (
    <SplitFeatureSection
      className="benefits"
      header={{
        eyebrow: "BENEFITS",
        title: "We didn't just digitise the old process.",
        description:
          "We reimagined what B2B quoting could be with AI that reasons about your deals — not a form-filler.",
      }}
      rows={[
        {
          eyebrow: "CONVERSATIONAL AI NEGOTIATOR",
          title: "AI that thinks like your best sales rep.",
          description:
            "Our AI doesn't just fill forms — it understands context. It analyses why customers ask for specific prices, factors in relationship value and urgency, and suggests responses that close deals.",
          visual: (
            <MiniUi label="AI negotiation reasoning">
              <MiniRow tone="done" tag="SIGNAL">
                Counter-offer received · −8%
              </MiniRow>
              <MiniRow tone="done" tag="CONTEXT">
                Gold tier · pays on time · 14 orders
              </MiniRow>
              <MiniRow tone="active" tag="SUGGEST">
                Counter at −5% · floor holds
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          eyebrow: "REAL-TIME INTELLIGENCE",
          title: "Every decision backed by live data.",
          description:
            "The customer's payment history, current inventory levels, pricing position and past acceptance rates — synthesised into an actionable recommendation in seconds. No more guessing. No more gut feelings.",
          visual: (
            <MiniUi label="Live data inputs">
              <MiniRow tone="done" tag="HISTORY">
                Payment reliability · excellent
              </MiniRow>
              <MiniRow tone="done" tag="STOCK">
                1,240 units on hand · 2 warehouses
              </MiniRow>
              <MiniRow tone="done" tag="PRICING">
                Position vs list · acceptance rates
              </MiniRow>
              <MiniRow tone="active" tag="OUTPUT">
                Recommendation + win score
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          eyebrow: "CONTEXT-AWARE PRICING",
          title: "Understanding why, not just what.",
          description:
            "Understanding not just what customers ask for, but why. A high-value customer asking for a discount after 45 days of silence? The AI recognises a re-engagement opportunity and suggests pricing to win them back.",
          visual: (
            <MiniUi label="Context-aware pricing example">
              <MiniRow tag="PATTERN">45 days silent · high lifetime value</MiniRow>
              <MiniRow tone="done" tag="READ">
                Re-engagement opportunity
              </MiniRow>
              <MiniRow tone="active" tag="SUGGEST">
                Win-back price · above floor
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
    />
  );
}
