import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PlatformPageContent from "./PlatformPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Nova Core Platform | API-First B2B Commerce | Buyience",
  description:
    "Nova Core: AI-powered, API-first B2B commerce platform. Multi-warehouse inventory, customer pricing, real-time negotiations. MACH architecture.",
  path: "/platform-overview",
});

export default function PlatformPage() {
  return <PlatformPageContent />;
}
