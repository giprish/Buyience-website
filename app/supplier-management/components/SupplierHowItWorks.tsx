"use client";

import React from "react";
import { BadgeCheck, Building2, FileCheck2, Landmark, Truck } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

export default function SupplierHowItWorks() {
  const steps: StepRailStep[] = [
    {
      chip: "Step 1",
      title: "Basic information",
      desc: "Company name, registration, tax ID, contact details",
      Icon: Building2,
    },
    {
      chip: "Step 2",
      title: "Financial & tax",
      desc: "Banking details, SWIFT code, currency preference",
      Icon: Landmark,
    },
    {
      chip: "Step 3",
      title: "Compliance",
      desc: "Certificates, licenses, regulatory documents",
      Icon: FileCheck2,
    },
    {
      chip: "Step 4",
      title: "Logistics",
      desc: "Shipping methods, delivery zones, transit times",
      Icon: Truck,
    },
    {
      chip: "Approved",
      title: "Review & create",
      desc: "Final review, validation, approval",
      Icon: BadgeCheck,
      won: true,
    },
  ];

  return (
    <StepRailSection
      eyebrow="ONBOARDING WORKFLOW"
      heading="From first contact to approved supplier."
      lede="A structured process ensures complete supplier data. No missed fields, no incomplete profiles."
      steps={steps}
    />
  );
}
