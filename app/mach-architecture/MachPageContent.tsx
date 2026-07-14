"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MachHero from "./components/MachHero";
import MachWhatIsSection from "./components/MachWhatIsSection";
import MachPrinciplesSection from "./components/MachPrinciplesSection";
import MachDivesSection from "./components/MachDivesSection";
import MachComparisonSection from "./components/MachComparisonSection";
import MachFAQ from "./components/MachFAQ";
import MachFinalCTA from "./components/MachFinalCTA";

export default function MachPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="mach-page flex-grow">
        <MachHero />
        <MachWhatIsSection />
        <MachPrinciplesSection />
        <MachDivesSection />
        <MachComparisonSection />
        <MachFAQ />
        <MachFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
