"use client";

import React from "react";
import { useCurrency } from "@/components/CurrencyProvider";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

export default function SalesRoomDivesSection({ purple = false }: { purple?: boolean }) {
  const { format } = useCurrency();

  return (
    <SplitFeatureSection
      purple={purple}
      className="sales-room-dives"
      header={{
        eyebrow: "THE AI IN THE ROOM",
        sparkles: "both",
        title: "A negotiation copilot that knows your floor.",
        description:
          "Fast is only good if it's also safe. The AI assistant reads the negotiation as it happens and suggests the next move — always grounded in your margin floor, the buyer's context, and what actually raises the odds of closing.",
      }}
      rows={[
        {
          eyebrow: "FLOOR-GROUNDED SUGGESTIONS",
          title: "Every suggestion respects your margin. By construction.",
          description: (
            <>
              <p>
                When the buyer pushes on price, the AI doesn&apos;t just draft a polite reply — it proposes a specific
                counter, shows the margin it leaves you, and tells you what it does to win probability. All of it computed
                above your configured floor.
              </p>
              <p>
                You choose: build a formal counter from the suggestion, insert it as a reply, or ignore it entirely. Speed
                without a single below-floor error — that&apos;s the point.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="AI suggestion grounded in the margin floor">
              <MiniRow tone="active" tag="SUGGEST">
                Counter robe at {format(20.5, 2)} · 24.6% margin
              </MiniRow>
              <MiniRow tone="warn" tag="BLOCKED">
                {format(8.4, 2)} request breaches floor at qty 24
              </MiniRow>
              <MiniRow tone="done" tag="SAFE">
                {format(8.4, 2)} works at qty 30 — floor holds
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          eyebrow: "AI QUOTE TRIGGERS",
          title: "It spots the deal inside the conversation.",
          description: (
            <>
              <p>
                The copilot listens for signals — a quantity mention, a budget hint, a deadline — and surfaces the
                opportunity as a concrete move: &quot;Offer {format(8.4, 2)} at qty 30 — adds {format(252)} volume, holds
                27.5% margin.&quot;
              </p>
              <p>
                One click applies it to a structured counter-offer. The contextual read your best negotiator does
                instinctively, available on every deal, at any hour.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="AI quote trigger">
              <MiniRow tone="done" tag="SIGNAL">
                &quot;…if we bump qty to 30?&quot;
              </MiniRow>
              <MiniRow tone="active" tag="TRIGGER">
                Volume-break opportunity detected
              </MiniRow>
              <MiniRow tone="done" tag="MOVE">
                Offer {format(8.4, 2)} @ qty 30 · 27.5% margin
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          eyebrow: "ROUNDS & THE AI READ",
          title: "Every round on the record. Momentum, readable.",
          description: (
            <>
              <p>
                Counter history keeps each round — who moved, by how much, on which lines — as a structured timeline, not
                an inbox archaeology project. The current gap is always one number.
              </p>
              <p>
                Above it, the AI read tells you what the pattern means: &quot;Buyer moved up 5% across 3 rounds. Accepting
                Round 3 captures 86.9% of opening value at healthy margin.&quot; You decide with the whole negotiation in
                view.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Counter history with AI read">
              <MiniRow
                tone="active"
                tag="R3"
                trailing={<span className="shrink-0 font-mono text-[12px]">{format(35860)}</span>}
              >
                Buyer counter · pending
              </MiniRow>
              <MiniRow
                tag="R2"
                trailing={<span className="shrink-0 font-mono text-[12px]">{format(37250)}</span>}
              >
                Seller counter · rejected
              </MiniRow>
              <MiniRow
                tag="R1"
                trailing={<span className="shrink-0 font-mono text-[12px]">{format(34120)}</span>}
              >
                Buyer counter · rejected
              </MiniRow>
              <MiniRow tone="done" tag="TREND">
                Down 13.1% · trending to close
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
    />
  );
}
