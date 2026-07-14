"use client";

import React, { useState } from "react";
import Button from "@/components/Button";

type WarehouseKey = "all" | "lon" | "man" | "ber";

interface ProductData {
  name: string;
  sku: string;
  safety: number;
  lon: number;
  man: number;
  ber: number;
}

export default function InventoryHero() {
  const [activeWarehouse, setActiveWarehouse] = useState<WarehouseKey>("all");

  const products: Record<string, ProductData> = {
    bracket: { name: "Steel Bracket M8", sku: "BR-M8", safety: 200, lon: 640, man: 310, ber: 280 },
    bolt: { name: "Hex Bolt Kit", sku: "HB-K12", safety: 150, lon: 220, man: 95, ber: 410 },
    bearing: { name: "Bearing 6204", sku: "BE-6204", safety: 300, lon: 420, man: 112, ber: 268 },
    wrap: { name: "Pallet Wrap 500mm", sku: "PW-500", safety: 80, lon: 150, man: 0, ber: 96 },
  };

  const getStatus = (qty: number, safety: number) => {
    if (qty <= 0) return { label: "OUT", className: "st out" };
    if (qty < safety) return { label: "LOW", className: "st low" };
    return { label: "IN STOCK", className: "st ok" };
  };

  // Compute calculated metrics
  const getProductMetrics = (pKey: string) => {
    const p = products[pKey];
    if (activeWarehouse === "all") {
      const totalQty = p.lon + p.man + p.ber;
      const combinedSafety = p.safety * 3;
      return {
        qty: totalQty,
        status: getStatus(totalQty, combinedSafety),
      };
    } else {
      const qty = p[activeWarehouse];
      return {
        qty,
        status: getStatus(qty, p.safety),
      };
    }
  };

  // Find products that are below safety thresholds for the selected active warehouse location (excluding 'all' unified mode)
  const lowStockProducts = Object.keys(products)
    .map((key) => ({ key, ...products[key], ...getProductMetrics(key) }))
    .filter((p) => activeWarehouse !== "all" && p.status.label !== "IN STOCK");

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        <div className="flex flex-col text-left">
          <p className="eyebrow">INVENTORY MANAGEMENT</p>
          <h1>
            B2B inventory management. Every product, every warehouse,{" "}
            <span className="grad-text">one dashboard.</span>
          </h1>
          <p className="lede">
            Track inventory across unlimited locations, generate purchase orders when stock runs low, and transfer
            between warehouses in a few clicks. Real-time updates, zero spreadsheet chaos.
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
          <div className="inv" aria-label="Inventory dashboard — filter by warehouse">
            <div className="inv-head">
              <b>Inventory · Available stock</b>
              <span className="inv-badge">LIVE DEMO</span>
            </div>
            <div className="inv-filters" role="group" aria-label="Filter by warehouse">
              {(["all", "lon", "man", "ber"] as WarehouseKey[]).map((w) => (
                <button
                  key={w}
                  type="button"
                  aria-pressed={activeWarehouse === w}
                  onClick={() => setActiveWarehouse(w)}
                >
                  {w === "all" ? "All locations" : w === "lon" ? "London" : w === "man" ? "Manchester" : "Berlin"}
                </button>
              ))}
            </div>
            <div className="inv-cols" aria-hidden="true">
              <span className="c1">PRODUCT</span>
              <span className="c2">AVAILABLE</span>
              <span className="c3">STATUS</span>
            </div>
            <div id="invList">
              {Object.keys(products).map((pKey) => {
                const p = products[pKey];
                const m = getProductMetrics(pKey);
                return (
                  <div key={pKey} className="inv-row">
                    <div className="p">
                      <b>{p.name}</b>
                      <span>
                        SKU {p.sku} · safety stock {activeWarehouse === "all" ? p.safety * 3 : p.safety}
                      </span>
                    </div>
                    <span className="q">{m.qty.toLocaleString()}</span>
                    <span className="stw">
                      <span className={m.status.className}>{m.status.label}</span>
                    </span>
                  </div>
                );
              })}
            </div>

            {lowStockProducts.length > 0 && (
              <div className="inv-po show" role="status" aria-live="polite">
                <span>
                  ⚠️ {lowStockProducts.map((p) => p.name).join(" & ")} below safety stock — quantities auto-calculated,
                  supplier linked.
                </span>
                <button className="po-btn" type="button">
                  Create PO
                </button>
              </div>
            )}
          </div>
          <p className="inv-note">On-hand, committed &amp; available per location — try the filters ↑</p>
        </div>
      </div>
    </header>
  );
}
