"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InventoryHero from "./components/InventoryHero";
import InventoryChallenge from "./components/InventoryChallenge";
import InventoryCapabilities from "./components/InventoryCapabilities";
import InventoryHowItWorks from "./components/InventoryHowItWorks";
import InventoryPOComparison from "./components/InventoryPOComparison";
import InventoryLocationDives from "./components/InventoryLocationDives";
import InventoryWhatChanges from "./components/InventoryWhatChanges";
import InventoryFAQ from "./components/InventoryFAQ";
import InventoryFinalCTA from "./components/InventoryFinalCTA";

export default function InventoryPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="inventory-page flex-grow">
        <InventoryHero />
        <InventoryChallenge />
        <InventoryCapabilities />
        <InventoryHowItWorks />
        <InventoryPOComparison />
        <InventoryLocationDives />
        <InventoryWhatChanges />
        <InventoryFAQ />
        <InventoryFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
