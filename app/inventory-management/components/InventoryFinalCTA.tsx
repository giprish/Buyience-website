"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function InventoryFinalCTA() {
  return (
    <FinalCTA
      title={
        <>
          Get your inventory{" "}
          <span className="final-card-accent">under control.</span>
        </>
      }
      description="Multi-warehouse tracking, automated reorders, and real-time visibility. Start your free trial today."
    />
  );
}
