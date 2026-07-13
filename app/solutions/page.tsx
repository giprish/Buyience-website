import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsHero from "./components/SolutionsHero";
import CapabilitiesSuite from "./components/CapabilitiesSuite";
import IndustriesSection from "./components/IndustriesSection";
import IntegrationsSection from "./components/IntegrationsSection";
import FinalCTA from "./components/FinalCTA";

export const metadata: Metadata = {
  title: "B2B Commerce Solutions | AI Quoting, CPQ & Sales Rooms — Buyience",
  description:
    "One platform for the whole B2B sale: AI Quote Engine, CPQ with real BOMs, Digital Sales Rooms, and margin-protected pricing — by capability and by industry.",
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Premium Unified Announcement Bar */}
      <AnnouncementBar />

      {/* Premium Unified Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="solutions-page flex-grow">
        <SolutionsHero />
        <CapabilitiesSuite />
        <IndustriesSection />
        <IntegrationsSection />
        <FinalCTA />
      </main>

      {/* Premium Unified Footer */}
      <Footer />
    </div>
  );
}
