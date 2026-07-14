"use client";

import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupplierHero from "./components/SupplierHero";
import SupplierChallenge from "./components/SupplierChallenge";
import SupplierCapabilities from "./components/SupplierCapabilities";
import SupplierHowItWorks from "./components/SupplierHowItWorks";
import SupplierDivesSection from "./components/SupplierDivesSection";
import SupplierWhatChanges from "./components/SupplierWhatChanges";
import SupplierFAQ from "./components/SupplierFAQ";
import SupplierFinalCTA from "./components/SupplierFinalCTA";

export default function SupplierPageContent() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="supplier-page flex-grow">
        <SupplierHero />
        <SupplierChallenge />
        <SupplierCapabilities />
        <SupplierHowItWorks />
        <SupplierDivesSection />
        <SupplierWhatChanges />
        <SupplierFAQ />
        <SupplierFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
