"use client";

import React from "react";
import FinalCTA from "@/components/FinalCTA";

export default function PartnerFinalCTA() {
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
    <FinalCTA
      capsule="Join the Program"
      title={
        <>
          Integrate once.{" "}
          <span className="final-card-accent">Be the one they find.</span>
        </>
      }
      description="An API built to be integrated with, engineers who answer, and a directory small enough that your listing matters."
      primaryAction={{
        label: "Apply now",
        href: "#tForm",
        variant: "ghost",
        onClick: handleScrollToForm,
      }}
      secondaryAction={{
        label: "Explore the API & architecture",
        href: "/solutions",
        variant: "ghost",
      }}
      trust={null}
    />
  );
}
