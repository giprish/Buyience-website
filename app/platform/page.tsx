import React from "react";
import type { Metadata } from "next";
import PlatformPageContent from "./PlatformPageContent";

export const metadata: Metadata = {
  title: "Nova Core: AI-Powered B2B Commerce Platform | Buyience",
  description:
    "The B2B platform that works like you do. One system for quoting, inventory, suppliers, and B2B storefronts — AI-powered pricing, real-time sync, live in weeks, not months.",
};

export default function PlatformPage() {
  return <PlatformPageContent />;
}
