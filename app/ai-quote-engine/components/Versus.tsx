"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function Versus() {
  const manualFeatures = [
    { label: "Quote generation", value: "Spreadsheets and templates, many minutes per quote" },
    { label: "Win visibility", value: "No view of likelihood — you find out after" },
    { label: "Margin control", value: "Gut feel; floors easily breached" },
    { label: "Negotiation", value: "Email chains over days, threads lost" },
    { label: "Decision making", value: "Inconsistent, limited data" },
  ];

  const aiFeatures = [
    { label: "Quote generation", value: "Priced and recommended in seconds" },
    { label: "Win visibility", value: "Win-probability score before you send" },
    { label: "Margin control", value: "Floors enforced in-workflow, with audit trail" },
    { label: "Negotiation", value: "Real-time Digital Sales Room" },
    { label: "Decision making", value: "Human decisions, AI-informed" },
  ];

  return (
    <section>
      <div className="container">
        {/* Section Header */}
        <div className="center-head">
          <p className="eyebrow">HOW IT DIFFERS</p>
          <h2>Manual quoting vs the AI Quote Engine.</h2>
        </div>

        {/* Versus Grid */}
        <div className="vs-grid">
          {/* Manual Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="vs-col manual text-left"
          >
            <h3>Traditional quoting</h3>
            {manualFeatures.map((row) => (
              <div key={row.label} className="vs-row">
                <b>{row.label}</b>
                <span>{row.value}</span>
              </div>
            ))}
          </motion.div>

          {/* AI Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55 }}
            className="vs-col ai text-left"
          >
            <span className="pill">AI QUOTE ENGINE</span>
            <h3>With Nova Core</h3>
            {aiFeatures.map((row) => (
              <div key={row.label} className="vs-row">
                <b>{row.label}</b>
                <span>{row.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CPQ Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="callout text-left"
        >
          <span className="zap" aria-hidden="true">
            ⚡
          </span>
          <div className="txt">
            <b>Enterprise CPQ power, without the enterprise price.</b>
            <p>
              Enterprise CPQ suites like Salesforce, Oracle and SAP typically involve per-user pricing, months of
              implementation, and a dedicated IT team. Nova Core starts from $99/month and goes live in days.
            </p>
          </div>
          <Button variant="ghost" href="#pricing">
            See pricing
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
