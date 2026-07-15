import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Buyience privacy policy. How we collect, use, and protect your data on Nova Core B2B commerce platform. GDPR compliant.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="mx-auto max-w-3xl flex-grow px-6 py-16 sm:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-[#171241] sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated: 2026</p>
        <div className="prose-buyience mt-10 space-y-6 text-[15.5px] leading-relaxed text-[#5B5F76]">
          <p>
            Buyience (&quot;we&quot;, &quot;us&quot;) provides the Nova Core B2B commerce platform. This policy explains
            how we collect, use, and protect personal data when you visit buyience.com or use our products.
          </p>
          <h2 className="text-xl font-bold text-[#171241]">Information we collect</h2>
          <p>
            We collect information you provide (name, email, company, demo requests), usage data for our marketing site
            and product, and technical data such as IP address and browser type needed to operate and secure our
            services.
          </p>
          <h2 className="text-xl font-bold text-[#171241]">How we use information</h2>
          <p>
            We use data to provide and improve Nova Core, respond to demos and support requests, send product or account
            communications, and comply with legal obligations. We do not sell personal data.
          </p>
          <h2 className="text-xl font-bold text-[#171241]">Your rights</h2>
          <p>
            Depending on your location (including GDPR), you may request access, correction, deletion, or restriction of
            your personal data. Contact{" "}
            <a className="font-semibold text-[#7C3AED] hover:underline" href="mailto:hello@buyience.com">
              hello@buyience.com
            </a>{" "}
            for privacy requests.
          </p>
          <h2 className="text-xl font-bold text-[#171241]">Contact</h2>
          <p>
            Buyience — Company No: 14871419. Registered in England and Wales. Email: hello@buyience.com
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
