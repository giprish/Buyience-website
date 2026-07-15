"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function GiftingFinalCTA() {
  return (
    <FinalCTA
      capsule="Get Ahead Of It"
      title={
        <>
          Be ready before the next{" "}
          <span className="final-card-accent">peak season.</span>
        </>
      }
      description="Set up Nova Core now, quote in minutes when the rush arrives."
      secondaryAction={{
        label: "Book a demo",
        href: "/request-a-demo",
        variant: "ghost",
      }}
    />
  );
}
