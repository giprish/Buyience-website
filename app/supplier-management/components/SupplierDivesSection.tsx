"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function SupplierDivesSection() {
  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <div className="container">
        {/* Dive 1: Supplier Dashboard */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">SUPPLIER DASHBOARD</p>
            <h2>Every supplier. One view.</h2>
            <p className="intro">
              See all suppliers at a glance. Sortable columns, status badges, and click-to-edit navigation. Search by
              company name, email, or registration number.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Table display</b> — ID, company info, contact, status, actions
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Status badges</b> — colour-coded at a glance
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Click-to-edit</b> — click any row to open supplier details
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Search &amp; filter</b> — find suppliers by name, email, phone
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
            <div className="mini-ui" aria-label="Supplier dashboard rows">
              <div className="mini-row done">
                <span className="tag">APPROVED</span>
                <span>Nordfab Components GmbH · EUR · Net 30</span>
              </div>
              <div className="mini-row warn">
                <span className="tag">PENDING</span>
                <span>Askern Packaging Ltd · GBP · in review</span>
              </div>
              <div className="mini-row done">
                <span className="tag">APPROVED</span>
                <span>Meiwa Trading Co. · USD · Net 60</span>
              </div>
              <div className="mini-row bad">
                <span className="tag">REJECTED</span>
                <span>Incomplete compliance documents</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 2: Compliance Tracking */}
        <div className="dive reversed reveal in">
          <div>
            <p className="eyebrow">COMPLIANCE TRACKING</p>
            <h2>Track every certificate. See every expiry coming.</h2>
            <p className="intro">
              Upload compliance documents as PDFs. Track issue dates, expiry dates, and verification status. The system
              automatically calculates certificate status based on dates.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>PDF upload</b> — secure storage with file validation
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Date tracking</b> — issue date, expiry date, last verified
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Auto-status</b> — calculated from dates automatically
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
            <p className="list-h" style={{ margin: "0 0 8px" }}>
              CERTIFICATE STATUS TYPES
            </p>
            <div className="chips-row mb-4" aria-label="Certificate statuses">
              <span className="st ok">VALID</span>
              <span className="st pending">PENDING</span>
              <span className="st warn">EXPIRING</span>
              <span className="st bad">EXPIRED</span>
            </div>
            <div className="mini-ui w-full">
              <div className="mini-row done">
                <span className="tag">VALID</span>
                <span>ISO 9001 · expires Mar 2027</span>
              </div>
              <div className="mini-row warn">
                <span className="tag">EXPIRING</span>
                <span>Liability insurance · 21 days left</span>
              </div>
              <div className="mini-row">
                <span className="tag">PENDING</span>
                <span>Import licence · awaiting verification</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 3: Logistics & Delivery */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">LOGISTICS &amp; DELIVERY</p>
            <h2>Configure how suppliers deliver.</h2>
            <p className="intro">
              Define shipping methods, service coverage, and delivery schedules for each supplier. Set up delivery zones
              with specific postal codes and special instructions.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>Shipping methods and transit times per supplier</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Delivery zones with postal-code precision</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Minimum orders and special instructions</span>
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
            <p className="list-h" style={{ margin: "0 0 8px" }}>
              SERVICE COVERAGE
            </p>
            <div className="chips-row mb-4" aria-label="Service coverage types">
              <span className="st info">DOMESTIC</span>
              <span className="st info">INTERNATIONAL</span>
              <span className="st info">CROSS-BORDER</span>
            </div>
            <div className="mini-ui w-full">
              <div className="mini-row">
                <span className="tag">METHOD</span>
                <span>Road freight · 5-day transit</span>
              </div>
              <div className="mini-row">
                <span className="tag">ZONE</span>
                <span>UK mainland + EU · postal-code rules</span>
              </div>
              <div className="mini-row warn">
                <span className="tag">RULES</span>
                <span>Min order £500 · chilled transport required</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Purchase Order Cross-Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="po-callout reveal in"
        >
          <div>
            <h3>⚡ Linked straight to purchase orders.</h3>
            <p>
              Approved suppliers connect directly to purchasing: when stock falls below safety levels, one-click POs
              are generated with the preferred supplier already attached. The full reorder flow lives on the inventory
              management page.
            </p>
          </div>
          <Button variant="primary" href="/inventory-management">
            Inventory management
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
