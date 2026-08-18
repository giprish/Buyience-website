"use client";

import React from "react";
import { Boxes, ChartNoAxesColumn, ShieldCheck, Upload } from "lucide-react";
import StepRailSection, { type StepRailStep } from "@/components/StepRailSection";

export default function InventoryHowItWorks() {
  const steps: StepRailStep[] = [
    {
      chip: "Step 1",
      title: "Import your catalogue",
      desc: "Upload products via CSV or connect your existing platform. Data syncs automatically.",
      Icon: Upload,
    },
    {
      chip: "Step 2",
      title: "Set safety stock",
      desc: "Define minimum levels per product and location. Thresholds trigger alerts and status changes.",
      Icon: ShieldCheck,
    },
    {
      chip: "Step 3",
      title: "Track in real time",
      desc: "Monitor stock across all locations. Inline editing lets you adjust quantities directly in the table.",
      Icon: ChartNoAxesColumn,
    },
    {
      chip: "Live",
      title: "Automate reorders",
      desc: "One-click purchase orders when stock is low. Receive goods and update stock instantly.",
      Icon: Boxes,
      won: true,
    },
  ];

  return (
    <StepRailSection
      eyebrow="HOW IT WORKS"
      heading="From import to insight in minutes."
      lede="No complex setup, no consultants. Connect your catalogue and start tracking."
      steps={steps}
    />
  );
}
