import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteHero from "./components/QuoteHero";
import Challenge from "./components/Challenge";
import Capabilities from "./components/Capabilities";
import HowItWorks from "./components/HowItWorks";
import Versus from "./components/Versus";
import Benefits from "./components/Benefits";
import DigitalSalesRoomSection from "./components/DigitalSalesRoomSection";
import Impact from "./components/Impact";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";

export const metadata: Metadata = {
  title: "AI Quote Engine for B2B | Smart Pricing & Quotes | Buyience",
  description:
    "Nova Core prices every B2B quote in seconds, scores win probability across 11+ factors, and enforces your margin floor. You stay in control; the AI does the maths.",
};

export default function AIQuoteEnginePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Premium Unified Announcement Bar */}
      <AnnouncementBar />
      
      {/* Premium Unified Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="quote-engine-page flex-grow">
        <QuoteHero />
        <Challenge />
        <Capabilities />
        <HowItWorks />
        <Versus />
        <Benefits />
        <DigitalSalesRoomSection />
        <Impact />
        <FAQSection />
        <FinalCTASection />
      </main>

      {/* Premium Unified Footer */}
      <Footer />
    </div>
  );
}
