import React from "react";
import SectionCapsule from "@/components/SectionCapsule";
import { Brain, Layers, Users, Zap, Rocket } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "AI-powered quote generation that suggests optimal prices with real-time margin protection. Generate quotes 80–90% faster with 95%+ accuracy.",
  },
  {
    icon: Layers,
    title: "Headless Architecture",
    description:
      "Built on headless, API-first architecture that keeps your business flexible and future-ready. Integrate with frontends like WordPress via REST APIs.",
  },
  {
    icon: Users,
    title: "B2B-First Design",
    description:
      "Not a B2C platform with B2B bolted on. Purpose-built for complex sales, real negotiations, and serious business buyers.",
  },
  {
    icon: Zap,
    title: "Real-Time Commerce Engine",
    description:
      "WebSocket-powered real-time negotiations, live inventory updates, and instant price changes. Keep sales teams and customers synchronized.",
  },
  {
    icon: Rocket,
    title: "Quick Onboarding",
    description:
      "Launch your B2B store in 15 minutes with guided 7-step onboarding. No coding required — from signup to accepting quote requests in under a day.",
  },
];

export default function WhatIsNovaCore() {
  return (
    <section className="home-section" id="capabilities">
      <div className="home-container text-center">
        <SectionCapsule variant="soft">What Is Nova Core?</SectionCapsule>
        <h2 className="home-h2 mt-5">What Is Nova Core?</h2>
        <p className="home-lede mx-auto mt-4 max-w-3xl">
          Buyience presents <strong className="font-semibold text-[#171241]">Nova Core</strong> — the AI-powered B2B
          commerce platform built for how businesses actually buy. AI Quote Engine, unified catalog management,
          multi-warehouse inventory, customer-specific pricing, and real-time negotiation tools — all from one
          dashboard. Set up in minutes. Launch in days. Scale forever.
        </p>

        <div className="mt-14 grid gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="home-card group flex flex-col gap-4 rounded-2xl border border-[#E8E4F4] bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D7D0EC] hover:shadow-[0_12px_40px_rgba(23,18,65,0.08)]"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0EAFD] text-[#7C3AED] transition-colors group-hover:bg-[#7C3AED] group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-[17px] font-bold text-[#171241]">{feature.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[#5B5F76]">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
