import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SolutionPartnerPageContent from "./SolutionPartnerPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Become a Solution Partner | Buyience Partner Program",
  description:
    "Join the Buyience solution partner program. Earn recurring revenue implementing Nova Core for B2B businesses — plus your own implementation fees, direct founder access, and co-marketing.",
  path: "/become-a-solution-partner",
});

export default function BecomeASolutionPartnerPage() {
  return <SolutionPartnerPageContent />;
}
