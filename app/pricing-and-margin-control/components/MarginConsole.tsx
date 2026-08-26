"use client";

import React, { useMemo, useState } from "react";
import { useCurrency } from "@/components/CurrencyProvider";

const PRODUCT = {
  cost: 2.65,
  list: 4.2,
  floor: 3.22,
  qty: 600,
  unit: "unit",
  targetMargin: 28,
};

const DIAL_CIRCUMFERENCE = 339.29;

export default function MarginConsole() {
  const { format } = useCurrency();
  const [priceCents, setPriceCents] = useState(348);

  const price = priceCents / 100;
  const margin = ((price - PRODUCT.cost) / price) * 100;
  const marginPct = Math.round(margin);
  const belowFloor = price < PRODUCT.floor;
  const belowTarget = margin < PRODUCT.targetMargin;
  const fill = Math.max(0, Math.min(1, (margin - 8) / 42));

  const dialColor = belowFloor ? "#EF7A5A" : belowTarget ? "#FBBF24" : "#22C55E";
  const marginLabel = belowFloor ? "Below floor" : belowTarget ? "Above floor" : "On target";
  const money = (value: number) => format(value, 2);
  const wholeMoney = (value: number) => format(Math.round(value), 0);

  const rangeMin = Math.round(PRODUCT.cost * 100);
  const rangeMax = Math.round(PRODUCT.list * 100);
  const fillPct = ((priceCents - rangeMin) / (rangeMax - rangeMin)) * 100;

  const impact = useMemo(() => {
    const vsList = (PRODUCT.list - price) * PRODUCT.qty;
    return vsList;
  }, [price]);

  return (
    <div className="margin-hero-visual aiq-console-wrap relative flex min-h-0 w-full flex-col">
      <div className="aiq-console flex min-h-0 w-full flex-col">
        <div className="aiq-head">
          <span className="aiq-head-dot" aria-hidden="true" />
          <span className="aiq-head-title">Price Optimization</span>
          <span className="aiq-head-live">● Live margin</span>
        </div>

        <div className="aiq-body">
          <div className="aiq-score">
            <div className="aiq-dial" role="img" aria-label={`Margin ${marginPct} percent`}>
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
                  strokeDashoffset={(DIAL_CIRCUMFERENCE * (1 - fill)).toFixed(1)}
                  transform="rotate(-90 66 66)"
                />
              </svg>
              <div className="aiq-dial-center">
                <div className="aiq-dial-num">{marginPct}%</div>
                <div className="aiq-dial-cap">margin</div>
              </div>
            </div>
            <div className="aiq-score-text">
              <div className="aiq-label">{marginLabel}</div>
              <div className="aiq-note">
                {belowFloor
                  ? `Blocked — ${money(price)} sits under the ${money(PRODUCT.floor)} floor.`
                  : belowTarget
                    ? `Safe to send. Target is ${PRODUCT.targetMargin}% — still room to hold.`
                    : `At or above the ${PRODUCT.targetMargin}% target. Floor remains ${money(PRODUCT.floor)}.`}
              </div>
            </div>
          </div>

          <div className="aiq-price-row">
            <span className="aiq-label">Quoted price</span>
            <span className="aiq-price">
              {money(price)}
              <span className="aiq-price-unit">/{PRODUCT.unit}</span>
            </span>
          </div>
          <input
            type="range"
            className="aiq-range"
            min={rangeMin}
            max={rangeMax}
            step={1}
            value={priceCents}
            aria-label="Quoted price per unit"
            style={{
              background: `linear-gradient(90deg, #6E2CF4 0%, #9B5DE5 ${fillPct}%, #ffffff ${fillPct}%, #ffffff 100%)`,
            }}
            onChange={(e) => setPriceCents(parseInt(e.target.value, 10))}
          />
          <div className="aiq-range-lbls">
            <span>Cost {money(PRODUCT.cost)}</span>
            <span>Floor {money(PRODUCT.floor)}</span>
            <span>List {money(PRODUCT.list)}</span>
          </div>

          <div className="aiq-stats">
            <div className="aiq-stat">
              <div className="aiq-stat-lab">
                Order total · {PRODUCT.qty} {PRODUCT.unit}s
              </div>
              <div className="aiq-stat-val">{wholeMoney(price * PRODUCT.qty)}</div>
            </div>
            <div className={`aiq-stat${belowFloor ? " aiq-stat--margin is-tight" : ""}`}>
              <div className="aiq-stat-lab">Vs list price</div>
              <div className="aiq-stat-val">{wholeMoney(Math.abs(impact))}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="aiq-drag-badge" aria-hidden="true">
        Drag the price — watch the floor
      </div>
    </div>
  );
}
