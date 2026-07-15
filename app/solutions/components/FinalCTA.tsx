"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function SolutionsFinalCTA() {
  return (
    <FinalCTA
      id="trial"
      title={
        <>
          See it on{" "}
          <span className="final-card-accent">your own catalog.</span>
        </>
      }
      description="Set up Nova Core in a trial account, load your products, and send your first AI-drafted quote."
      primaryAction={{
        label: "Start free trial",
        href: "https://app.buyience.com/register",
        variant: "ghost",
      }}
      secondaryAction={{
        label: "Request a demo",
        href: "/request-a-demo",
        variant: "ghost",
      }}
    />
  );
}
