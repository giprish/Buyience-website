import React from "react";
import SectionCapsule from "@/components/SectionCapsule";
import Button from "@/components/Button";

const principles = [
  {
    letter: "M",
    title: "Micro-Services",
    description: "True SaaS with complete data isolation.",
  },
  {
    letter: "A",
    title: "API-First",
    description: "Build custom frontends or integrate with any system.",
  },
  {
    letter: "C",
    title: "Cloud-Native",
    description: "Auto-scaling infrastructure. No capacity planning required.",
  },
  {
    letter: "H",
    title: "Headless",
    description: "Decoupled frontend. Use our storefront or build your own.",
  },
];

const audiences = [
  {
    title: "Wholesalers & Distributors",
    description:
      "Multi-warehouse inventory, tiered pricing, volume discounts. Manage complexity without complexity.",
  },
  {
    title: "Manufacturers",
    description:
      "Product configurator handles unlimited options. CPQ workflows eliminate SKU explosion. Quote-to-order in clicks.",
  },
  {
    title: "Multi-Brand Operators",
    description: "Run multiple brands from unified control. Separate customer databases, shared infrastructure.",
  },
];

export default function MachPrinciples() {
  return (
    <section className="home-section">
      <div className="home-container text-center">
        <SectionCapsule variant="soft">Our Platform</SectionCapsule>
        <h2 className="home-h2 mt-5">The Principles Behind Nova Core</h2>
        <p className="home-lede mx-auto mt-4 max-w-2xl">
          Nova Core is built on MACH principles — modern architecture that scales with your business.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((item) => (
            <article key={item.letter} className="text-left">
              <span className="block text-5xl font-black leading-none text-[#E8E4F4]">{item.letter}</span>
              <h3 className="mt-3 text-[17px] font-bold text-[#171241]">{item.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[#5B5F76]">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="ghost" size="md" href="/mach-architecture">
            Explore Architecture
          </Button>
        </div>

        <div className="mt-20 grid gap-6 text-left md:grid-cols-3">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#E8E4F4] bg-[#F7F5FC]/60 p-6"
            >
              <h3 className="text-[17px] font-bold text-[#171241]">{item.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-[#5B5F76]">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
