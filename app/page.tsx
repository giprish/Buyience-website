import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuoteHero from "./ai-quote-engine/components/QuoteHero";
import Challenge from "./ai-quote-engine/components/Challenge";
import Capabilities from "./ai-quote-engine/components/Capabilities";
import HowItWorks from "./ai-quote-engine/components/HowItWorks";
import Versus from "./ai-quote-engine/components/Versus";
import Benefits from "./ai-quote-engine/components/Benefits";
import DigitalSalesRoomSection from "./ai-quote-engine/components/DigitalSalesRoomSection";
import Impact from "./ai-quote-engine/components/Impact";
import FAQSection from "./ai-quote-engine/components/FAQSection";
import FinalCTASection from "./ai-quote-engine/components/FinalCTASection";

export const metadata: Metadata = {
  title: "AI Quote Engine for B2B | Smart Pricing & Quotes | Buyience",
  description:
    "Nova Core prices every B2B quote in seconds, scores win probability across 11+ factors, and enforces your margin floor. You stay in control; the AI does the maths.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
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
      <Footer />
    </div>
  );
}
