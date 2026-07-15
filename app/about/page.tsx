import React from "react";
import type { Metadata } from "next";
import SimpleMarketingPage from "@/components/SimpleMarketingPage";

export const metadata: Metadata = {
  title: "About Us | B2B Commerce Platform Built for Wholesalers",
  description:
    "Everything you need to sell to business customers, all in one platform. Built for wholesalers, distributors, and manufacturers.",
};

export default function AboutPage() {
  return (
    <SimpleMarketingPage
      capsule="Company"
      title="B2B commerce built for how wholesale actually works"
      description="Buyience builds Nova Core — an AI-powered B2B commerce platform for distributors, wholesalers, and manufacturers who need real pricing, real inventory, and real negotiations."
      primaryCta={{ label: "Request a Demo", href: "/request-a-demo" }}
      secondaryCta={{ label: "See Platform", href: "/platform-overview" }}
    >
      <div className="space-y-6 text-[16px] leading-relaxed">
        <p>
          Traditional commerce platforms were built for simple catalog shopping. B2B is different: customer-specific
          pricing, quote cycles, multi-warehouse stock, payment terms, and buying committees. Nova Core is purpose-built
          for that complexity — without enterprise complexity.
        </p>
        <p>
          We combine an AI Quote Engine, Digital Sales Rooms, CPQ, inventory, suppliers, and storefronts on a MACH
          architecture so you can launch fast and scale without replatforming every few years.
        </p>
        <p>
          Company No: 14871419. Registered in England and Wales.
        </p>
      </div>
    </SimpleMarketingPage>
  );
}
