"use client";

import React from "react";
import { useCurrency } from "@/components/CurrencyProvider";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

function FeatureList({
  items,
}: {
  items: { label: string; detail: string }[];
}) {
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

export default function ConfiguratorDivesSection({ purple = false }: { purple?: boolean }) {
  const { format } = useCurrency();

  return (
    <SplitFeatureSection
      purple={purple}
      rows={[
        {
          eyebrow: "CONFLICT RESOLUTION",
          title: "Invalid configurations, prevented.",
          description: (
            <>
              <p>
                Some options don&apos;t work together — a high-power processor with basic cooling, for example. Nova
                Core catches the conflicts you&apos;ve defined before they reach a quote.
              </p>
              <FeatureList
                items={[
                  { label: "Define conflicts", detail: "mark incompatible combinations in setup" },
                  { label: "Real-time detection", detail: "the system checks every selection" },
                  { label: "Auto-resolution", detail: "the conflicting option is auto-deselected" },
                  { label: "Clear messages", detail: "the customer sees why an option was removed" },
                ]}
              />
            </>
          ),
          visual: (
            <MiniUi label="Conflict caught and resolved">
              <MiniRow tag="SELECT">Processor: Enterprise</MiniRow>
              <MiniRow tone="warn" tag="CONFLICT">
                Incompatible with 16 GB memory
              </MiniRow>
              <MiniRow tone="active" tag="RESOLVE">
                Memory switched to 32 GB
              </MiniRow>
              <MiniRow tone="done" tag="EXPLAIN">
                &quot;Enterprise processor requires 32 GB+ memory&quot;
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          eyebrow: "DYNAMIC PRICING",
          title: "Price updates as you configure.",
          description: (
            <>
              <p>
                No more manual calculations. No spreadsheet lookups. As customers select options, the price updates
                instantly. Every option has its own price — add them up, display the total.
              </p>
              <FeatureList
                items={[
                  { label: "Real-time calculation", detail: "price updates instantly on selection" },
                  { label: "Option-level pricing", detail: "each value has its own price" },
                  { label: "Quantity multipliers", detail: "prices multiply by selected quantities" },
                  { label: "Cost tracking", detail: "cost price per option for margin calculation" },
                ]}
              />
            </>
          ),
          visual: (
            <MiniUi label="Live price derivation">
              <MiniRow
                tag="BASE"
                trailing={<span className="shrink-0 font-mono text-[12px]">{format(1200)}</span>}
              >
                Control Unit X2
              </MiniRow>
              <MiniRow
                tag="+OPT"
                trailing={<span className="shrink-0 font-mono text-[12px]">+{format(180)}</span>}
              >
                Memory 32 GB
              </MiniRow>
              <MiniRow
                tag="+OPT"
                trailing={<span className="shrink-0 font-mono text-[12px]">+{format(450)}</span>}
              >
                Processor Pro
              </MiniRow>
              <MiniRow
                tone="done"
                tag="TOTAL"
                trailing={<span className="shrink-0 font-mono text-[12px] font-bold">{format(1830)}</span>}
              >
                <b>Live total</b>
              </MiniRow>
              <MiniRow tone="active" tag="MARGIN">
                Cost tracked per option · margin visible
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
    />
  );
}
