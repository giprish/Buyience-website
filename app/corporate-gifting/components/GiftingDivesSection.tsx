"use client";

import React from "react";
import { useCurrency } from "@/components/CurrencyProvider";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

export default function GiftingDivesSection({ purple = false }: { purple?: boolean }) {
  const { format } = useCurrency();

  return (
    <SplitFeatureSection
      purple={purple}
      className="pt-0"
      rows={[
        {
          id: "dive-1",
          eyebrow: "AI QUOTE ENGINE",
          title: "Quote the RFQ, not the spreadsheet.",
          description: (
            <>
              <p>
                When a request lands, four agents go to work: an Orchestrator coordinates the job, a Research agent
                assembles product and customer context, a Pricing agent builds the numbers against your rules, and a Writer
                drafts the quote itself.
              </p>
              <p>
                You get a complete draft with a win probability score — computed across 11+ factors — so you know where
                you stand before you send. Review, adjust, done.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Agent pipeline processing a quote">
              <MiniRow tone="done" tag="ORCHESTRATOR">
                Job accepted · QT-2041
              </MiniRow>
              <MiniRow tone="done" tag="RESEARCH">
                Customer + catalog context loaded
              </MiniRow>
              <MiniRow tone="done" tag="PRICING">
                250-unit tier applied · floor OK
              </MiniRow>
              <MiniRow tone="active" tag="WRITER">
                Drafting quote document…
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          id: "dive-2",
          eyebrow: "CPQ + BOM",
          title: "A gift box is a BOM. Treat it like one.",
          description: (
            <>
              <p>
                Every kit you sell is a bill of materials: the box, the products inside it, the branding treatment, the
                insert, the packaging tier. Nova Core&apos;s configurator builds kits as real BOMs, so pricing is derived —
                not retyped — and errors stop reaching production.
              </p>
              <p>Change a component, and quantity breaks, costs, and the quote total follow automatically.</p>
            </>
          ),
          visual: (
            <MiniUi label="Kit configurator generating a bill of materials">
              <MiniRow tag="BOM-01">Rigid box · lid print (1 colour)</MiniRow>
              <MiniRow tag="BOM-02">Bottle 500ml · laser engrave</MiniRow>
              <MiniRow tag="BOM-03">Chocolate 6-pc · sleeve</MiniRow>
              <MiniRow tag="BOM-04">Insert card · gold foil</MiniRow>
              <MiniRow tone="done" tag="PRICED">
                {format(45.36, 2)} / unit · 250 units
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          id: "dive-3",
          eyebrow: "DIGITAL SALES ROOM",
          title: "Quotes that survive the forwarding chain.",
          description: (
            <>
              <p>
                The HR manager who requested your quote isn&apos;t the one who signs off on it. A PDF dies somewhere in
                that forwarding chain. A Sales Room link doesn&apos;t: the whole committee views the same live quote, and
                you see engagement instead of silence.
              </p>
              <p>
                When the conversation turns to price, the AI negotiation assistant activates — in real time, inside the
                room — with your margin floor already in play.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Sales room with multiple viewers online">
              <MiniRow tone="done" tag="ROOM">
                QT-2041 · HR + FI online
              </MiniRow>
              <MiniRow tone="done" tag="VIEWED">
                Quote opened by 2 stakeholders
              </MiniRow>
              <MiniRow tone="done" tag="COMMENT">
                &quot;Can we do 300 units?&quot;
              </MiniRow>
              <MiniRow tone="active" tag="ASSIST">
                Negotiation assistant active
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          id: "dive-4",
          eyebrow: "MARGIN PROTECTION",
          title: "December deals. January margins intact.",
          description: (
            <>
              <p>
                Set configurable margin floors once, and every quote — human-written or AI-drafted — respects them.
                Discount pressure has a hard stop, and it isn&apos;t the rep&apos;s willpower.
              </p>
              <p>
                Pair it with the Customer Context Engine: when a repeat corporate buyer comes back next season, last
                year&apos;s spec, pricing history, and preferences are already loaded. Repeat revenue stops depending on
                someone&apos;s sent folder.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Margin floor applied to a discount">
              <MiniRow tag="REQUEST">Requested discount · −12%</MiniRow>
              <MiniRow tone="warn" tag="FLOOR">
                Margin floor must hold
              </MiniRow>
              <MiniRow tone="done" tag="HELD">
                Quote stays above floor · approved
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
    />
  );
}
