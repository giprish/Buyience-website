"use client";

import React from "react";
import SplitFeatureSection from "@/components/SplitFeatureSection";

const convertFlow = [
  {
    tag: "ACCEPT",
    text: "Customer accepts quote QT-2418",
    tagColor: "#6E2CF4",
    bg: "#F4EFFF",
    border: "#E1D3FA",
  },
  {
    tag: "1-CLICK",
    text: 'Rep clicks "Convert to order"',
    tagColor: "#0EA5E9",
    bg: "#EAF7FE",
    border: "#BEE6FA",
  },
  {
    tag: "TRANSFER",
    text: "Contact, products & pricing carry over",
    tagColor: "#B8860B",
    bg: "#FEF4E7",
    border: "#F6D9A8",
  },
  {
    tag: "ORDER",
    text: "Order #ORD-2418 created, ready to pay",
    tagColor: "#4E7A00",
    bg: "#F1FDE4",
    border: "#D6EBA8",
  },
] as const;

const returnFlow = [
  { label: "Pending", time: "submitted", state: "done" as const },
  { label: "Approved", time: "2h later", state: "done" as const },
  { label: "Received", time: "day 3", state: "current" as const },
  { label: "Refunded", time: "pending", state: "todo" as const },
];

function FeatureList({ items }: { items: { label: string; detail: string }[] }) {
  return (
    <ul className="mt-4.5 list-none p-0">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-start gap-2.75 py-1.75 text-[15.5px] text-(--ink-soft)"
        >
          <span
            className="mt-0.75 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-(--violet) text-[10px] font-bold text-white"
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

function ConvertFlowVisual() {
  return (
    <div
      aria-label="Quote to order conversion flow"
      className="flex w-full max-w-[440px] flex-col gap-2.5"
    >
      {convertFlow.map((step) => (
        <div
          key={step.tag}
          className="flex items-center gap-3 rounded-[13px] border px-4 py-3.5"
          style={{
            background: step.bg,
            borderColor: step.border,
          }}
        >
          <span
            className="shrink-0 font-mono text-[11px] font-extrabold tracking-[0.04em]"
            style={{ color: step.tagColor }}
          >
            {step.tag}
          </span>
          <span className="min-w-0 flex-1 text-[13.5px] font-medium leading-[1.4] text-(--ink)">
            {step.text}
          </span>
        </div>
      ))}
    </div>
  );
}

function ReturnFlowVisual() {
  return (
    <div
      aria-label="Return RET-118 status flow"
      className="w-full max-w-[440px] rounded-xl border border-(--border) bg-white p-6 shadow-(--shadow-1)"
    >
      <div className="mb-4 text-[13px] font-extrabold text-(--ink)">
        Return RET-118 · status flow
      </div>
      <div className="flex flex-col gap-2.5">
        {returnFlow.map((row) => {
          const isDone = row.state === "done";
          const isCurrent = row.state === "current";

          return (
            <div
              key={row.label}
              className={`flex items-center gap-3 rounded-[12px] px-3.5 py-3 ${
                isCurrent ? "bg-(--violet-tint)" : "bg-(--surface-2)"
              }`}
            >
              <span
                className={`flex size-5.5 shrink-0 items-center justify-center rounded-full text-[11px] font-bold ${
                  isDone
                    ? "bg-(--mint-tint) text-(--mint)"
                    : isCurrent
                      ? "bg-(--violet) text-white"
                      : "border border-(--border) bg-transparent text-transparent"
                }`}
                aria-hidden="true"
              >
                {isDone ? "✓" : isCurrent ? "●" : ""}
              </span>
              <span
                className={`min-w-0 flex-1 text-[13.5px] font-bold ${
                  isDone || isCurrent ? "text-(--ink)" : "text-(--muted)"
                }`}
              >
                {row.label}
              </span>
              <span className="shrink-0 text-[10.5px] font-bold text-(--muted)">
                {row.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function OrderManagementDivesSection({
  purple = false,
}: {
  purple?: boolean;
}) {
  return (
    <SplitFeatureSection
      purple={purple}
      className="pt-15 pb-15"
      rows={[
        {
          eyebrow: "QUOTE CONVERSION",
          title: "From quote accepted to order created — one click",
          description: (
            <>
              <p>
                When a customer accepts a quote, don&apos;t re-enter anything. Nova Core turns the
                quote into an order instantly, with every detail carried across.
              </p>
              <FeatureList
                items={[
                  {
                    label: "Contact & addresses",
                    detail: "customer email, billing and shipping details carry across",
                  },
                  {
                    label: "Products & variants",
                    detail: "every line item, quantity and configuration is preserved",
                  },
                  {
                    label: "Negotiated pricing",
                    detail: "the exact pricing from the accepted quote transfers intact",
                  },
                  {
                    label: "No re-keying",
                    detail: "the order is created instantly, ready for payment",
                  },
                ]}
              />
            </>
          ),
          visual: <ConvertFlowVisual />,
        },
        {
          eyebrow: "RETURNS & REFUNDS",
          title: "Returns happen. Handle them gracefully.",
          description: (
            <>
              <p>
                Process returns without the chaos. Every request moves through a clear status flow,
                from submission to resolution, with refunds and exchanges tracked in one place.
              </p>
              <FeatureList
                items={[
                  {
                    label: "Clear status flow",
                    detail:
                      "pending, approved, rejected, received, refunded — always visible",
                  },
                  {
                    label: "Exchanges handled",
                    detail: "manage replacements alongside refunds in one workflow",
                  },
                  {
                    label: "Full history",
                    detail: "every return tracked against its original order",
                  },
                ]}
              />
            </>
          ),
          visual: <ReturnFlowVisual />,
        },
      ]}
    />
  );
}
