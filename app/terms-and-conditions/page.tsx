import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using Buyience Nova Core B2B commerce platform. Service agreement, acceptable use, and legal terms.",
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="mx-auto max-w-3xl flex-grow px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#171241] sm:text-4xl">Terms & Conditions</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: 2026</p>
        <div className="mt-10 space-y-6 text-[15.5px] leading-relaxed text-[#5B5F76]">
          <p>
            These Terms & Conditions govern access to buyience.com and use of Nova Core. By using our services you agree
            to these terms.
          </p>
          <h2 className="text-xl font-bold text-[#171241]">Services</h2>
          <p>
            Buyience provides SaaS B2B commerce software including quoting, inventory, storefront, and related
            capabilities subject to your subscription plan.
          </p>
          <h2 className="text-xl font-bold text-[#171241]">Acceptable use</h2>
          <p>
            You may not misuse the platform, attempt unauthorized access, reverse engineer our services beyond permitted
            law, or use the service for unlawful activity.
          </p>
          <h2 className="text-xl font-bold text-[#171241]">Subscriptions & billing</h2>
          <p>
            Fees are billed according to your plan. Founder launch and standard pricing are listed on our pricing page.
            Cancellations and refunds are governed by our Refund Policy.
          </p>
          <h2 className="text-xl font-bold text-[#171241]">Contact</h2>
          <p>
            Questions:{" "}
            <a className="font-semibold text-[#7C3AED] hover:underline" href="mailto:hello@buyience.com">
              hello@buyience.com
            </a>
            . Company No: 14871419.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
