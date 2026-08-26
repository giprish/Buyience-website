"use client";

import React, { useState } from "react";
import MarketingLayout from "@/components/MarketingLayout";
import ContactHero from "./components/ContactHero";
import ContactFormSection from "./components/ContactFormSection";
import SelfServeSection from "./components/SelfServeSection";

export default function ContactPageContent() {
  const [selectedReason, setSelectedReason] = useState("demo");

  return (
    <MarketingLayout
      mainClassName="contact-page"
      cta={{
        id: "trial",
        title: (
          <>
            Ready to stop fighting{" "}
            <span className="final-card-accent">your platform?</span>
          </>
        ),
        description: "Start your 14-day free trial. No credit card required. Full access to all features.",
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
        purple: true,
      }}
    >
      <ContactHero selectedReason={selectedReason} onSelectReason={setSelectedReason} />
      <ContactFormSection selectedReason={selectedReason} onSelectReason={setSelectedReason} />
      <SelfServeSection />
    </MarketingLayout>
  );
}
