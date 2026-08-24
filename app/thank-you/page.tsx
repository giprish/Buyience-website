import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import MarketingLayout from "@/components/MarketingLayout";
import Button from "@/components/Button";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Thank You | Buyience",
  description: "Thanks for reaching out to Buyience. Our team will be in touch shortly.",
  path: "/thank-you",
});

export default function ThankYouPage() {
  return (
    <MarketingLayout cta={false} mainClassName="flex items-center justify-center px-6 py-24">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#6E2CF4]">Thank you</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-[#1B1033] sm:text-5xl">
          We&apos;ve got your request
        </h1>
        <p className="mt-4 text-[17px] leading-relaxed text-[#5A4B7C]">
          A Buyience specialist will follow up shortly to schedule your Nova Core demo. In the meantime, explore
          pricing or dig into the platform.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" href="/pricing">
            View Pricing
          </Button>
          <Button variant="ghost" size="lg" href="/platform-overview">
            Explore Platform
          </Button>
        </div>
        <p className="mt-8 text-sm text-slate-400">
          Or head back{" "}
          <Link href="/" className="font-semibold text-[#6E2CF4] hover:underline">
            home
          </Link>
          .
        </p>
      </div>
    </MarketingLayout>
  );
}
