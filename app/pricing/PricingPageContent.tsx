"use client";

import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MarketingLayout from "@/components/MarketingLayout";
import { useCurrency } from "@/components/CurrencyProvider";
import PricingHero from "./components/PricingHero";
import PricingPlans from "./components/PricingPlans";
import ComparisonTable from "./components/ComparisonTable";
import AddonsSection from "./components/AddonsSection";
import PricingFAQ from "./components/PricingFAQ";
import LearnMoreSection from "./components/LearnMoreSection";
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
    <MarketingLayout
      mainClassName="pricing-page"
      cta={{
        id: "trial",
        title: (
          <>
            Start your 14-day{" "}
            <span className="final-card-accent">free trial</span> today.
          </>
        ),
        description: "Full access to all features. No credit card required.",
        primaryAction: {
          label: "Start free trial",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
        secondaryAction: {
          label: "Request demo",
          href: "/request-a-demo",
          variant: "ghost",
        },
        purple: true,
      }}
    >
      <PricingHero
        billingPeriod={billingPeriod}
        setBillingPeriod={setBillingPeriod}
        currency={currency}
        setCurrency={handleSetCurrency}
      />
      <PricingPlans billingPeriod={billingPeriod} currency={currency} />
      <ComparisonTable />
      <AddonsSection currency={currency} />
      <LearnMoreSection />
      <PricingFAQ />
    </MarketingLayout>
  );
}
