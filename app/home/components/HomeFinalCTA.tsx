import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function HomeFinalCTA() {
  return (
    <FinalCTA
      capsule="Simplify · Connect · Grow"
      title={
        <>
          Ready to transform your{" "}
          <span className="final-card-accent">B2B commerce?</span>
        </>
      }
      description="Simple, transparent pricing with no hidden fees. Lock in founder pricing before it's gone."
      primaryAction={{
        label: "Start for free →",
        href: "https://app.buyience.com/register",
        variant: "ghost",
      }}
      secondaryAction={{
        label: "See pricing",
        href: "/pricing",
        variant: "ghost",
      }}
    />
  );
}
