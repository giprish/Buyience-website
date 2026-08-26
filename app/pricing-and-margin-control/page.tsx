import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import MarginPageContent from "./MarginPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Pricing & Margin Control for B2B | Buyience",
  description:
    "Customer-specific pricing, volume tiers, and configurable margin floors — applied to every quote, whether a rep writes it or AI drafts it.",
  path: "/pricing-and-margin-control",
});

export default function PricingAndMarginControlPage() {
  return <MarginPageContent />;
}
