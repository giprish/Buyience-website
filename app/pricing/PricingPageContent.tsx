"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingHero from "./components/PricingHero";
import PricingPlans from "./components/PricingPlans";
import ComparisonTable from "./components/ComparisonTable";
import AddonsSection from "./components/AddonsSection";
import PricingFAQ from "./components/PricingFAQ";
import LearnMoreSection from "./components/LearnMoreSection";
import PricingFinalCTA from "./components/PricingFinalCTA";

export default function PricingPageContent() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="pricing-page flex-grow">
        <PricingHero billingPeriod={billingPeriod} setBillingPeriod={setBillingPeriod} />
        <PricingPlans billingPeriod={billingPeriod} />
        <ComparisonTable />
        <AddonsSection />
        <PricingFAQ />
        <LearnMoreSection />
        <PricingFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
