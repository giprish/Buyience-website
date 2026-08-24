import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SalesRoomPageContent from "./SalesRoomPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Digital Sales Room | Real-Time B2B Negotiations | Buyience",
  description:
    "Close B2B deals faster with real-time negotiations. Shared deal rooms, live pricing updates, chat, and activity tracking. Know when buyers are ready to close.",
  path: "/digital-sales-room",
});

export default function SalesRoomPage() {
  return <SalesRoomPageContent />;
}
