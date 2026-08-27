"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import PartnerHero from "./components/PartnerHero";
import WhyIntegrateSection from "./components/WhyIntegrateSection";
import IntegrationHowSection from "./components/IntegrationHowSection";
import IntegrationGapsSection from "./components/IntegrationGapsSection";
import PartnerFAQ from "./components/PartnerFAQ";

export default function TechnologyPartnerPageContent() {
  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const firstInput = document.getElementById("first");
    const formContainer = document.getElementById("tFormContainer");
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      if (firstInput) firstInput.focus();
    }, 500);
  };

  return (
    <MarketingLayout
      mainClassName="tech-partner-page"
      cta={{
        capsule: "Join the Program",
        title: (
          <>
            Integrate once.{" "}
            <span className="final-card-accent">Be the one they find.</span>
          </>
        ),
        description:
          "An API built to be integrated with, engineers who answer, and a directory small enough that your listing matters.",
        primaryAction: {
          label: "Apply now",
          href: "#tForm",
          variant: "primary",
          onClick: handleScrollToForm,
        },
        secondaryAction: {
          label: "Explore the API & architecture",
          href: "/solutions",
          variant: "ghost",
        },
        trust: null,
        purple: true,
      }}
    >
      <PartnerHero />
      <WhyIntegrateSection />
      <IntegrationHowSection />
      <IntegrationGapsSection />
      <PartnerFAQ />
    </MarketingLayout>
  );
}
