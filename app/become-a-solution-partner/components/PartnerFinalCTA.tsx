"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function PartnerFinalCTA() {
  return (
    <section className="final">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container reveal in"
      >
        <p className="eyebrow">JOIN THE PROGRAM</p>
        <h2>
          Your clients need modern B2B commerce.
          <br />
          Be the one who brings it.
        </h2>
        <p>Apply in two minutes — applications go straight to the founding team.</p>
        <div className="cta-row" style={{ justifyContent: "center" }}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const firstInput = document.getElementById("first");
              if (firstInput) {
                firstInput.scrollIntoView({ behavior: "smooth", block: "center" });
                firstInput.focus();
              }
            }}
          >
            Apply now
          </Button>
          <Button variant="ghost" size="lg" href="/platform">
            Explore the platform
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
