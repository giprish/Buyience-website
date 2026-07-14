"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerHero from "./components/PartnerHero";
import WhyIntegrateSection from "./components/WhyIntegrateSection";
import IntegrationHowSection from "./components/IntegrationHowSection";
import IntegrationGapsSection from "./components/IntegrationGapsSection";
import PartnerFAQ from "./components/PartnerFAQ";
import PartnerFinalCTA from "./components/PartnerFinalCTA";

export default function TechnologyPartnerPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="tech-partner-page flex-grow">
        <PartnerHero />
        <WhyIntegrateSection />
        <IntegrationHowSection />
        <IntegrationGapsSection />
        <PartnerFAQ />
        <PartnerFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
