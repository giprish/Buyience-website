"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GiftingHero from "./components/GiftingHero";
import GiftingProblem from "./components/GiftingProblem";
import GiftingCapabilities from "./components/GiftingCapabilities";
import GiftingDivesSection from "./components/GiftingDivesSection";
import GiftingHowItWorks from "./components/GiftingHowItWorks";
import GiftingIntegrations from "./components/GiftingIntegrations";
import GiftingPricing from "./components/GiftingPricing";
import GiftingFAQ from "./components/GiftingFAQ";
import GiftingFinalCTA from "./components/GiftingFinalCTA";

export default function GiftingPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="gifting-page flex-grow">
        <GiftingHero />
        <GiftingProblem />
        <GiftingCapabilities />
        <GiftingDivesSection />
        <GiftingHowItWorks />
        <GiftingIntegrations />
        <GiftingPricing />
        <GiftingFAQ />
        <GiftingFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
