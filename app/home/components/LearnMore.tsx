import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionCapsule from "@/components/SectionCapsule";

const cards = [
  {
    href: "/platform-overview",
    title: "Nova Core",
    description:
      "API-first B2B commerce powered by an AI Quote Engine. Built on MACH architecture for unlimited scalability and flexibility.",
    image: "/images/solutions_cube.png",
    alt: "Nova Core abstract cubes",
  },
  {
    href: "/solutions",
    title: "Solutions",
    description:
      "Complete B2B commerce suite — from AI Quote Engine to inventory management. Everything you need to sell to business customers.",
    image: "/images/cta_sphere.png",
    alt: "Solutions abstract sphere",
  },
  {
    href: "/wordpress-plugin-buyience-novacore-b2b-quote-engine",
    title: "Integration",
    description:
      "Connect with WordPress, WooCommerce, Shopify & BigCommerce (coming soon) and 50+ tools. Keep your essentials in one place.",
    image: "/images/integrations_blocks.png",
    alt: "Integrations abstract blocks",
  },
];

export default function LearnMore() {
  return (
    <section className="home-section home-section-muted">
      <div className="home-container text-center">
        <SectionCapsule variant="soft">Learn More</SectionCapsule>
        <h2 className="home-h2 mt-5">Learn more about Buyience</h2>
        <p className="home-lede mx-auto mt-4 max-w-2xl">
          Discover how our team can help bring your unique digital vision to life.
        </p>

        <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group overflow-hidden rounded-2xl border border-[#E8E4F4] bg-white transition-all duration-200 hover:-translate-y-1 hover:border-[#D7D0EC] hover:shadow-[0_16px_48px_rgba(23,18,65,0.1)]"
            >
              <div
                className="relative overflow-hidden bg-gradient-to-br from-[#F0EAFD] to-[#ECE8F8]"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={640}
                  height={480}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ width: "100%", height: "100%" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[18px] font-bold text-[#171241] group-hover:text-[#7C3AED] transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#5B5F76]">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
