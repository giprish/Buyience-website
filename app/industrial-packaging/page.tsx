import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PackagingPageContent from "./PackagingPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Packaging Supplies Quoting Software | CPQ & AI Quotes — Buyience",
  description:
    "Quote custom packaging in minutes — spec-driven CPQ with real BOMs, quantity price breaks, margin floors, and self-service reordering for packaging distributors.",
  path: "/industrial-packaging",
});

export default function PackagingPage() {
  return <PackagingPageContent />;
}
