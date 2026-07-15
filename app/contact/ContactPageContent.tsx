"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "./components/ContactHero";
import ContactFormSection from "./components/ContactFormSection";
import SelfServeSection from "./components/SelfServeSection";
import ContactFinalCTA from "./components/ContactFinalCTA";

export default function ContactPageContent() {
  const [selectedReason, setSelectedReason] = useState("demo");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="contact-page flex-grow">
        <ContactHero selectedReason={selectedReason} onSelectReason={setSelectedReason} />
        <ContactFormSection selectedReason={selectedReason} onSelectReason={setSelectedReason} />
        <SelfServeSection />
        <ContactFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
