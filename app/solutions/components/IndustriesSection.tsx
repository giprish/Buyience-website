"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Car,
  CircuitBoard,
  Construction,
  FlaskConical,
  HeartPulse,
  Package,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type IndustryStatus = "ready" | "inquire";

type Industry = {
  label: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  status: IndustryStatus;
  icon: LucideIcon;
};

function IndustryCard({
  industry,
  index,
  variants,
}: {
  industry: Industry;
  index: number;
  variants: {
    hidden: { opacity: number; y: number };
    visible: (index: number) => {
      opacity: number;
      y: number;
      transition: { delay: number; duration: number; ease: "easeOut" };
    };
  };
}) {
  const Icon = industry.icon;
  const isReady = industry.status === "ready";

  return (
    <motion.a
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      href={industry.linkHref}
      className="ind-life-card group flex h-full flex-col rounded-[14px] border border-(--border) bg-white p-7 text-left text-(--ink) no-underline transition-[transform,box-shadow,border-color] duration-180 hover:-translate-y-0.5 hover:border-(--violet) hover:shadow-(--shadow-1) hover:no-underline sm:p-8"
    >
      <span
        className="mb-5 flex size-10 items-center justify-center rounded-[10px] bg-(--violet-tint) text-(--violet-deep)"
        aria-hidden="true"
      >
        <Icon size={20} strokeWidth={2} />
      </span>

      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="font-mono text-[10.5px] tracking-[0.12em] text-(--violet-deep) uppercase">
          {industry.label}
        </span>
        {isReady ? (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-(--violet-tint) px-2 py-0.5 font-mono text-[10px] tracking-[0.06em] text-(--violet-deep) uppercase">
            <span className="size-1.5 rounded-full bg-(--violet)" aria-hidden="true" />
            Page live
          </span>
        ) : null}
      </div>

      <h3 className="m-0 mb-2 text-[1.0625rem] leading-snug tracking-[-0.01em] text-(--ink)">
        {industry.title}
      </h3>
      <p className="m-0 flex-1 text-[14px] leading-relaxed text-(--muted)">{industry.description}</p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-(--violet-deep)">
        {industry.linkText.replace(/\s*→\s*$/, "")}
        <ArrowRight
          size={14}
          strokeWidth={2.25}
          className="transition-transform duration-180 group-hover:translate-x-[3px]"
          aria-hidden="true"
        />
      </span>
    </motion.a>
  );
}

export default function IndustriesSection({ purple = false }: { purple?: boolean }) {
  const industries: Industry[] = [
    {
      label: "Industrial",
      title: "Industrial Supplies / MRO",
      description: "High-SKU catalogs, contract pricing, and repeat replenishment quoting.",
      linkText: "Explore MRO →",
      linkHref: "/mro-solutions",
      status: "ready",
      icon: Wrench,
    },
    {
      label: "Automotive",
      title: "Automotive Parts",
      description: "Fitment-heavy catalogs, dealer tiers, and fast counter-quoting.",
      linkText: "Explore auto parts →",
      linkHref: "/automotive-solutions",
      status: "ready",
      icon: Car,
    },
    {
      label: "Construction",
      title: "Building Materials",
      description: "Project-based quoting, staged deliveries, and trade pricing.",
      linkText: "Talk to us →",
      linkHref: "/contact",
      status: "inquire",
      icon: Construction,
    },
    {
      label: "F&B",
      title: "Food & Beverage Distribution",
      description: "Fast-moving inventory, customer-specific price lists, standing orders.",
      linkText: "Talk to us →",
      linkHref: "/contact",
      status: "inquire",
      icon: UtensilsCrossed,
    },
    {
      label: "Medical",
      title: "Medical & Lab Supplies",
      description: "Approval workflows, institutional buyers, and compliance-aware quoting.",
      linkText: "Talk to us →",
      linkHref: "/contact",
      status: "inquire",
      icon: HeartPulse,
    },
    {
      label: "Electronics",
      title: "Electronics",
      description: "Volume tiers, fast-changing costs, and configuration-heavy quotes.",
      linkText: "Talk to us →",
      linkHref: "/contact",
      status: "inquire",
      icon: CircuitBoard,
    },
    {
      label: "Chemicals",
      title: "Chemicals",
      description: "Spec-driven quoting, unit conversions, and documentation-heavy orders.",
      linkText: "Talk to us →",
      linkHref: "/contact",
      status: "inquire",
      icon: FlaskConical,
    },
  ];

  const ready = industries.filter((i) => i.status === "ready");
  const inquire = industries.filter((i) => i.status === "inquire");

  const headerVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.42,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section
      id="industries"
      className={`industries ${purple ? "bg-(--surface)" : ""}`.trim()}
      style={purple ? { background: "var(--surface)" } : undefined}
    >
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="center-head"
        >
          <p className="eyebrow">BY INDUSTRY</p>
          <h2>
            Built for the way <span className="grad-text">your industry sells.</span>
          </h2>
          <p className="lede">
            Quoting, configuration, and negotiation patterns differ by vertical. Nova Core adapts
            to each — starting with a live solution you can open today.
          </p>
        </motion.div>

        {/* Featured live solution */}
        <motion.a
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="ind-featured-card group mt-12 grid grid-cols-1 items-center gap-8 rounded-(--radius-card) border border-[#CBB8F5] bg-white p-7 text-left text-(--ink) no-underline transition-[transform,box-shadow,border-color] duration-180 hover:-translate-y-0.5 hover:border-(--violet) hover:shadow-(--shadow-1) hover:no-underline sm:p-8 lg:grid-cols-[1fr_auto] lg:gap-10 lg:p-10"
          href="/corporate-gifting"
        >
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-(--violet-tint) px-2.5 py-1 font-mono text-[10.5px] tracking-[0.08em] text-(--violet-deep) uppercase">
                <span className="size-1.5 rounded-full bg-(--violet)" aria-hidden="true" />
                Live solution
              </span>
              <span className="font-mono text-[11px] tracking-[0.12em] text-(--violet-deep) uppercase">
                Corporate Gifting
              </span>
            </div>
            <h3 className="m-0 mb-3 text-[1.5rem] tracking-[-0.02em] text-(--ink)">
              Quote every gift box in minutes — even in December.
            </h3>
            <p className="m-0 text-[14.5px] leading-relaxed text-(--muted)">
              Kitted BOMs, win probability on every quote, and margin floors that survive seasonal
              discount pressure. Open the vertical page to see the full flow.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["KITTING BOM", "WIN PROBABILITY", "SALES ROOM", "MARGIN FLOORS"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-(--violet-tint) px-2.5 py-1 font-mono text-[10.5px] tracking-[0.04em] text-(--violet-deep) no-underline"
                >
                  {chip}
                </span>
              ))}
            </div>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-(--violet-deep) no-underline">
              Explore Corporate Gifting
              <ArrowRight
                size={14}
                strokeWidth={2.25}
                className="transition-transform duration-180 group-hover:translate-x-[3px]"
                aria-hidden="true"
              />
            </span>
          </div>

          <div className="w-full max-w-[280px] justify-self-center lg:justify-self-end" aria-hidden="true">
            <div className="rounded-[14px] border border-(--border) bg-white p-5 shadow-(--shadow-1)">
              <div className="mb-3 flex items-center justify-between gap-3">
                <span className="font-mono text-[11px] tracking-[0.06em] text-(--muted)">
                  Q-4821
                </span>
                <span className="rounded-full bg-(--violet-tint) px-2 py-0.5 font-mono text-[10.5px] font-semibold text-(--violet-deep)">
                  Win 74%
                </span>
              </div>
              <p className="m-0 mb-3 text-[14px] font-semibold text-(--ink)">
                Executive Gift Kit · Qty 250
              </p>
              <ul className="m-0 flex list-none flex-col gap-2 p-0">
                {[
                  ["Box shell", "$12.40"],
                  ["Fillers + wrap", "$4.10"],
                  ["Brand insert", "$8.25"],
                ].map(([label, price]) => (
                  <li
                    key={label}
                    className="flex items-center justify-between gap-3 border-b border-(--border) pb-2 text-[13px] text-(--muted) last:border-b-0 last:pb-0"
                  >
                    <span>{label}</span>
                    <span className="text-(--ink)">{price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-(--border) pt-3 text-[12.5px]">
                <span className="text-(--muted)">Margin floor held</span>
                <span className="font-semibold text-(--violet-deep)">$24.75 / unit</span>
              </div>
            </div>
          </div>
        </motion.a>

        {/* Dedicated vertical pages */}
        <div className="mt-14">
          <div className="mb-4.5 flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-md bg-(--violet-tint) px-2.5 py-1 font-mono text-[11px] tracking-[0.14em] text-(--violet-deep) uppercase">
              <Package size={12} strokeWidth={2.25} aria-hidden="true" />
              Solution pages
            </span>
            <span className="h-px flex-1 bg-(--border)" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 gap-4 min-[861px]:grid-cols-2">
            {ready.map((ind, idx) => (
              <IndustryCard key={ind.title} industry={ind} index={idx} variants={cardVariants} />
            ))}
          </div>
        </div>

        {/* Contact-led verticals */}
        <div className="mt-12">
          <div className="mb-4.5 flex items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-md bg-(--violet-tint) px-2.5 py-1 font-mono text-[11px] tracking-[0.14em] text-(--violet-deep) uppercase">
              Also a strong fit
            </span>
            <span className="h-px flex-1 bg-(--border)" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 gap-4 min-[861px]:grid-cols-3">
            {inquire.map((ind, idx) => (
              <IndustryCard key={ind.title} industry={ind} index={idx} variants={cardVariants} />
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-7 text-center text-[14.5px] text-(--muted)"
        >
          Don&apos;t see your industry? Every vertical gets the same core platform —{" "}
          <a href="/contact" className="font-semibold text-(--violet-deep) no-underline hover:underline">
            tell us how you sell
          </a>{" "}
          and we&apos;ll show you how it fits.
        </motion.p>
      </div>
    </section>
  );
}
