"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionCapsule from "@/components/SectionCapsule";
import Button from "@/components/Button";

export default function RequestDemoPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Client-side redirect to thank-you until backend form wiring exists
    setTimeout(() => {
      router.push("/thank-you");
    }, 400);
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        <section className="relative overflow-hidden bg-hero-grid">
          <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-2 md:px-[35px] md:py-24 lg:gap-16">
            <div>
              <SectionCapsule>Request a Demo</SectionCapsule>
              <h1 className="mt-6 text-3xl font-semibold tracking-normal text-[#17265C] sm:text-4xl">
                See Nova Core in action
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-[#5B5F76]">
                Book a personalized 30-minute walkthrough. We&apos;ll show AI quoting, inventory management, and the B2B
                storefront — tailored to how your team sells.
              </p>
              <ul className="mt-8 space-y-3 text-[15px] text-[#332C63]">
                {[
                  "AI Quote Engine with margin protection",
                  "Digital Sales Room negotiations",
                  "Multi-warehouse inventory live demo",
                  "Founder launch pricing walkthrough",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#7C3AED]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[#E8E4F4] bg-white p-6 shadow-[0_12px_40px_rgba(23,18,65,0.08)] sm:p-8"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-left text-sm font-semibold text-[#171241]">
                  First name
                  <input
                    required
                    name="firstName"
                    className="mt-1.5 w-full rounded-xl border border-[#D7D0EC] px-3.5 py-2.5 text-[15px] font-medium text-[#171241] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  />
                </label>
                <label className="block text-left text-sm font-semibold text-[#171241]">
                  Last name
                  <input
                    required
                    name="lastName"
                    className="mt-1.5 w-full rounded-xl border border-[#D7D0EC] px-3.5 py-2.5 text-[15px] font-medium text-[#171241] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                  />
                </label>
              </div>
              <label className="mt-4 block text-left text-sm font-semibold text-[#171241]">
                Work email
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1.5 w-full rounded-xl border border-[#D7D0EC] px-3.5 py-2.5 text-[15px] font-medium text-[#171241] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                />
              </label>
              <label className="mt-4 block text-left text-sm font-semibold text-[#171241]">
                Company
                <input
                  required
                  name="company"
                  className="mt-1.5 w-full rounded-xl border border-[#D7D0EC] px-3.5 py-2.5 text-[15px] font-medium text-[#171241] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                />
              </label>
              <label className="mt-4 block text-left text-sm font-semibold text-[#171241]">
                What are you looking to solve?
                <textarea
                  name="message"
                  rows={4}
                  className="mt-1.5 w-full resize-y rounded-xl border border-[#D7D0EC] px-3.5 py-2.5 text-[15px] font-medium text-[#171241] outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20"
                />
              </label>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="mt-6 w-full"
                disabled={submitting}
              >
                {submitting ? "Submitting…" : "Book My Demo"}
              </Button>
              <p className="mt-3 text-center text-xs text-slate-400">
                We typically respond within one business day.
              </p>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
