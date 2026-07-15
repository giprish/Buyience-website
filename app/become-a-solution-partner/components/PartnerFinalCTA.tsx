"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function PartnerFinalCTA() {
  return (
    <FinalCTA
      capsule="Join the Program"
      title={
        <>
          Your clients need modern B2B commerce.{" "}
          <span className="final-card-accent">Be the one who brings it.</span>
        </>
      }
      description="Apply in two minutes — applications go straight to the founding team."
      primaryAction={{
        label: "Apply now",
        variant: "ghost",
        onClick: () => {
          const firstInput = document.getElementById("first");
          if (firstInput) {
            firstInput.scrollIntoView({ behavior: "smooth", block: "center" });
            firstInput.focus();
          }
        },
      }}
      secondaryAction={{
        label: "Explore the platform",
        href: "/platform-overview",
        variant: "ghost",
      }}
      trust={null}
    />
  );
}
