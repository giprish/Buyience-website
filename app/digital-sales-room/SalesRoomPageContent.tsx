"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SalesRoomHero from "./components/SalesRoomHero";
import SalesRoomChallenge from "./components/SalesRoomChallenge";
import SalesRoomSolution from "./components/SalesRoomSolution";
import SalesRoomDivesSection from "./components/SalesRoomDivesSection";
import SalesRoomHowItWorks from "./components/SalesRoomHowItWorks";
import SalesRoomUseCases from "./components/SalesRoomUseCases";
import SalesRoomWhatChanges from "./components/SalesRoomWhatChanges";
import SalesRoomFAQ from "./components/SalesRoomFAQ";
import SalesRoomFinalCTA from "./components/SalesRoomFinalCTA";

export default function SalesRoomPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="sales-room-page flex-grow">
        <SalesRoomHero />
        <SalesRoomChallenge />
        <SalesRoomSolution />
        <SalesRoomDivesSection />
        <SalesRoomHowItWorks />
        <SalesRoomUseCases />
        <SalesRoomWhatChanges />
        <SalesRoomFAQ />
        <SalesRoomFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
