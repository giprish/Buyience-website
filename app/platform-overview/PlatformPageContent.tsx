"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlatformHero from "./components/PlatformHero";
import PlatformChallenge from "./components/PlatformChallenge";
import PlatformLifecycle from "./components/PlatformLifecycle";
import PlatformHowItWorks from "./components/PlatformHowItWorks";
import PlatformModuleDives from "./components/PlatformModuleDives";
import PlatformIntelLayer from "./components/PlatformIntelLayer";
import PlatformMACH from "./components/PlatformMACH";
import PlatformWordPress from "./components/PlatformWordPress";
import PlatformTargetAudience from "./components/PlatformTargetAudience";
import PlatformOutcomes from "./components/PlatformOutcomes";
import PlatformFAQ from "./components/PlatformFAQ";
import PlatformFinalCTA from "./components/PlatformFinalCTA";

export default function PlatformPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="platform-page flex-grow">
        <PlatformHero />
        <PlatformChallenge />
        <PlatformLifecycle />
        <PlatformHowItWorks />
        <PlatformModuleDives />
        <PlatformIntelLayer />
        <PlatformMACH />
        <PlatformWordPress />
        <PlatformTargetAudience />
        <PlatformOutcomes />
        <PlatformFAQ />
        <PlatformFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
