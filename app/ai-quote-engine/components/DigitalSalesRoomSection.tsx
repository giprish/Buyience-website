"use client";

import React from "react";
import { useCurrency } from "@/components/CurrencyProvider";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

function FeatureList({ items }: { items: { label: string; detail: string }[] }) {
  return (
    <ul className="mt-4.5 list-none p-0">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-start gap-2.75 py-1.75 text-[15.5px] text-(--ink-soft)"
        >
          <span
            className="mt-0.75 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-(--mint-tint) text-[10px] font-bold text-(--mint)"
            aria-hidden="true"
          >
            ✓
          </span>
          <span>
            <b className="text-(--ink)">{item.label}</b> — {item.detail}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function DigitalSalesRoomSection({ purple = false }: { purple?: boolean }) {
  const { format } = useCurrency();

  return (
    <SplitFeatureSection
      purple={purple}
      rows={[
        {
          eyebrow: "DIGITAL SALES ROOM",
          title: (
            <>
              Priced the quote?
              <br />
              Now close it live.
            </>
          ),
          description: (
            <>
              <p>
                When a buyer counters, you don&apos;t drop back into a week of email. The Digital Sales Room is a shared,
                real-time workspace where buyer and seller see the same quote, message each other, and settle on a price
                in minutes.
              </p>
              <FeatureList
                items={[
                  { label: "Real-time chat", detail: "typing indicators, no waiting for email replies" },
                  { label: "Quote always visible", detail: "items, prices and offer status on both sides" },
                  { label: "One-click counters", detail: "propose new prices without leaving the conversation" },
                  { label: "Full audit trail", detail: "every message, offer and agreement logged" },
                ]}
              />
            </>
          ),
          visual: (
            <MiniUi label="Digital sales room negotiation thread">
              <MiniRow tag="QUOTE">Sent · 600 units · {format(2190, 2)}</MiniRow>
              <MiniRow tag="BUYER">Can you do {format(3.35, 2)}/unit?</MiniRow>
              <MiniRow tone="active" tag="AI">
                Counter at {format(3.48, 2)} · 24% margin
              </MiniRow>
              <MiniRow tone="done" tag="CLOSED">
                Deal closed · {format(2088, 0)} · 23.9% margin
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
    />
  );
}
