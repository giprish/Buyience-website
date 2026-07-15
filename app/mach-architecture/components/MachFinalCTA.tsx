"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function MachFinalCTA() {
  return (
    <FinalCTA
      title={
        <>
          Ready to build on{" "}
          <span className="final-card-accent">MACH?</span>
        </>
      }
      description="API-first architecture. Database-per-tenant security. Real-time capabilities. Start building your B2B commerce solution today."
      primaryAction={{
        label: "Start For Free",
        href: "https://app.buyience.com/register",
        variant: "ghost",
      }}
    />
  );
}
