import React from "react";

const STAGES = [
  {
    tag: "SELL",
    items: "B2B Storefront · AI Quote Engine · Digital Sales Room · CPQ",
    color: "#5B6F00",
    dot: "#D6FB4F",
    delay: "0s",
  },
  {
    tag: "TRANSACT",
    items: "Order Management · Net 30/60/90 · Buyer Portal",
    color: "#6E2CF4",
    dot: "#9B5DE5",
    delay: "0.3s",
  },
  {
    tag: "FULFIL",
    items: "Multi-Warehouse Inventory · Real-Time Tracking",
    color: "#0284C7",
    dot: "#0EA5E9",
    delay: "0.6s",
  },
  {
    tag: "SUPPLY",
    items: "Supplier Management · Approval Workflows",
    color: "#15803D",
    dot: "#16A34A",
    delay: "0.9s",
  },
  {
    tag: "CONNECT",
    items: "80+ API Endpoints · 38 Webhooks · WooCommerce",
    color: "#DB2777",
    dot: "#EC4899",
    delay: "1.2s",
  },
];

export default function PlatformHeroMap() {
  return (
    <div className="platform-hero-visual relative flex min-h-0 w-full flex-col">
      <div className="pmap">
        <div className="pmap-card">
          <div className="pmap-head">
            <span className="pmap-logo" aria-hidden="true">
              b
            </span>
            <span className="pmap-title">Nova Core</span>
            <span className="pmap-kicker">One system · every stage</span>
          </div>
          <ul className="pmap-stages">
            {STAGES.map((stage) => (
              <li key={stage.tag} className="pmap-row">
                <span className="pmap-tag" style={{ color: stage.color }}>
                  {stage.tag}
                </span>
                <span className="pmap-items">{stage.items}</span>
                <span
                  className="pmap-dot"
                  style={{ background: stage.dot, animationDelay: stage.delay }}
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
          <div className="pmap-intel">
            <span className="pmap-intel-mark" aria-hidden="true">
              ✦
            </span>
            <span className="pmap-intel-label">Intelligence layer</span>
            <span className="pmap-intel-meta">Win scoring · Context engine</span>
          </div>
        </div>
        <p className="pmap-float">Quote → order → fulfil, in one flow</p>
      </div>
    </div>
  );
}
