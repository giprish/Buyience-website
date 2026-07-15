"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function ConfiguratorFinalCTA() {
  return (
    <FinalCTA
      title={
        <>
          Stop managing{" "}
          <span className="final-card-accent">hundreds of SKUs.</span>
        </>
      }
      description="One product. Multiple options. Every combination priced in real time — and the invalid ones never reach a quote."
    />
  );
}
