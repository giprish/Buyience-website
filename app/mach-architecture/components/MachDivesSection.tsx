"use client";

import React from "react";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

function FeatureList({
  items,
}: {
  items: { label: string; detail: string }[];
}) {
  return (
    <ul className="mt-4.5 list-none p-0">
      {items.map((item) => (
        <li
          key={item.label}
          className="flex items-start gap-2.75 py-1.75 text-[15.5px] text-(--ink-soft)"
        >
          <span
            className="mt-0.75 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-(--mint-tint) text-[10px] font-bold text-(--mint)"
            aria-hidden="true"
          >
            ✓
          </span>
          <span>
            <b className="text-(--ink)">{item.label}</b> — {item.detail}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function MachDivesSection({ purple = false }: { purple?: boolean }) {
  return (
    <SplitFeatureSection
      purple={purple}
      className="pt-15 pb-15"
      rows={[
        {
          eyebrow: "API-FIRST DESIGN",
          title: "Everything is an API. Everything connects.",
          description: (
            <>
              <p>
                Every feature in Nova Core is exposed via RESTful APIs. This isn&apos;t an afterthought — it&apos;s the
                foundation. Your frontend, ERP, CRM, and third-party tools all speak the same language.
              </p>
              <FeatureList
                items={[
                  { label: "RESTful endpoints", detail: "standard HTTP methods (GET, POST, PUT, DELETE)" },
                  { label: "Secure authentication", detail: "token-based, scoped per tenant" },
                  { label: "Tenant isolation", detail: "API keys scoped to individual tenants" },
                  { label: "Webhooks", detail: "38 real-time event notifications" },
                ]}
              />
            </>
          ),
          visual: (
            <MiniUi label="Webhook events firing">
              <MiniRow tone="done" tag="QUOTE">
                quote.accepted → CRM notified
              </MiniRow>
              <MiniRow tone="done" tag="ORDER">
                order.created → fulfilment triggered
              </MiniRow>
              <MiniRow tone="active" tag="STOCK">
                inventory.low_stock → PO workflow
              </MiniRow>
              <MiniRow tag="PAY">payment.received → accounting sync</MiniRow>
            </MiniUi>
          ),
        },
        {
          eyebrow: "MULTI-TENANCY",
          title: "Your data. Its own database.",
          description: (
            <>
              <p>
                Nova Core is built for true SaaS multi-tenancy. Every tenant gets a dedicated database — your records
                never share tables with anyone else&apos;s. No shared data, no cross-tenant access, no compromises.
              </p>
              <FeatureList
                items={[
                  { label: "Database-per-tenant", detail: "isolation by architecture, not by a column filter" },
                  { label: "Custom branding", detail: "white-label with your brand identity" },
                  { label: "Tenant-specific API keys", detail: "authentication scoped per tenant" },
                ]}
              />
            </>
          ),
          visual: (
            <MiniUi label="Each tenant has its own database">
              <MiniRow tone="done" tag="TENANT A">
                Dedicated DB · isolated
              </MiniRow>
              <MiniRow tone="done" tag="TENANT B">
                Dedicated DB · isolated
              </MiniRow>
              <MiniRow tone="done" tag="TENANT C">
                Dedicated DB · isolated
              </MiniRow>
              <MiniRow tone="active" tag="DESIGN">
                Not shared tables with a tenant ID
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
    />
  );
}
