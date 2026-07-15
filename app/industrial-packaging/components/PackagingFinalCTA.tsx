"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function PackagingFinalCTA() {
  return (
    <FinalCTA
      capsule="Get Ahead Of It"
      title={
        <>
          Answer the next RFQ{" "}
          <span className="final-card-accent">first.</span>
        </>
      }
      description="Load your specs into Nova Core and send your first tiered, margin-protected quote this week."
      secondaryAction={{
        label: "Book a demo",
        href: "/request-a-demo",
        variant: "ghost",
      }}
    />
  );
}
