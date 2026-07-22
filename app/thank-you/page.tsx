import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thanks for reaching out to Buyience. Our team will be in touch shortly.",
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex flex-grow items-center justify-center px-6 py-24">
        <div className="max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#7C3AED]">Thank you</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-normal text-[#17265C] sm:text-4xl">
            We&apos;ve got your request
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-[#5B5F76]">
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
            <Link href="/" className="font-semibold text-[#7C3AED] hover:underline">
              home
            </Link>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
