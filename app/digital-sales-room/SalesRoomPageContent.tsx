"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import SalesRoomHero from "./components/SalesRoomHero";
import SalesRoomChallenge from "./components/SalesRoomChallenge";
import SalesRoomSolution from "./components/SalesRoomSolution";
import SalesRoomDivesSection from "./components/SalesRoomDivesSection";
import SalesRoomHowItWorks from "./components/SalesRoomHowItWorks";
import SalesRoomUseCases from "./components/SalesRoomUseCases";
import SalesRoomWhatChanges from "./components/SalesRoomWhatChanges";
import SalesRoomFAQ from "./components/SalesRoomFAQ";

export default function SalesRoomPageContent() {
  return (
    <MarketingLayout
      mainClassName="sales-room-page"
      cta={{
        title: (
          <>
            Ready to close deals{" "}
            <span className="final-card-accent">faster?</span>
          </>
        ),
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
        secondaryAction: {
          label: "See pricing",
          href: "/pricing",
          variant: "ghost",
        },
        description: "Replace email chaos with real-time negotiation — floor protected, AI assisted, fully logged.",
      }}
    >
      <SalesRoomHero />
      <SalesRoomChallenge />
      <SalesRoomSolution />
      <SalesRoomDivesSection purple />
      <SalesRoomHowItWorks />
      <SalesRoomUseCases purple />
      <SalesRoomWhatChanges />
      <SalesRoomFAQ />
    </MarketingLayout>
  );
}
