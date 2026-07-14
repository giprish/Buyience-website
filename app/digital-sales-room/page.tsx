import React from "react";
import type { Metadata } from "next";
import SalesRoomPageContent from "./SalesRoomPageContent";

export const metadata: Metadata = {
  title: "Digital Sales Room | Real-Time B2B Negotiations | Buyience",
  description:
    "Close B2B deals faster with real-time negotiation. One shared room, live counter-offers, an AI copilot grounded in your margin floor, and a full audit trail.",
};

export default function SalesRoomPage() {
  return <SalesRoomPageContent />;
}
