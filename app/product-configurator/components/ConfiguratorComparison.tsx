"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ConfiguratorComparison() {
  const rows = [
    { aspect: "Product count", manual: "Dozens of separate SKUs", nc: "1 product with option groups" },
    { aspect: "Price updates", manual: "Update each SKU individually", nc: "Update option prices once" },
    { aspect: "Inventory", manual: "Track stock per SKU combination", nc: "Track stock per option value" },
    {
      aspect: "Configuration errors",
      manual: "Manual validation, frequent mistakes",
      nc: "Defined conflicts caught automatically",
    },
    { aspect: "Quote speed", manual: "Manual calculation", nc: "Real-time pricing" },
    { aspect: "Sales rep training", manual: "Deep product knowledge required", nc: "Guided configuration with defaults" },
    { aspect: "Customer experience", manual: "Overwhelming product list", nc: "Clear options, real-time pricing" },
    { aspect: "Margin protection", manual: "Unknown cost per configuration", nc: "Cost tracking per option" },
  ];

  return (
    <section className="problem">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE DIFFERENCE</p>
          <h2>Before CPQ vs with Nova Core CPQ.</h2>
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
                <th>Aspect</th>
                <th>Without CPQ</th>
                <th className="nc">With Nova Core CPQ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.aspect}</td>
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
