"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function PricingFinalCTA() {
  return (
    <FinalCTA
      id="trial"
      title={
        <>
          Start your 14-day{" "}
          <span className="final-card-accent">free trial</span> today.
        </>
      }
      description="Full access to all features. No credit card required."
      primaryAction={{
        label: "Start free trial",
        href: "https://app.buyience.com/register",
        variant: "ghost",
      }}
      secondaryAction={{
        label: "Request demo",
        href: "/request-a-demo",
        variant: "ghost",
      }}
    />
  );
}
