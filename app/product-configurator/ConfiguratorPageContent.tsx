"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConfiguratorHero from "./components/ConfiguratorHero";
import ConfiguratorProblem from "./components/ConfiguratorProblem";
import ConfiguratorCapabilities from "./components/ConfiguratorCapabilities";
import ConfiguratorDivesSection from "./components/ConfiguratorDivesSection";
import ConfiguratorWho from "./components/ConfiguratorWho";
import ConfiguratorComparison from "./components/ConfiguratorComparison";
import ConfiguratorWhatChanges from "./components/ConfiguratorWhatChanges";
import ConfiguratorFAQ from "./components/ConfiguratorFAQ";
import ConfiguratorFinalCTA from "./components/ConfiguratorFinalCTA";

export default function ConfiguratorPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="configurator-page flex-grow">
        <ConfiguratorHero />
        <ConfiguratorProblem />
        <ConfiguratorCapabilities />
        <ConfiguratorDivesSection />
        <ConfiguratorWho />
        <ConfiguratorComparison />
        <ConfiguratorWhatChanges />
        <ConfiguratorFAQ />
        <ConfiguratorFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
