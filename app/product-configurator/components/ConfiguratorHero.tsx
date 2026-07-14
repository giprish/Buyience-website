"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/Button";

type GroupKey = "mem" | "sto" | "cpu";

export default function ConfiguratorHero() {
  const BASE_PRICE = 1200;

  const [state, setState] = useState<Record<GroupKey, string>>({
    mem: "16",
    sto: "500",
    cpu: "std",
  });

  const [conflictMsg, setConflictMsg] = useState<string | null>(null);

  const prices: Record<string, number> = {
    "mem:16": 0,
    "mem:32": 180,
    "mem:64": 420,
    "sto:500": 0,
    "sto:1000": 140,
    "sto:2000": 320,
    "cpu:std": 0,
    "cpu:pro": 450,
    "cpu:ent": 900,
  };

  const handleSelect = (group: GroupKey, value: string) => {
    setState((prev) => {
      const nextState = { ...prev, [group]: value };

      // Conflict rule: Enterprise processor requires 32 GB+ memory
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

  // Automatically clear conflict message after a few seconds
  useEffect(() => {
    if (conflictMsg) {
      const timer = setTimeout(() => {
        setConflictMsg(null);
      }, 5200);
      return () => clearTimeout(timer);
    }
  }, [conflictMsg]);

  const total = BASE_PRICE + prices[`mem:${state.mem}`] + prices[`sto:${state.sto}`] + prices[`cpu:${state.cpu}`];

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        <div className="flex flex-col text-left">
          <p className="eyebrow">CPQ · PRODUCT CONFIGURATOR</p>
          <h1>
            The B2B product configurator that makes <span className="grad-text">complex products simple.</span>
          </h1>
          <p className="lede">
            Define options once, sell every combination. Real-time pricing, automatic conflict resolution, and
            configured products that flow straight into quotes.
          </p>
          <div className="cta-row">
            <Button variant="primary" size="lg" href="/contact">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" href="/contact">
              Request Demo
            </Button>
          </div>
          <p className="trust-micro">
            14-day trial<span className="dot" aria-hidden="true">·</span>No card required
          </p>
        </div>

        <div>
          <div className="cfg" aria-label="Interactive configurator demo">
            <div className="cfg-head">
              <div>
                <div className="cfg-title">Control Unit X2</div>
                <div className="cfg-sub">Base $1,200 · 3 option groups · 27 valid combinations</div>
              </div>
              <span className="cfg-badge">LIVE DEMO</span>
            </div>

            <div className="grp">
              <div className="grp-h">Memory</div>
              <div className="opts" role="group" aria-label="Memory options">
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.mem === "16"}
                  onClick={() => handleSelect("mem", "16")}
                >
                  16 GB<span className="pr">+$0</span>
                </button>
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.mem === "32"}
                  onClick={() => handleSelect("mem", "32")}
                >
                  32 GB<span className="pr">+$180</span>
                </button>
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.mem === "64"}
                  onClick={() => handleSelect("mem", "64")}
                >
                  64 GB<span className="pr">+$420</span>
                </button>
              </div>
            </div>

            <div className="grp">
              <div className="grp-h">Storage</div>
              <div className="opts" role="group" aria-label="Storage options">
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.sto === "500"}
                  onClick={() => handleSelect("sto", "500")}
                >
                  500 GB<span className="pr">+$0</span>
                </button>
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.sto === "1000"}
                  onClick={() => handleSelect("sto", "1000")}
                >
                  1 TB<span className="pr">+$140</span>
                </button>
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.sto === "2000"}
                  onClick={() => handleSelect("sto", "2000")}
                >
                  2 TB<span className="pr">+$320</span>
                </button>
              </div>
            </div>

            <div className="grp">
              <div className="grp-h">Processor</div>
              <div className="opts" role="group" aria-label="Processor options">
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.cpu === "std"}
                  onClick={() => handleSelect("cpu", "std")}
                >
                  Standard<span className="pr">+$0</span>
                </button>
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.cpu === "pro"}
                  onClick={() => handleSelect("cpu", "pro")}
                >
                  Pro<span className="pr">+$450</span>
                </button>
                <button
                  type="button"
                  className="opt"
                  aria-pressed={state.cpu === "ent"}
                  onClick={() => handleSelect("cpu", "ent")}
                >
                  Enterprise<span className="pr">+$900</span>
                </button>
              </div>
            </div>

            {conflictMsg && (
              <div className="cfg-conflict show" role="status" aria-live="polite">
                ⚠️ {conflictMsg}
              </div>
            )}

            <div className="cfg-foot">
              <div className="cfg-total">
                <span className="lab">CONFIGURED PRICE</span>
                <span className="val" id="cfgTotal">
                  ${total.toLocaleString()}
                </span>
                <span className="m" id="cfgOk">
                  ✓ valid configuration
                </span>
              </div>
              <button className="btn btn-primary" type="button">
                Add to quote
              </button>
            </div>
          </div>
          <p className="cfg-note">This demo is real — try selecting Enterprise with 16 GB.</p>
        </div>
      </div>
    </header>
  );
}
