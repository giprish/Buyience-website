"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function InventoryLocationDives() {
  return (
    <section className="challenge" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="container">
        {/* Dive 1: Multi-Location Inventory */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">MULTI-LOCATION INVENTORY</p>
            <h2>One dashboard. Every warehouse.</h2>
            <p className="intro">
              Managing inventory across multiple locations shouldn't need multiple systems. Nova Core tracks stock
              independently per warehouse, with a unified view when you need it.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>Separate on-hand and safety stock per location</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Location-based filtering in the inventory view</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Default location for status calculations</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Multi-country support with currency handling</span>
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
            <div className="mini-ui" aria-label="Per-location stock view">
              <div className="mini-row">
                <span className="tag">LONDON</span>
                <span>Bearing 6204 · 420 available</span>
              </div>
              <div className="mini-row warn">
                <span className="tag">MANCHESTER</span>
                <span>Bearing 6204 · 112 · below safety stock</span>
              </div>
              <div className="mini-row">
                <span className="tag">BERLIN</span>
                <span>Bearing 6204 · 268 available</span>
              </div>
              <div className="mini-row active">
                <span className="tag">UNIFIED</span>
                <span>800 across 3 locations · one view</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 2: Transfer Orders */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">TRANSFER ORDERS</p>
            <h2>Move inventory between locations. Track every step.</h2>
            <p className="intro">
              When one warehouse has excess and another needs stock, transfer orders make it simple.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>Select source and destination locations</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Choose products and quantities to transfer</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Set priority levels for urgent transfers</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Full status tracking on every transfer</span>
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
            <div style={{ width: "100%" }}>
              <div className="tr-flow" aria-label="Transfer order status flow">
                <span className="st ok" style={{ background: "var(--surface-2)", color: "var(--muted)" }}>
                  PENDING
                </span>
                <i>→</i>
                <span className="st transit">IN TRANSIT</span>
                <i>→</i>
                <span className="st ok">COMPLETED</span>
              </div>
              <div className="mini-ui" style={{ margin: "18px auto 0" }}>
                <div className="mini-row active">
                  <span className="tag">TRANSFER</span>
                  <span>London → Manchester · 200 × BE-6204</span>
                </div>
                <div className="mini-row warn">
                  <span className="tag">PRIORITY</span>
                  <span>High — Manchester below safety stock</span>
                </div>
                <div className="mini-row done">
                  <span className="tag">ARRIVED</span>
                  <span>Stock updated at both locations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Supplier Callout */}
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
      </div>
    </section>
  );
}
