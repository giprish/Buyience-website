import React from "react";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionCapsule from "@/components/SectionCapsule";
import Button from "@/components/Button";

interface SimpleMarketingPageProps {
  capsule?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function SimpleMarketingPage({
  capsule = "Buyience",
  title,
  description,
  children,
  primaryCta = { label: "Request a Demo", href: "/request-a-demo" },
  secondaryCta = { label: "Start Free Trial", href: "https://app.buyience.com/register" },
}: SimpleMarketingPageProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        <header className="relative overflow-hidden bg-hero-grid">
          <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-3xl px-4 pb-12 pt-14 text-center sm:px-6 sm:pt-24 sm:pb-16">
            <SectionCapsule>{capsule}</SectionCapsule>
            <h1 className="mt-5 text-[1.75rem] font-extrabold leading-tight tracking-tight text-[#171241] sm:mt-6 sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-[#5B5F76] sm:mt-5 sm:text-[17px]">{description}</p>
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
          <section className="mx-auto max-w-3xl px-6 py-16 text-[#5B5F76]">{children}</section>
        )}
        <section className="border-t border-slate-100 bg-slate-50 py-12 text-center">
          <p className="text-sm text-slate-500">
            Looking for something else?{" "}
            <Link href="/contact" className="font-semibold text-[#7C3AED] hover:underline">
              Contact us
            </Link>{" "}
            or explore{" "}
            <Link href="/pricing" className="font-semibold text-[#7C3AED] hover:underline">
              pricing
            </Link>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
