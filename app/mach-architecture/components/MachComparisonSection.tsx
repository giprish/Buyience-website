"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MachComparisonSection() {
  const rows = [
    { aspect: "Frontend", manual: "Locked to platform templates", nc: "Any technology (React, Vue, custom)" },
    { aspect: "Integrations", manual: "Limited connectors, custom dev", nc: "API-first, connect anything" },
    { aspect: "Updates", manual: "Major versions, migration required", nc: "Continuous updates, no migration projects" },
    { aspect: "Scaling", manual: "Manual capacity planning", nc: "Auto-scaling infrastructure" },
    { aspect: "Customization", manual: "Code changes, version conflicts", nc: "Configuration-first, no code" },
    { aspect: "Multi-channel", manual: "Separate instances per channel", nc: "One backend, unlimited frontends" },
    { aspect: "Vendor lock-in", manual: "High switching cost", nc: "API-first, data portable" },
    { aspect: "Time to market", manual: "6–12 months implementation", nc: "Weeks to go live" },
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
          <p className="eyebrow">THE DIFFERENCE</p>
          <h2>Traditional platform vs Nova Core.</h2>
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
                <th>Traditional platform</th>
                <th className="nc">Nova Core (MACH)</th>
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
