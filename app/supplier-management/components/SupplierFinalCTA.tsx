"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function SupplierFinalCTA() {
  return (
    <FinalCTA
      title={
        <>
          Take control of your{" "}
          <span className="final-card-accent">supplier relationships.</span>
        </>
      }
      description="Structured onboarding. Compliance tracking. Logistics configuration. Everything in one place."
      primaryAction={{
        label: "Start For Free",
        href: "https://app.buyience.com/register",
        variant: "ghost",
      }}
    />
  );
}
