"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useCurrency } from "@/components/CurrencyProvider";

const PRODUCTS = [
  { name: "Industrial Bearing — SKF 6205-2RS", sku: "SKF-6205", list: 4.2, cost: 2.65, unit: "unit" },
  { name: 'Hydraulic Hose — 1/2" R2AT', sku: "HYD-R2AT", list: 9.8, cost: 6.1, unit: "m" },
  { name: "Grade 8.8 Bolt — M8×40", sku: "FST-M8", list: 0.62, cost: 0.34, unit: "unit" },
];

const TIERS: [number, number][] = [
  [50, 0],
  [200, 0.05],
  [500, 0.09],
  [1000, 0.13],
  [Infinity, 0.16],
];

const NEGOTIATION_DELAYS = [1500, 1700, 1600, 1500, 1700];

function volumeDiscount(qty: number) {
  for (const [max, pct] of TIERS) {
    if (qty < max) return pct;
  }
  return 0.16;
}

export default function HomeQuoteDemo() {
  const { format } = useCurrency();
  const [productIndex, setProductIndex] = useState(0);
  const [qty, setQty] = useState(250);
  const [stage, setStage] = useState<"quote" | "nego">("quote");
  const [negoStep, setNegoStep] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const product = PRODUCTS[productIndex];
  const tierPct = volumeDiscount(qty);
  const unit = product.list * (1 - tierPct);
  const margin = ((unit - product.cost) / unit) * 100;
  const total = unit * qty;
  const floor = product.cost * 1.22;
  const floorMargin = ((floor - product.cost) / floor) * 100;
  const marginTight = margin < 24;
  const marginLabel = margin >= 34 ? "Strong" : marginTight ? "Tight" : "Healthy";

  const money = useCallback((value: number) => format(value, 2), [format]);
  const wholeMoney = useCallback((value: number) => format(Math.round(value), 0), [format]);

  const insight =
    margin >= 34
      ? `Strong position at ${money(unit)}/${product.unit}. Competitor floor ≈ ${money(product.cost * 1.35)} — hold firm, no discount needed.`
      : `AI-optimized to ${money(unit)}/${product.unit} with a ${Math.round(tierPct * 100)}% volume break. Room down to ${money(floor)} if the buyer pushes — still ${floorMargin.toFixed(0)}% margin.`;

  const messages = [
    { kind: "sys", text: `Quote #Q-4471 sent to Meridian Supply Co. · ${qty} ${product.unit}s` },
    {
      kind: "buyer",
      text: `Appreciate it. Can you do ${money(product.cost * 1.16)}/${product.unit} at this volume? We're comparing three vendors.`,
    },
    {
      kind: "ai",
      text: `Counter at ${money(floor)} — protects ${floorMargin.toFixed(0)}% margin with a 91% close probability. Add Net 60 as the sweetener.`,
    },
    { kind: "you", text: `Countered at ${money(floor)}/${product.unit}, Net 60 terms included.` },
    { kind: "buyer", text: "Works for us. Sending the PO over now." },
    {
      kind: "success",
      text: `Deal closed — ${wholeMoney(floor * qty)} order · ${(((floor - product.cost) / floor) * 100).toFixed(1)}% margin secured.`,
    },
  ].slice(0, negoStep);

  function sendQuote() {
    if (stage === "nego") return;
    setStage("nego");
    setNegoStep(1);
    let elapsed = 0;
    NEGOTIATION_DELAYS.forEach((delay, i) => {
      elapsed += delay;
      timers.current.push(setTimeout(() => setNegoStep(i + 2), elapsed));
    });
  }

  function reset() {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setStage("quote");
    setNegoStep(0);
  }

  const fillPct = ((qty - 10) / 990) * 100;
  const fillTrack = `linear-gradient(90deg, #6E2CF4 0%, #9B5DE5 ${fillPct}%, #ffffff ${fillPct}%, #ffffff 100%)`;

  return (
    <div className="home-hero-visual relative flex min-h-0 w-full flex-col">
      <div className="aiq-console flex min-h-0 flex-1 flex-col">
        <div className="aiq-head">
          <span className="aiq-head-dot" aria-hidden="true" />
          <span className="aiq-head-title">AI Quote Engine</span>
          <span className="aiq-head-live">● Live</span>
        </div>

        {stage === "quote" ? (
          <div className="aiq-body flex min-h-0 flex-1 flex-col justify-start gap-4 p-5 [@media(max-height:900px)]:gap-3 [@media(max-height:900px)]:p-4">
            <div className="flex flex-col gap-2">
              <div className="aiq-label">Select product</div>
              <div className="aiq-tabs">
                {PRODUCTS.map((p, i) => (
                  <button
                    key={p.sku}
                    type="button"
                    className={`aiq-tab${i === productIndex ? " is-active" : ""}`}
                    onClick={() => setProductIndex(i)}
                  >
                    {p.sku}
                  </button>
                ))}
              </div>
              <div className="aiq-customer-name">{product.name}</div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="aiq-price-row">
                <span className="aiq-label">Quantity</span>
                <span className="aiq-price">
                  {qty.toLocaleString()}
                  <span className="aiq-price-unit"> {product.unit}s</span>
                </span>
              </div>
              <input
                type="range"
                className="aiq-range"
                min={10}
                max={1000}
                step={10}
                value={qty}
                aria-label="Order quantity"
                style={{ background: fillTrack }}
                onChange={(e) => setQty(parseInt(e.target.value, 10))}
              />
              <div className="aiq-range-lbls">
                <span>10</span>
                <span>1,000</span>
              </div>
            </div>

            <div className="home-demo-prices">
              <div className="aiq-stat">
                <div className="aiq-stat-lab">List price</div>
                <div className="aiq-stat-val home-demo-list">{money(product.list)}</div>
              </div>
              <div className="aiq-stat">
                <div className="aiq-stat-lab">Volume discount</div>
                <div className="aiq-stat-val">{Math.round(tierPct * 100)}%</div>
              </div>
            </div>

            <div className="aiq-tip">
              <span className="aiq-tip-icon" aria-hidden="true">
                ✦
              </span>
              <span className="aiq-tip-text">{insight}</span>
            </div>

            <div className="aiq-stats">
              <div className="aiq-stat">
                <div className="aiq-stat-lab">Order total</div>
                <div className="aiq-stat-val">{wholeMoney(total)}</div>
              </div>
              <div className={`aiq-stat aiq-stat--margin${marginTight ? " is-tight" : ""}`}>
                <div className="aiq-stat-lab">Margin · {marginLabel}</div>
                <div className="aiq-stat-val">{margin.toFixed(1)}%</div>
              </div>
            </div>

            <button type="button" className="aiq-send" onClick={sendQuote}>
              Send quote to negotiation room →
            </button>
          </div>
        ) : (
          <div className="aiq-body aiq-nego flex min-h-0 flex-1 flex-col">
            <div className="aiq-nego-head">
              <span className="aiq-nego-title">Digital Sales Room</span>
              <span className="aiq-nego-cust">Meridian Supply Co.</span>
            </div>
            <div className="aiq-thread">
              {messages.map((m, i) => (
                <div key={i} className={`aiq-msg aiq-msg--${m.kind}`}>
                  {m.kind === "buyer" && <div className="aiq-msg-from">Buyer</div>}
                  {m.kind === "ai" && <div className="aiq-msg-from">✦ AI recommendation</div>}
                  {m.kind === "you" && <div className="aiq-msg-from">You</div>}
                  {m.kind === "success" && <span className="aiq-msg-check">✓</span>}
                  {m.text}
                </div>
              ))}
            </div>
            <button type="button" className="aiq-reset" onClick={reset}>
              ↺ Run another quote
            </button>
          </div>
        )}
      </div>
      <div className="aiq-drag-badge [@media(max-height:900px)]:hidden" aria-hidden="true">
        Try it — drag the slider
      </div>
    </div>
  );
}
