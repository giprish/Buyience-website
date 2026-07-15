"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function SalesRoomFinalCTA() {
  return (
    <FinalCTA
      title={
        <>
          Ready to close deals{" "}
          <span className="final-card-accent">faster?</span>
        </>
      }
      description="Replace email chaos with real-time negotiation — floor protected, AI assisted, fully logged."
    />
  );
}
