import React, { Suspense } from "react";
import type { Metadata } from "next";
import PricingPageContent from "./PricingPageContent";

export const metadata: Metadata = {
  title: "Pricing Plans | B2B Commerce Platform | Buyience Nova Core",
  description:
    "Simple, transparent pricing. Start with a 14-day free trial on any plan — Grow $99/mo, Pro $179/mo, or custom Enterprise. Pay annually and save 17%.",
};

export default function PricingPage() {
  return (
    <Suspense fallback={null}>
      <PricingPageContent />
    </Suspense>
  );
}
