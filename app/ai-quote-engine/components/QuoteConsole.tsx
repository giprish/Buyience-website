"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useCurrency } from "@/components/CurrencyProvider";

const PRODUCT = {
  cost: 2.65,
  list: 4.2,
  floor: 2.97,
  qty: 600,
  unit: "unit",
};

const CUSTOMERS = [
  {
    name: "Meridian Supply Co.",
    short: "Meridian",
    tierShort: "AU",
    meta: (symbol: string) => `Gold tier · LTV ${symbol}840k · pays on time`,
    mod: 0.07,
    badgeBg: "#FDF3D6",
    badgeColor: "#B8860B",
  },
  {
    name: "Harbor Industrial",
    short: "Harbor",
    tierShort: "AG",
    meta: (symbol: string) => `Silver tier · LTV ${symbol}210k · Net 60, 91% on time`,
    mod: 0,
    badgeBg: "#EEF1F5",
    badgeColor: "#5B6B82",
  },
  {
    name: "Delta New Co.",
    short: "Delta (new)",
    tierShort: "NEW",
    meta: () => "First-time buyer · no purchase history",
    mod: -0.06,
    badgeBg: "#F1FDE4",
    badgeColor: "#4E7A00",
  },
];

const DIAL_CIRCUMFERENCE = 339.29;
const NEGOTIATION_DELAYS = [1500, 1700, 1600, 1500, 1700];

export default function QuoteConsole() {
  const { format, symbol } = useCurrency();
  const [customerIndex, setCustomerIndex] = useState(0);
  const [priceCents, setPriceCents] = useState(348);
  const [stage, setStage] = useState<"quote" | "nego">("quote");
  const [negoStep, setNegoStep] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const customer = CUSTOMERS[customerIndex];
  const price = priceCents / 100;

  const winProbAt = useCallback(
    (value: number) => {
      const t = (value - PRODUCT.floor) / (PRODUCT.list - PRODUCT.floor);
      return Math.max(0.04, Math.min(0.98, 0.95 - 0.62 * t + customer.mod));
    },
    [customer.mod],
  );

  // Expected profit peaks somewhere between floor and list; scan the range for it.
  const optimal = useMemo(() => {
    let best = PRODUCT.floor;
    let bestEv = -1;
    for (let x = PRODUCT.floor; x <= PRODUCT.list + 0.0001; x += 0.01) {
      const ev = winProbAt(x) * (x - PRODUCT.cost);
      if (ev > bestEv) {
        bestEv = ev;
        best = x;
      }
    }
    return Math.round(best * 100) / 100;
  }, [winProbAt]);

  const win = winProbAt(price);
  const winPct = Math.round(win * 100);
  const margin = ((price - PRODUCT.cost) / price) * 100;

  const money = useCallback((value: number) => format(value, 2), [format]);
  const wholeMoney = useCallback((value: number) => format(Math.round(value), 0), [format]);

  const dialColor =
    win >= 0.7 ? "#22C55E" : win >= 0.45 ? "#84CC16" : win >= 0.28 ? "#FBBF24" : "#EF7A5A";
  const winLabel =
    win >= 0.7
      ? "Strong chance to win"
      : win >= 0.45
        ? "Competitive"
        : win >= 0.28
          ? "Uphill — but possible"
          : "Long shot at this price";
  const winNote =
    Math.abs(price - optimal) < 0.04
      ? `You're at the AI sweet spot. Best balance of win odds and margin for ${customer.short}.`
      : price > optimal
        ? `Priced above the sweet spot — margin is safe but win odds drop. AI suggests ${money(optimal)}.`
        : `Below the sweet spot — you'd likely win, but you're giving up margin. AI suggests ${money(optimal)}.`;

  const marginTight = margin < 22;
  const marginLabel = margin >= 30 ? "Strong" : marginTight ? "Below target" : "Healthy";

  const messages = [
    { kind: "sys", text: `Quote #Q-4471 sent to ${customer.name} · ${PRODUCT.qty} ${PRODUCT.unit}s` },
    {
      kind: "buyer",
      text: `Thanks. Can you do ${money(PRODUCT.cost * 1.16)}/${PRODUCT.unit} at this volume? We're comparing three vendors.`,
    },
    {
      kind: "ai",
      text: `Counter at ${money(optimal)} — protects ${(((optimal - PRODUCT.cost) / optimal) * 100).toFixed(0)}% margin with a ${Math.round(winProbAt(optimal) * 100)}% close probability. Add Net 60 as the sweetener.`,
    },
    { kind: "you", text: `Countered at ${money(optimal)}/${PRODUCT.unit}, Net 60 terms included.` },
    { kind: "buyer", text: "Works for us. Sending the PO over now." },
    {
      kind: "success",
      text: `Deal closed — ${wholeMoney(optimal * PRODUCT.qty)} order · ${(((optimal - PRODUCT.cost) / optimal) * 100).toFixed(1)}% margin secured.`,
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

  return (
    <div className="aiq-console-wrap">
      <div className="aiq-console">
        <div className="aiq-head">
          <span className="aiq-head-dot" aria-hidden="true" />
          <span className="aiq-head-title">AI Quote Engine</span>
          <span className="aiq-head-live">● Live scoring</span>
        </div>

        {stage === "quote" ? (
          <div className="aiq-body">
            <div className="aiq-label">Customer</div>
            <div className="aiq-tabs">
              {CUSTOMERS.map((c, i) => (
                <button
                  key={c.short}
                  type="button"
                  className={`aiq-tab${i === customerIndex ? " is-active" : ""}`}
                  onClick={() => setCustomerIndex(i)}
                >
                  {c.short}
                </button>
              ))}
            </div>

            <div className="aiq-customer">
              <span
                className="aiq-customer-badge"
                style={{ background: customer.badgeBg, color: customer.badgeColor }}
              >
                {customer.tierShort}
              </span>
              <div className="aiq-customer-text">
                <div className="aiq-customer-name">{customer.name}</div>
                <div className="aiq-customer-meta">{customer.meta(symbol)}</div>
              </div>
            </div>

            <div className="aiq-score">
              <div className="aiq-dial" role="img" aria-label={`Win probability ${winPct} percent`}>
                <svg width="132" height="132" viewBox="0 0 132 132" aria-hidden="true">
                  <circle cx="66" cy="66" r="54" fill="none" stroke="#EFE7FC" strokeWidth="12" />
                  <circle
                    className="aiq-dial-prog"
                    cx="66"
                    cy="66"
                    r="54"
                    fill="none"
                    stroke={dialColor}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={DIAL_CIRCUMFERENCE}
                    strokeDashoffset={(DIAL_CIRCUMFERENCE * (1 - win)).toFixed(1)}
                    transform="rotate(-90 66 66)"
                  />
                </svg>
                <div className="aiq-dial-center">
                  <div className="aiq-dial-num">{winPct}%</div>
                  <div className="aiq-dial-cap">win prob</div>
                </div>
              </div>
              <div className="aiq-score-text">
                <div className="aiq-label">{winLabel}</div>
                <div className="aiq-note">{winNote}</div>
              </div>
            </div>

            <div className="aiq-price-row">
              <span className="aiq-label">Your quoted price</span>
              <span className="aiq-price">
                {money(price)}
                <span className="aiq-price-unit">/{PRODUCT.unit}</span>
              </span>
            </div>
            <input
              type="range"
              className="aiq-range"
              min={Math.round(PRODUCT.floor * 100)}
              max={Math.round(PRODUCT.list * 100)}
              step={1}
              value={priceCents}
              aria-label="Quoted price per unit"
              style={{
                background: `linear-gradient(90deg, #6E2CF4 0%, #9B5DE5 ${((priceCents - Math.round(PRODUCT.floor * 100)) / (Math.round(PRODUCT.list * 100) - Math.round(PRODUCT.floor * 100))) * 100}%, #ffffff ${((priceCents - Math.round(PRODUCT.floor * 100)) / (Math.round(PRODUCT.list * 100) - Math.round(PRODUCT.floor * 100))) * 100}%, #ffffff 100%)`,
              }}
              onChange={(e) => setPriceCents(parseInt(e.target.value, 10))}
            />
            <div className="aiq-range-lbls">
              <span>Floor {money(PRODUCT.floor)}</span>
              <span>List {money(PRODUCT.list)}</span>
            </div>

            <div className="aiq-tip">
              <span className="aiq-tip-icon" aria-hidden="true">
                ✦
              </span>
              <span className="aiq-tip-text">
                AI optimal price <b>{money(optimal)}</b> — best expected profit.
              </span>
              <button
                type="button"
                className="aiq-tip-btn"
                onClick={() => setPriceCents(Math.round(optimal * 100))}
              >
                Use
              </button>
            </div>

            <div className="aiq-stats">
              <div className="aiq-stat">
                <div className="aiq-stat-lab">
                  Order total · {PRODUCT.qty} {PRODUCT.unit}s
                </div>
                <div className="aiq-stat-val">{wholeMoney(price * PRODUCT.qty)}</div>
              </div>
              <div className={`aiq-stat aiq-stat--margin${marginTight ? " is-tight" : ""}`}>
                <div className="aiq-stat-lab">Margin · {marginLabel}</div>
                <div className="aiq-stat-val">{margin.toFixed(1)}%</div>
              </div>
            </div>

            <button type="button" className="aiq-send" onClick={sendQuote}>
              Send quote → open Sales Room
            </button>
          </div>
        ) : (
          <div className="aiq-body aiq-nego">
            <div className="aiq-nego-head">
              <span className="aiq-nego-title">Digital Sales Room</span>
              <span className="aiq-nego-cust">{customer.name}</span>
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
              ↺ Price another quote
            </button>
          </div>
        )}
      </div>

      <div className="aiq-drag-badge" aria-hidden="true">
        Drag the price — watch win %
      </div>
    </div>
  );
}
