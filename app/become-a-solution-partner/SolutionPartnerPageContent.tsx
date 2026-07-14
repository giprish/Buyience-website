"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerHero from "./components/PartnerHero";
import PartnerHowItWorks from "./components/PartnerHowItWorks";
import PartnerEarn from "./components/PartnerEarn";
import PartnerFounding from "./components/PartnerFounding";
import PartnerWho from "./components/PartnerWho";
import PartnerFAQ from "./components/PartnerFAQ";
import PartnerFinalCTA from "./components/PartnerFinalCTA";

export default function SolutionPartnerPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="solution-partner-page flex-grow">
        <PartnerHero />
        <PartnerHowItWorks />
        <PartnerEarn />
        <PartnerFounding />
        <PartnerWho />
        <PartnerFAQ />
        <PartnerFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
