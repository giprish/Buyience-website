import React from "react";
import MarketingLayout from "@/components/MarketingLayout";
import SectionCapsule from "@/components/SectionCapsule";
import Button from "@/components/Button";

interface SimpleMarketingPageProps {
  capsule?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Purple the content section under the hero (alternating-band rule). */
  contentPurple?: boolean;
  /** Purple the Final CTA. Prefer false when contentPurple is true. */
  ctaPurple?: boolean;
}

export default function SimpleMarketingPage({
  capsule = "Buyience",
  title,
  description,
  children,
  primaryCta = { label: "Request a Demo", href: "/request-a-demo" },
  secondaryCta = { label: "Start Free Trial", href: "https://app.buyience.com/register" },
  contentPurple = false,
  ctaPurple = false,
}: SimpleMarketingPageProps) {
  return (
    <MarketingLayout cta={ctaPurple ? { purple: true } : true}>
      <header className="relative overflow-hidden bg-hero-grid">
        <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-12 pt-14 text-center sm:px-8 sm:pt-24 sm:pb-16">
          <SectionCapsule>{capsule}</SectionCapsule>
          <h1 className="mt-4 text-[2.25rem] font-extrabold leading-tight tracking-normal text-[#1B1033] sm:mt-4 sm:text-5xl md:text-[3.75rem]">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[#5A4B7C] sm:mt-5 sm:text-[17px]">{description}</p>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center">
            <Button variant="primary" size="lg" href={primaryCta.href}>
              {primaryCta.label}
            </Button>
            <Button variant="ghost" size="lg" href={secondaryCta.href}>
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </header>
      {children && (
        <section
          className={`px-5 py-16 text-[#5A4B7C] sm:px-8 ${contentPurple ? "bg-(--surface)" : ""}`.trim()}
          style={contentPurple ? { background: "var(--surface)" } : undefined}
        >
          <div className="mx-auto max-w-3xl">{children}</div>
        </section>
      )}
    </MarketingLayout>
  );
}
