"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MachDivesSection() {
  return (
    <section className="challenge" style={{ backgroundColor: "var(--surface)", paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="container">
        {/* Dive 1: API-First Design */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">API-FIRST DESIGN</p>
            <h2>Everything is an API. Everything connects.</h2>
            <p className="intro">
              Every feature in Nova Core is exposed via RESTful APIs. This isn't an afterthought — it's the foundation.
              Your frontend, ERP, CRM, and third-party tools all speak the same language.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>RESTful endpoints</b> — standard HTTP methods (GET, POST, PUT, DELETE)
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Secure authentication</b> — token-based, scoped per tenant
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Tenant isolation</b> — API keys scoped to individual tenants
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Webhooks</b> — 38 real-time event notifications
                </span>
              </li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual"
          >
            <div className="mini-ui" aria-label="Webhook events firing">
              <div className="mini-row done">
                <span className="tag">EVENT</span>
                <span>quote.accepted → CRM notified</span>
              </div>
              <div className="mini-row done">
                <span className="tag">EVENT</span>
                <span>order.created → fulfilment triggered</span>
              </div>
              <div className="mini-row active">
                <span className="tag">EVENT</span>
                <span>inventory.low_stock → PO workflow</span>
              </div>
              <div className="mini-row">
                <span className="tag">EVENT</span>
                <span>payment.received → accounting sync</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 2: Multi-Tenancy */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">MULTI-TENANCY</p>
            <h2>Your data. Its own database.</h2>
            <p className="intro">
              Nova Core is built for true SaaS multi-tenancy. Every tenant gets a dedicated database — your records never
              share tables with anyone else's. No shared data, no cross-tenant access, no compromises.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Database-per-tenant</b> — isolation by architecture, not by a column filter
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Custom branding</b> — white-label with your brand identity
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Tenant-specific API keys</b> — authentication scoped per tenant
                </span>
              </li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="visual text-center"
          >
            <div className="tenants mb-4" aria-label="Each tenant has its own database">
              <div className="tenant">
                <b>Tenant A</b>
                <span className="db">DB · A</span>
                <span className="wall">isolated</span>
              </div>
              <div className="tenant">
                <b>Tenant B</b>
                <span className="db">DB · B</span>
                <span className="wall">isolated</span>
              </div>
              <div className="tenant">
                <b>Tenant C</b>
                <span className="db">DB · C</span>
                <span className="wall">isolated</span>
              </div>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--muted)", margin: 0 }}>
              Dedicated database per tenant — not shared tables with a tenant ID
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
