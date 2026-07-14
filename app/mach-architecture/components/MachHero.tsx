"use client";

import React, { useState } from "react";
import Button from "@/components/Button";

type EndpointKey = "products" | "quote" | "hook";

export default function MachHero() {
  const [activeEndpoint, setActiveEndpoint] = useState<EndpointKey>("products");

  const responses: Record<EndpointKey, React.ReactNode> = {
    products: (
      <>
        <span className="c">// 200 OK · sample response</span>
        {"\n"}{"{"}
        {"\n"}  <span className="k">"data"</span>: [{"{"}
        {"\n"}    <span className="k">"id"</span>: <span className="s">"prod_8f2a"</span>,
        {"\n"}    <span className="k">"name"</span>: <span className="s">"Steel Bracket M8"</span>,
        {"\n"}    <span className="k">"variants"</span>: <span className="n">4</span>,
        {"\n"}    <span className="k">"stock"</span>: {"{"} <span className="k">"available"</span>: <span className="n">1230</span>, <span className="k">"committed"</span>: <span className="n">180</span> {"}"},
        {"\n"}    <span className="k">"status"</span>: <span className="s">"active"</span>
        {"\n"}  {"}"}],
        {"\n"}  <span className="k">"meta"</span>: {"{"} <span className="k">"total"</span>: <span className="n">142</span>, <span className="k">"per_page"</span>: <span className="n">25</span> {"}"}
        {"\n"}{"}"}
      </>
    ),
    quote: (
      <>
        <span className="c">// 201 Created · sample response</span>
        {"\n"}{"{"}
        {"\n"}  <span className="k">"id"</span>: <span className="s">"qt_2048"</span>,
        {"\n"}  <span className="k">"customer"</span>: <span className="s">"cus_hartwell"</span>,
        {"\n"}  <span className="k">"items"</span>: <span className="n">6</span>,
        {"\n"}  <span className="k">"ai"</span>: {"{"}
        {"\n"}    <span className="k">"win_probability"</span>: <span className="n">0.81</span>,
        {"\n"}    <span className="k">"recommended_total"</span>: <span className="n">35860</span>,
        {"\n"}    <span className="k">"margin_floor_ok"</span>: <span className="s">"true"</span>
        {"\n"}  {"}"},
        {"\n"}  <span className="k">"status"</span>: <span className="s">"draft"</span>
        {"\n"}{"}"}
      </>
    ),
    hook: (
      <>
        <span className="c">// webhook payload · order.status.updated</span>
        {"\n"}{"{"}
        {"\n"}  <span className="k">"event"</span>: <span className="s">"order.status.updated"</span>,
        {"\n"}  <span className="k">"order_id"</span>: <span className="s">"ord_4478"</span>,
        {"\n"}  <span className="k">"previous"</span>: <span className="s">"paid"</span>,
        {"\n"}  <span className="k">"current"</span>: <span className="s">"shipped"</span>,
        {"\n"}  <span className="k">"tracking"</span>: <span className="s">"active"</span>,
        {"\n"}  <span className="k">"occurred_at"</span>: <span className="s">"2026-07-12T10:22:04Z"</span>
        {"\n"}{"}"}
        {"\n"}<span className="c">// 1 of 38 webhook events</span>
      </>
    ),
  };

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        <div className="flex flex-col text-left">
          <p className="eyebrow">PLATFORM ARCHITECTURE</p>
          <h1>
            Built on MACH architecture. <span className="grad-text">Designed for B2B commerce.</span>
          </h1>
          <p className="lede">
            Nova Core is built on MACH principles — Microservices, API-first, Cloud-native, and Headless architecture.
            Every layer engineered for performance, flexibility, and scalable growth.
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
          <div className="api" aria-label="API explorer — select an endpoint to see a sample response">
            <div className="api-head">
              <b>Nova Core API</b>
              <span className="api-badge">SAMPLE RESPONSES</span>
            </div>
            <div className="api-eps" role="group" aria-label="Endpoints">
              <button
                type="button"
                aria-pressed={activeEndpoint === "products"}
                onClick={() => setActiveEndpoint("products")}
              >
                <span className="mth get">GET</span>/api/v1/products?status=active
              </button>
              <button
                type="button"
                aria-pressed={activeEndpoint === "quote"}
                onClick={() => setActiveEndpoint("quote")}
              >
                <span className="mth post">POST</span>/api/v1/quotes
              </button>
              <button
                type="button"
                aria-pressed={activeEndpoint === "hook"}
                onClick={() => setActiveEndpoint("hook")}
              >
                <span className="mth hook">HOOK</span>order.status.updated
              </button>
            </div>
            <pre className="api-res" id="apiRes" aria-live="polite">
              <code>{responses[activeEndpoint]}</code>
            </pre>
          </div>
          <p className="api-note">80+ REST endpoints · 38 webhook events — try the endpoints ↑</p>
        </div>
      </div>
    </header>
  );
}
