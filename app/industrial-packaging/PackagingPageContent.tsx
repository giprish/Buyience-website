"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackagingHero from "./components/PackagingHero";
import PackagingProblem from "./components/PackagingProblem";
import PackagingCapabilities from "./components/PackagingCapabilities";
import PackagingDivesSection from "./components/PackagingDivesSection";
import PackagingHowItWorks from "./components/PackagingHowItWorks";
import PackagingIntegrations from "./components/PackagingIntegrations";
import PackagingPricing from "./components/PackagingPricing";
import PackagingFAQ from "./components/PackagingFAQ";
import PackagingFinalCTA from "./components/PackagingFinalCTA";

export default function PackagingPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="packaging-page flex-grow">
        <PackagingHero />
        <PackagingProblem />
        <PackagingCapabilities />
        <PackagingDivesSection />
        <PackagingHowItWorks />
        <PackagingIntegrations />
        <PackagingPricing />
        <PackagingFAQ />
        <PackagingFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
