"use client";

import React, { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useCurrency } from "@/components/CurrencyProvider";

type Mode = "quote" | "order";

const TRANSFER_ITEMS = [
  "Customer email & contact info",
  "Billing & shipping addresses",
  "All products, quantities & variants",
  "Negotiated pricing from the quote",
] as const;

const STAGES = [
  { label: "Pending", meta: "Order created from quote" },
  { label: "Paid", meta: "Stripe · captured" },
  { label: "Processing", meta: "Picked & packed in warehouse" },
  { label: "Shipped", meta: "Tracking BUY-4471 · DHL" },
  { label: "Delivered", meta: "Signed for by A. Reyes" },
] as const;

const STATUS_COLORS = ["#B8860B", "#0EA5E9", "#6E2CF4", "#8B45F0", "#16A34A"] as const;
const STATUS_BG = ["#FEF4E7", "#EAF7FE", "#F4EFFF", "#F1E9FE", "#E9FBF0"] as const;

export default function OrderCommandDemo() {
  const { format } = useCurrency();
  const reduceMotion = useReducedMotion();
  const [mode, setMode] = useState<Mode>("quote");
  const [statusIndex, setStatusIndex] = useState(0);

  const money = format(14640, 0);
  const atEnd = statusIndex >= STAGES.length - 1;
  const isQuote = mode === "quote";

  const floatHint = isQuote
    ? "Convert the quote →"
    : atEnd
      ? "Delivered ✓"
      : "Advance the status →";

  const docTitle = isQuote ? "Quote QT-2418" : "Order #ORD-2418";

  const convert = () => {
    setMode("order");
    setStatusIndex(0);
  };

  const advance = () => {
    if (atEnd) {
      setMode("quote");
      setStatusIndex(0);
      return;
    }
    setStatusIndex((i) => i + 1);
  };

  return (
    <div className="om-hero-visual relative flex min-h-0 w-full flex-col">
      <div className="om-cmd" aria-label="Interactive order command centre demo">
        <div className="om-cmd-head">
          <span className="om-cmd-pulse" aria-hidden="true" />
          <div className="om-cmd-head-text">
            <div className="om-cmd-title">{docTitle}</div>
            <div className="om-cmd-sub">
              Acme Industrial · {money}
            </div>
          </div>
          <span className="om-cmd-live">Live demo</span>
        </div>

        <div className="om-cmd-body">
          {isQuote ? (
            <div className={`om-cmd-panel${reduceMotion ? "" : " om-cmd-panel-in"}`}>
              <div className="om-cmd-accepted">
                <span className="om-cmd-accepted-icon" aria-hidden="true">
                  ✓
                </span>
                <span>Quote QT-2418 accepted by the customer</span>
              </div>
              <div className="om-cmd-transfer-label">Transfers automatically</div>
              <ul className="om-cmd-transfer-list">
                {TRANSFER_ITEMS.map((item) => (
                  <li key={item}>
                    <span className="om-cmd-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button type="button" className="om-cmd-btn" onClick={convert}>
                Convert to order — 1 click →
              </button>
            </div>
          ) : (
            <div className={`om-cmd-panel${reduceMotion ? "" : " om-cmd-panel-in"}`}>
              <div className="om-cmd-order-top">
                <span className="om-cmd-order-id">Order #ORD-2418</span>
                <span
                  className="om-cmd-status-pill"
                  style={{
                    color: STATUS_COLORS[statusIndex],
                    background: STATUS_BG[statusIndex],
                  }}
                >
                  {STAGES[statusIndex].label}
                </span>
              </div>
              <ol className="om-cmd-timeline">
                {STAGES.map((stage, i) => {
                  const done = i < statusIndex;
                  const current = i === statusIndex;
                  const active = i <= statusIndex;
                  const color = STATUS_COLORS[i];
                  return (
                    <li key={stage.label} className="om-cmd-tl-row">
                      <div className="om-cmd-tl-rail" aria-hidden="true">
                        <span
                          className={`om-cmd-tl-dot${current ? " is-current" : ""}${done ? " is-done" : ""}`}
                          style={{
                            background: done || current ? color : "#EDE6FB",
                            boxShadow: current ? `0 0 0 4px ${STATUS_BG[i]}` : undefined,
                          }}
                        >
                          {done ? "✓" : ""}
                        </span>
                        {i < STAGES.length - 1 ? (
                          <span
                            className="om-cmd-tl-line"
                            style={{ background: done ? color : "#EDE6FB" }}
                          />
                        ) : null}
                      </div>
                      <div className="om-cmd-tl-copy">
                        <div
                          className="om-cmd-tl-label"
                          style={{ color: active ? "#1B1033" : "#B4A7D0" }}
                        >
                          {stage.label}
                        </div>
                        <div className="om-cmd-tl-meta">
                          {active
                            ? i === 1
                              ? `Stripe · ${money} captured`
                              : stage.meta
                            : "Awaiting"}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
              <button
                type="button"
                className={`om-cmd-btn${atEnd ? " is-replay" : ""}`}
                onClick={advance}
              >
                {atEnd ? "↺ Replay from quote" : "Advance status →"}
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className={`om-cmd-float${reduceMotion ? " no-motion" : ""}`}
        aria-hidden="true"
      >
        {floatHint}
      </div>
    </div>
  );
}
