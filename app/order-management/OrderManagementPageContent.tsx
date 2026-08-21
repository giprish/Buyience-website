"use client";

import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import OrderManagementHero from "./components/OrderManagementHero";
import OrderManagementProblem from "./components/OrderManagementProblem";
import OrderManagementCapabilities from "./components/OrderManagementCapabilities";
import OrderManagementHowItWorks from "./components/OrderManagementHowItWorks";
import OrderManagementDivesSection from "./components/OrderManagementDivesSection";
import OrderManagementWho from "./components/OrderManagementWho";
import OrderManagementComparison from "./components/OrderManagementComparison";
import OrderManagementWhatChanges from "./components/OrderManagementWhatChanges";
import OrderManagementFAQ from "./components/OrderManagementFAQ";

export default function OrderManagementPageContent() {
  return (
    <MarketingLayout
      mainClassName="order-management-page"
      cta={{
        title: (
          <>
            Take control of your <span className="final-card-accent">orders</span>
          </>
        ),
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
        secondaryAction: {
          label: "See pricing",
          href: "/pricing",
          variant: "ghost",
        },
        description:
          "From creation to delivery, every order tracked, every payment processed, every status visible.",
        purple: true,
      }}
    >
      <OrderManagementHero />
      <OrderManagementProblem purple />
      <OrderManagementCapabilities />
      <OrderManagementHowItWorks purple />
      <OrderManagementDivesSection />
      <OrderManagementWho purple />
      <OrderManagementComparison />
      <OrderManagementWhatChanges purple />
      <OrderManagementFAQ />
    </MarketingLayout>
  );
}
