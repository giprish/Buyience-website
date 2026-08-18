"use client";

import React from "react";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

export default function PackagingDivesSection({ purple = false }: { purple?: boolean }) {
  return (
    <SplitFeatureSection
      purple={purple}
      className="pt-0"
      rows={[
        {
          id: "dive-1",
          eyebrow: "AI QUOTE ENGINE",
          title: "All the quantity breaks. One pass.",
          description: (
            <>
              <p>
                When an RFQ lands, four agents go to work: an Orchestrator coordinates the job, a Research agent pulls the
                customer&apos;s history and your catalog, a Pricing agent builds the numbers at each quantity break against
                your rules, and a Writer drafts the quote document.
              </p>
              <p>
                The draft arrives with a win probability score across 11+ factors — deal, relationship, and pricing
                position — so you know whether you&apos;re competitive before procurement tells you. Review, adjust, send.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Agent pipeline pricing three quantity tiers">
              <MiniRow tone="done" tag="ORCHESTRATOR">
                Job accepted · QT-3117
              </MiniRow>
              <MiniRow tone="done" tag="RESEARCH">
                Buyer history · 6 prior orders
              </MiniRow>
              <MiniRow tone="done" tag="PRICING">
                3 tiers priced · floors OK
              </MiniRow>
              <MiniRow tone="active" tag="WRITER">
                Drafting quote document…
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          id: "dive-2",
          eyebrow: "SPEC-DRIVEN CPQ",
          title: "The plate charge that never gets forgotten.",
          description: (
            <>
              <p>
                A custom-printed box isn&apos;t a SKU — it&apos;s a specification: dimensions, board grade, flute, print
                colours, tooling, packing. Nova Core&apos;s configurator captures the spec and generates a real bill of
                materials, so pricing is derived from components, not retyped from memory.
              </p>
              <p>
                Change the board grade or add a print colour, and every quantity tier reprices. One-time charges like
                plates and cutting dies live in the BOM — which means they never silently disappear from a requote.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Spec configurator generating a bill of materials">
              <MiniRow tag="SPEC">310×230×105 · E-flute · Kraft</MiniRow>
              <MiniRow tag="BOM-01">Board · per-unit</MiniRow>
              <MiniRow tag="BOM-02">Print · 1 colour · per-unit</MiniRow>
              <MiniRow tag="BOM-03">Cutting die · one-time</MiniRow>
              <MiniRow tone="done" tag="PRICED">
                3 tiers derived from spec
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          id: "dive-3",
          eyebrow: "MARGIN FLOORS",
          title: "A few points is the whole quarter. Protect them.",
          description: (
            <>
              <p>
                Packaging margins don&apos;t forgive improvisation. Set configurable floors once, and every quote respects
                them at every quantity break — whether it was drafted by AI or written by a rep at 6pm trying to close the
                month.
              </p>
              <p>
                When a deal moves to negotiation, the Digital Sales Room&apos;s AI assistant works the conversation with
                your floor already in play — so &quot;can you sharpen the 10k price?&quot; has a real answer, not a hopeful
                one.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Margin floor holding across quantity tiers">
              <MiniRow tag="REQUEST">Discount on 10,000-unit tier · −9%</MiniRow>
              <MiniRow tone="warn" tag="FLOOR">
                Margin floor must hold at every tier
              </MiniRow>
              <MiniRow tone="done" tag="HELD">
                All tiers above floor · approved
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          id: "dive-4",
          eyebrow: "REPLENISHMENT",
          title: "Your best customers shouldn't have to email you.",
          description: (
            <>
              <p>
                In packaging, the account you already won is the revenue that matters — the same boxes, films, and fillers,
                ordered again and again. Every reorder that needs an email chain is friction, and friction is how a
                competitor with a portal takes the account.
              </p>
              <p>
                Nova Core&apos;s customer portal gives regulars self-service reordering against their saved specs and their
                pricing, with payment terms (Net 30/60/90) and real-time order tracking. The Customer Context Engine keeps
                their history loaded, so a requote starts from their reality, not a blank form.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Customer portal reorder">
              <MiniRow tone="done" tag="NET 30">
                Customer portal · Reorder
              </MiniRow>
              <MiniRow tag="SAVED">Mailer 310×230×105 · Kraft · 1c</MiniRow>
              <MiniRow tag="QTY">5,000 units · contract pricing</MiniRow>
              <MiniRow tone="active" tag="TRACK">
                Order placed · in fulfilment
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
    />
  );
}
