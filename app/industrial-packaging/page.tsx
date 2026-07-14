import React from "react";
import type { Metadata } from "next";
import PackagingPageContent from "./PackagingPageContent";

export const metadata: Metadata = {
  title: "Packaging Supplies Quoting Software | CPQ & AI Quotes — Buyience",
  description:
    "Quote custom packaging in minutes — spec-driven CPQ with real BOMs, quantity price breaks, margin floors, and self-service reordering for packaging distributors.",
};

export default function PackagingPage() {
  return <PackagingPageContent />;
}
