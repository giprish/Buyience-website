"use client";

import React, { useState } from "react";
import { useCurrency } from "@/components/CurrencyProvider";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

function FeatureList({ items }: { items: { label: string; detail: string }[] }) {
  return (
    <ul className="mt-4.5 list-none p-0">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-2.75 py-1.75 text-[15.5px] text-(--ink-soft)">
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

function GuardrailsCard() {
  const [automated, setAutomated] = useState(true);
  const minMargin = 18;
  const targetMargin = 28;
  const scaleMax = 40;
  const toPct = (value: number) => `${(value / scaleMax) * 100}%`;

  return (
    <div
      className="w-full max-w-[440px] rounded-xl border border-(--border) bg-white p-6 text-left shadow-(--shadow-1)"
      aria-label="Margin guardrails"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="m-0 text-[15px] font-bold tracking-tight text-[#1B1033]">Margin guardrails</p>
          <p className="m-0 mt-1 text-[12.5px] text-(--muted)">Per deal · Steel Bracket M8</p>
        </div>
        <span className="rounded-full bg-(--mint-tint) px-2.5 py-1 font-mono text-[10.5px] font-bold tracking-[0.06em] text-(--mint)">
          ACTIVE
        </span>
      </div>

      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between text-[12px] font-semibold text-(--muted)">
          <span>Minimum {minMargin}%</span>
          <span className="text-brand-purple">Target {targetMargin}%</span>
        </div>
        <div className="relative h-2 rounded-full bg-[#EFE7FC]">
          <div
            className="absolute inset-y-0 rounded-full bg-linear-to-r from-[#6E2CF4] to-[#9B5DE5]"
            style={{ left: toPct(minMargin), width: toPct(targetMargin - minMargin) }}
          />
          <span
            className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#6E2CF4] shadow-sm"
            style={{ left: toPct(minMargin) }}
            aria-hidden="true"
          />
          <span
            className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#6E2CF4] shadow-sm"
            style={{ left: toPct(targetMargin) }}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-lg bg-(--surface) px-3 py-2.75">
        <span className="text-[13.5px] font-semibold text-[#1B1033]">Automated guardrails</span>
        <button
          type="button"
          role="switch"
          aria-checked={automated}
          aria-label="Automated guardrails"
          onClick={() => setAutomated((v) => !v)}
          className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
            automated ? "bg-[#6E2CF4]" : "bg-[#D9D2EA]"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow-sm transition-transform ${
              automated ? "translate-x-5" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default function MarginDivesSection({ purple = false }: { purple?: boolean }) {
  const { format } = useCurrency();

  return (
    <SplitFeatureSection
      purple={purple}
      className="margin-dives"
      header={{
        eyebrow: "HOW PRICING ACTUALLY HOLDS",
        sparkles: "both",
        title: "Every suggestion respects your margin. By construction.",
        description:
          "Floors and customer rates are not a policy doc. They sit in the pricing path — so a quote, a counter, and an AI suggestion all see the same numbers.",
      }}
      rows={[
        {
          eyebrow: "MARGIN GUARDRAILS",
          title: "Set the floor once. It holds on every deal.",
          description: (
            <>
              <p>
                Configure minimum and target margin per product, customer, or deal. Reps can still negotiate — they just
                cannot slip below the floor without a logged override.
              </p>
              <p>
                The same guardrails sit under AI drafts and live counters in the Sales Room. Fast is only useful if it
                stays inside the number you actually care about.
              </p>
            </>
          ),
          visual: <GuardrailsCard />,
        },
        {
          eyebrow: "CUSTOMER RATES",
          title: "Repeat buyers don't restart from list price.",
          description: (
            <>
              <p>
                Contract rates, tier lists, and last-agreed prices load with the customer. The Quote Engine and the
                storefront resolve against the same book.
              </p>
              <FeatureList
                items={[
                  { label: "Contract & customer lists", detail: "applied automatically at quote time" },
                  { label: "Pricing history", detail: "last quote and last win sit next to the new draft" },
                  { label: "Tier changes", detail: "gold, silver, and net-new buyers resolve different books" },
                ]}
              />
            </>
          ),
          visual: (
            <MiniUi label="Customer-specific price book">
              <MiniRow tone="active" tag="GOLD">
                Meridian · contract {format(3.48, 2)}/unit
              </MiniRow>
              <MiniRow tag="SILVER">Harbor Industrial · tier B</MiniRow>
              <MiniRow tag="NEW">Delta New Co. · list until first win</MiniRow>
              <MiniRow tone="done" tag="HISTORY">
                Last win {format(3.52, 2)} · 24.1% margin
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          eyebrow: "VOLUME BREAKS",
          title: "Quantity moves. Price and margin follow.",
          description: (
            <>
              <p>
                Tiers resolve at the line as quantity changes — in the quote form and in the live room. No &quot;let me
                check the volume sheet and email you back.&quot;
              </p>
              <p>
                You see the margin that remains after the break, so a volume concession is a decision, not a surprise.
              </p>
            </>
          ),
          visual: (
            <MiniUi label="Volume break on a live line">
              <MiniRow tag="QTY 100">{format(4.2, 2)} · 37% margin</MiniRow>
              <MiniRow tag="QTY 400">{format(3.72, 2)} · 29% margin</MiniRow>
              <MiniRow tone="active" tag="QTY 600">
                {format(3.48, 2)} · 24% margin · floor holds
              </MiniRow>
              <MiniRow tone="warn" tag="QTY 900">
                {format(3.1, 2)} would breach the floor
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
    />
  );
}
