"use client";

import React, { useEffect, useState } from "react";
import { useCurrency } from "@/components/CurrencyProvider";

type GroupKey = "mem" | "sto" | "cpu";
type Stage = "configure" | "quoted";

const BASE_PRICE = 1200;
const BASE_COST = 744;

const GROUPS: {
  key: GroupKey;
  label: string;
  aria: string;
  options: { value: string; label: string; price: number; cost: number }[];
}[] = [
  {
    key: "mem",
    label: "Memory",
    aria: "Memory options",
    options: [
      { value: "16", label: "16 GB", price: 0, cost: 0 },
      { value: "32", label: "32 GB", price: 180, cost: 90 },
      { value: "64", label: "64 GB", price: 420, cost: 210 },
    ],
  },
  {
    key: "sto",
    label: "Storage",
    aria: "Storage options",
    options: [
      { value: "500", label: "500 GB", price: 0, cost: 0 },
      { value: "1000", label: "1 TB", price: 140, cost: 70 },
      { value: "2000", label: "2 TB", price: 320, cost: 160 },
    ],
  },
  {
    key: "cpu",
    label: "Processor",
    aria: "Processor options",
    options: [
      { value: "std", label: "Standard", price: 0, cost: 0 },
      { value: "pro", label: "Pro", price: 450, cost: 225 },
      { value: "ent", label: "Enterprise", price: 900, cost: 450 },
    ],
  },
];

const PRICE: Record<string, number> = Object.fromEntries(
  GROUPS.flatMap((group) => group.options.map((opt) => [`${group.key}:${opt.value}`, opt.price])),
);
const COST: Record<string, number> = Object.fromEntries(
  GROUPS.flatMap((group) => group.options.map((opt) => [`${group.key}:${opt.value}`, opt.cost])),
);

function labelFor(key: GroupKey, value: string): string {
  return GROUPS.find((g) => g.key === key)?.options.find((o) => o.value === value)?.label ?? value;
}

export default function ConfiguratorDemo() {
  const { format } = useCurrency();

  const [state, setState] = useState<Record<GroupKey, string>>({
    mem: "16",
    sto: "500",
    cpu: "std",
  });
  const [conflictMsg, setConflictMsg] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage>("configure");

  const handleSelect = (group: GroupKey, value: string) => {
    setState((prev) => {
      const nextState = { ...prev, [group]: value };

      if (nextState.cpu === "ent" && nextState.mem === "16") {
        if (group === "cpu") {
          nextState.mem = "32";
          setConflictMsg("16 GB deselected — Enterprise processor requires 32 GB+ memory. Switched to 32 GB.");
        } else {
          nextState.cpu = "pro";
          setConflictMsg("Enterprise processor deselected — it requires 32 GB+ memory. Switched to Pro.");
        }
      } else {
        setConflictMsg(null);
      }

      return nextState;
    });
  };

  const tryEnterpriseWith16 = () => {
    setState((prev) => ({ ...prev, mem: "32", cpu: "ent" }));
    setConflictMsg("16 GB deselected — Enterprise processor requires 32 GB+ memory. Switched to 32 GB.");
  };

  const reset = () => {
    setState({ mem: "16", sto: "500", cpu: "std" });
    setConflictMsg(null);
    setStage("configure");
  };

  useEffect(() => {
    if (!conflictMsg) return;
    const timer = setTimeout(() => setConflictMsg(null), 5200);
    return () => clearTimeout(timer);
  }, [conflictMsg]);

  const extras = PRICE[`mem:${state.mem}`] + PRICE[`sto:${state.sto}`] + PRICE[`cpu:${state.cpu}`];
  const extraCost = COST[`mem:${state.mem}`] + COST[`sto:${state.sto}`] + COST[`cpu:${state.cpu}`];
  const total = BASE_PRICE + extras;
  const cost = BASE_COST + extraCost;
  const marginPct = Math.round(((total - cost) / total) * 100);

  const optionSummary = `${labelFor("mem", state.mem)} · ${labelFor("sto", state.sto)} · ${labelFor("cpu", state.cpu)}`;

  return (
    <div className="cfg-hero-visual relative flex min-h-0 w-full flex-col self-stretch">
      <div className="cfg" aria-label="Interactive configurator demo">
        {stage === "configure" && (
          <button type="button" className="cfg-hint" onClick={tryEnterpriseWith16}>
            Try Enterprise + 16 GB →
          </button>
        )}

        {/* ── Configure stage ── */}
        {stage === "configure" && (
          <>
            <div className="cfg-head">
              <div>
                <div className="cfg-title-row">
                  <span className="cfg-dot" aria-hidden="true" />
                  <span className="cfg-title">Control Unit X2</span>
                </div>
                <div className="cfg-sub">Base {format(BASE_PRICE)} · 3 groups · 27 valid combos</div>
              </div>
              <span className="cfg-live">Live demo</span>
            </div>

            {GROUPS.map((group) => (
              <div className="grp" key={group.key}>
                <div className="grp-h">{group.label}</div>
                <div className="opts" role="group" aria-label={group.aria}>
                  {group.options.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      className="opt"
                      aria-pressed={state[group.key] === opt.value}
                      onClick={() => handleSelect(group.key, opt.value)}
                    >
                      <span>{opt.label}</span>
                      <span className="pr">+{format(opt.price)}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {conflictMsg && (
              <div className="cfg-conflict show" role="status" aria-live="polite">
                ⚠️ {conflictMsg}
              </div>
            )}

            <div className="cfg-price">
              <div className="cfg-price-top">
                <div>
                  <span className="lab">Configured price</span>
                  <span className="val">{format(total)}</span>
                </div>
                <span className="ok">✓ Valid configuration</span>
              </div>
              <div className="cfg-price-meta">Est. margin {marginPct}% · cost tracked per option</div>
            </div>

            <button className="cfg-add" type="button" onClick={() => setStage("quoted")}>
              Add to quote →
            </button>
          </>
        )}

        {/* ── Quoted stage ── */}
        {stage === "quoted" && (
          <>
            <div className="cfg-head">
              <div>
                <div className="cfg-title-row">
                  <span className="cfg-dot" aria-hidden="true" />
                  <span className="cfg-title">Quote Q-2041</span>
                </div>
                <div className="cfg-sub">Control Unit X2 · {optionSummary}</div>
              </div>
              <span className="cfg-live">In quote</span>
            </div>

            <div className="cfg-quote-line">
              <div className="cfg-ql-row">
                <span className="cfg-ql-name">Control Unit X2</span>
                <span className="cfg-ql-qty">Qty: 1</span>
              </div>
              <div className="cfg-ql-opts">{optionSummary}</div>
              <div className="cfg-ql-status">
                <span className="cfg-ql-dot" aria-hidden="true" />
                Configured product — no SKU explosion
              </div>
            </div>

            <div className="cfg-price">
              <div className="cfg-price-top">
                <div>
                  <span className="lab">Quote line total</span>
                  <span className="val">{format(total)}</span>
                </div>
                <span className="ok">✓ Ready to send</span>
              </div>
              <div className="cfg-price-meta">Est. margin {marginPct}% · conflict rules enforced</div>
            </div>

            <button className="cfg-reset" type="button" onClick={reset}>
              ↺ Configure another product
            </button>
          </>
        )}
      </div>
    </div>
  );
}
