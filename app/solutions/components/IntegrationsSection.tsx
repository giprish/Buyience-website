"use client";

import React from "react";
import { motion } from "framer-motion";
import StackLogoMarquee from "@/app/components/StackLogoMarquee";
import EyebrowPill from "@/components/EyebrowPill";

export default function IntegrationsSection({ purple = false }: { purple?: boolean }) {
  return (
    <section
      className={`integrations ${purple ? "integrations--purple" : ""}`.trim()}
      style={purple ? { background: "var(--surface)" } : undefined}
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.55, ease: "easeOut" as const }}
        className="container"
      >
        <div className="center-head">
          <EyebrowPill>FITS YOUR STACK</EyebrowPill>
          <h2 className="integrations-title">
            Connects to the tools <span className="grad-text">you already run.</span>
          </h2>
        </div>
        <StackLogoMarquee />
        <p>
          Nova Core connects to the store, email, and shipping tools you already run — with 80+ API
          endpoints and 38 webhook events when you want to go deeper.{" "}
          <a href="/integrations">See integrations →</a>
        </p>
      </motion.div>
    </section>
  );
}
