"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

/** Default homepage / AI Quote Engine get-started card */
export default function FinalCTASection() {
  return (
    <FinalCTA
      title={
        <>
          Ready to quote faster and{" "}
          <span className="final-card-accent">win more deals?</span>
        </>
      }
      primaryAction={{
        label: "Start For Free",
        href: "https://app.buyience.com/register",
        variant: "primary",
      }}
      description="Price your next quote with AI — scored, margin-protected, and ready in seconds."
    />
  );
}
