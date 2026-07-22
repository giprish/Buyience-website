import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Buyience refund policy. 14-day money-back guarantee on all plans. No questions asked. Cancel anytime with no long-term contracts.",
};

export default function RefundPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="mx-auto max-w-3xl flex-grow px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-semibold tracking-normal text-[#17265C] sm:text-4xl">Refund Policy</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: 2026</p>
        <div className="mt-10 space-y-6 text-[15.5px] leading-relaxed text-[#5B5F76]">
          <p>
            We offer a 14-day money-back guarantee on eligible Buyience Nova Core plans. If Nova Core isn&apos;t right
            for you, contact us within 14 days of your initial paid subscription for a full refund — no questions asked.
          </p>
          <h2 className="text-xl font-bold text-[#17265C]">How to request a refund</h2>
          <p>
            Email{" "}
            <a className="font-semibold text-[#7C3AED] hover:underline" href="mailto:hello@buyience.com">
              hello@buyience.com
            </a>{" "}
            from your account email with your company name and subscription details. Refunds are processed to the
            original payment method.
          </p>
          <h2 className="text-xl font-bold text-[#17265C]">Cancellations</h2>
          <p>
            You can cancel anytime. There are no long-term contracts on standard self-serve plans. Access continues
            through the end of the billed period unless otherwise agreed.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
