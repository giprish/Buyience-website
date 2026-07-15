"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function IntegrationsFinalCTA() {
  return (
    <FinalCTA
      title={
        <>
          Your stack, connected{" "}
          <span className="final-card-accent">in an afternoon.</span>
        </>
      }
      description="Payments, commerce, marketing, shipping, analytics — plus an API for everything else."
      primaryAction={{
        label: "Start free trial",
        href: "https://app.buyience.com/register",
        variant: "ghost",
      }}
      secondaryAction={{
        label: "See Pricing",
        href: "/pricing",
        variant: "ghost",
      }}
    />
  );
}
