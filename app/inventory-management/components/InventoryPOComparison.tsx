"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InventoryPOComparison() {
  const rows = [
    { process: "Check stock levels", manual: "Open spreadsheet, scan rows", nc: "Real-time low stock alerts" },
    {
      process: "Calculate order quantity",
      manual: "Manual math based on thresholds",
      nc: "Auto-calculated from safety stock",
    },
    { process: "Create purchase order", manual: "Copy data to email or another system", nc: "One-click PO linked to supplier" },
    { process: "Update when received", manual: "Manually update the spreadsheet", nc: "One-click receive updates stock" },
  ];

  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">PURCHASE ORDERS</p>
          <h2>Low stock alert → PO → received. Done.</h2>
          <p className="lede">No more spreadsheet calculations. No more "I thought we ordered that."</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="tbl-wrap reveal in"
        >
          <table className="cmp">
            <thead>
              <tr>
                <th>Process</th>
                <th>Manual method</th>
                <th className="nc">With Nova Core</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.process}</td>
                  <td>{row.manual}</td>
                  <td className="nc">{row.nc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
