"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function ContactFinalCTA() {
  return (
    <FinalCTA
      id="trial"
      title={
        <>
          Ready to stop fighting{" "}
          <span className="final-card-accent">your platform?</span>
        </>
      }
      description="Start your 14-day free trial. No credit card required. Full access to all features."
      primaryAction={{
        label: "Start For Free",
        href: "https://app.buyience.com/register",
        variant: "ghost",
      }}
    />
  );
}
