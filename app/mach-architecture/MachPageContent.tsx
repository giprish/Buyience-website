"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import MachHero from "./components/MachHero";
import MachWhatIsSection from "./components/MachWhatIsSection";
import MachPrinciplesSection from "./components/MachPrinciplesSection";
import MachDivesSection from "./components/MachDivesSection";
import MachComparisonSection from "./components/MachComparisonSection";
import MachFAQ from "./components/MachFAQ";

export default function MachPageContent() {
  return (
    <MarketingLayout
      mainClassName="mach-page"
      cta={{
        title: (
          <>
            Ready to build on{" "}
            <span className="final-card-accent">MACH?</span>
          </>
        ),
        description:
          "API-first architecture. Database-per-tenant security. Real-time capabilities. Start building your B2B commerce solution today.",
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
      }}
    >
      <MachHero />
      <MachWhatIsSection />
      <MachPrinciplesSection />
      <MachDivesSection />
      <MachComparisonSection />
      <MachFAQ />
    </MarketingLayout>
  );
}
