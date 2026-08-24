import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import GiftingPageContent from "./GiftingPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Corporate Gifting Quoting Software | AI Quotes & CPQ — Buyience",
  description:
    "Quote kitted gift boxes in minutes. Nova Core turns gifting RFQs into configured, priced, margin-protected quotes with AI win probability scoring.",
  path: "/corporate-gifting",
});

export default function GiftingPage() {
  return <GiftingPageContent />;
}
