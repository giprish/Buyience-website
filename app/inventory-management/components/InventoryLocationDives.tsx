"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import { MiniRow, MiniUi } from "@/components/MiniUi";
import SplitFeatureSection from "@/components/SplitFeatureSection";

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4.5 list-none p-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.75 py-1.75 text-[15.5px] text-(--ink-soft)">
          <span
            className="mt-0.75 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-(--mint-tint) text-[10px] font-bold text-(--mint)"
            aria-hidden="true"
          >
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InventoryLocationDives() {
  return (
    <SplitFeatureSection
      className="pt-15 pb-15"
      rows={[
        {
          eyebrow: "MULTI-LOCATION INVENTORY",
          title: "One dashboard. Every warehouse.",
          description: (
            <>
              <p>
                Managing inventory across multiple locations shouldn&apos;t need multiple systems. Nova Core tracks stock
                independently per warehouse, with a unified view when you need it.
              </p>
              <FeatureList
                items={[
                  "Separate on-hand and safety stock per location",
                  "Location-based filtering in the inventory view",
                  "Default location for status calculations",
                  "Multi-country support with currency handling",
                ]}
              />
            </>
          ),
          visual: (
            <MiniUi label="Per-location stock view">
              <MiniRow tag="LONDON">Bearing 6204 · 420 available</MiniRow>
              <MiniRow tone="warn" tag="MANCHESTER">
                Bearing 6204 · 112 · below safety stock
              </MiniRow>
              <MiniRow tag="BERLIN">Bearing 6204 · 268 available</MiniRow>
              <MiniRow tone="active" tag="UNIFIED">
                800 across 3 locations · one view
              </MiniRow>
            </MiniUi>
          ),
        },
        {
          eyebrow: "TRANSFER ORDERS",
          title: "Move inventory between locations. Track every step.",
          description: (
            <>
              <p>When one warehouse has excess and another needs stock, transfer orders make it simple.</p>
              <FeatureList
                items={[
                  "Select source and destination locations",
                  "Choose products and quantities to transfer",
                  "Set priority levels for urgent transfers",
                  "Full status tracking on every transfer",
                ]}
              />
            </>
          ),
          visual: (
            <MiniUi label="Transfer order status flow">
              <MiniRow tag="PENDING">London → Manchester · 200 × BE-6204</MiniRow>
              <MiniRow tone="active" tag="TRANSIT">
                High priority — Manchester below safety stock
              </MiniRow>
              <MiniRow tone="done" tag="ARRIVED">
                Stock updated at both locations
              </MiniRow>
            </MiniUi>
          ),
        },
      ]}
      footer={
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="sup-callout reveal in"
        >
          <div>
            <h3>⚡ Suppliers are built in.</h3>
            <p>
              Onboard suppliers with a 5-step workflow — basic information, financial terms, compliance documents,
              logistics, and review — then link them directly to purchase orders. Explored in full on the supplier
              management page.
            </p>
          </div>
          <Button variant="primary" href="/solutions#capabilities">
            Supplier management
          </Button>
        </motion.div>
      }
    />
  );
}
