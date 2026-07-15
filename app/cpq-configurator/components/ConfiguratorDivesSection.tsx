"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCurrency } from "@/components/CurrencyProvider";

export default function ConfiguratorDivesSection() {
  const { format } = useCurrency();
  return (
    <section className="problem" style={{ paddingBottom: "52px" }}>
      <div className="container">
        {/* Dive 1: Conflict Resolution */}
        <div className="dive reveal in">
          <div>
            <p className="eyebrow">CONFLICT RESOLUTION</p>
            <h2>Invalid configurations, prevented.</h2>
            <p className="intro">
              Some options don't work together — a high-power processor with basic cooling, for example. Nova Core
              catches the conflicts you've defined before they reach a quote.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Define conflicts</b> — mark incompatible combinations in setup
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Real-time detection</b> — the system checks every selection
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Auto-resolution</b> — the conflicting option is auto-deselected
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Clear messages</b> — the customer sees why an option was removed
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
            <div className="mini-ui" aria-label="Conflict caught and resolved">
              <div className="mini-row">
                <span className="tag">SELECT</span>
                <span>Processor: Enterprise</span>
              </div>
              <div className="mini-row warn">
                <span className="tag">CONFLICT</span>
                <span>Incompatible with 16 GB memory</span>
              </div>
              <div className="mini-row active">
                <span className="tag">RESOLVE</span>
                <span>Memory switched to 32 GB</span>
              </div>
              <div className="mini-row done">
                <span className="tag">EXPLAIN</span>
                <span>"Enterprise processor requires 32 GB+ memory"</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dive 2: Dynamic Pricing */}
        <div className="dive reversed reveal in">
          <div>
            <p className="eyebrow">DYNAMIC PRICING</p>
            <h2>Price updates as you configure.</h2>
            <p className="intro">
              No more manual calculations. No spreadsheet lookups. As customers select options, the price updates
              instantly. Every option has its own price — add them up, display the total.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Real-time calculation</b> — price updates instantly on selection
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Option-level pricing</b> — each value has its own price
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Quantity multipliers</b> — prices multiply by selected quantities
                </span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>
                  <b>Cost tracking</b> — cost price per option for margin calculation
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
            <div className="mini-ui" aria-label="Live price derivation">
              <div className="mini-row">
                <span className="tag">BASE</span>
                <span>Control Unit X2</span>
                <span className="mono" style={{ marginLeft: "auto", fontSize: "12px" }}>
                  {format(1200)}
                </span>
              </div>
              <div className="mini-row">
                <span className="tag">+OPT</span>
                <span>Memory 32 GB</span>
                <span className="mono" style={{ marginLeft: "auto", fontSize: "12px" }}>
                  +{format(180)}
                </span>
              </div>
              <div className="mini-row">
                <span className="tag">+OPT</span>
                <span>Processor Pro</span>
                <span className="mono" style={{ marginLeft: "auto", fontSize: "12px" }}>
                  +{format(450)}
                </span>
              </div>
              <div className="mini-row done">
                <span className="tag">TOTAL</span>
                <span>
                  <b>Live total</b>
                </span>
                <span className="mono" style={{ marginLeft: "auto", fontSize: "12px", fontWeight: 700 }}>
                  {format(1830)}
                </span>
              </div>
              <div className="mini-row active">
                <span className="tag">MARGIN</span>
                <span>Cost tracked per option · margin visible</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
