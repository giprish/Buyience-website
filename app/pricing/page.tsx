import React, { Suspense } from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PricingPageContent from "./PricingPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Pricing Plans | B2B Commerce Platform | Buyience Nova Core",
  description:
    "Transparent B2B commerce pricing. Founders launch: $99/mo. AI quoting, multi-warehouse inventory, customer-specific pricing. No hidden fees. Free Trial Available.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <Suspense fallback={null}>
      <PricingPageContent />
    </Suspense>
  );
}
