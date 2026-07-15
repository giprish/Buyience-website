"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCurrency } from "@/components/CurrencyProvider";
import PricingHero from "./components/PricingHero";
import PricingPlans from "./components/PricingPlans";
import ComparisonTable from "./components/ComparisonTable";
import AddonsSection from "./components/AddonsSection";
import PricingFAQ from "./components/PricingFAQ";
import LearnMoreSection from "./components/LearnMoreSection";
import PricingFinalCTA from "./components/PricingFinalCTA";
import { parseCurrencyParam } from "@/lib/pricing/currency";

export default function PricingPageContent() {
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "annual">("annual");
  const { currency, setCurrency } = useCurrency();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Honor /pricing?currency=… and /pricing/gbp redirects when landing on this page
  useEffect(() => {
    const fromUrl = parseCurrencyParam(searchParams.get("currency"));
    if (fromUrl && fromUrl !== currency) {
      setCurrency(fromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSetCurrency = (next: typeof currency) => {
    setCurrency(next);
    const params = new URLSearchParams(searchParams.toString());
    params.set("currency", next.toLowerCase());
    router.replace(`/pricing?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />

      <main className="pricing-page flex-grow">
        <PricingHero
          billingPeriod={billingPeriod}
          setBillingPeriod={setBillingPeriod}
          currency={currency}
          setCurrency={handleSetCurrency}
        />
        <PricingPlans billingPeriod={billingPeriod} currency={currency} />
        <ComparisonTable currency={currency} />
        <AddonsSection currency={currency} />
        <PricingFAQ />
        <LearnMoreSection />
        <PricingFinalCTA />
      </main>

      <Footer />
    </div>
  );
}
