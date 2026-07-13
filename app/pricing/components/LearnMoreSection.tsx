"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LearnMoreSection() {
  const cards = [
    {
      title: "Nova Core",
      description:
        "The API-first B2B commerce platform behind Buyience — built on MACH architecture (Microservices, API-first, Cloud-native, Headless) with the AI Quote Engine at its core.",
      linkText: "Platform overview →",
      linkHref: "/solutions",
    },
    {
      title: "Solutions",
      description:
        "The complete B2B commerce suite — from AI quoting and Digital Sales Rooms to inventory and order management — mapped to your capability needs and your industry.",
      linkText: "Explore solutions →",
      linkHref: "/solutions",
    },
    {
      title: "Integrations",
      description:
        "Connect WordPress, WooCommerce, and Shopify with your payment, email, and shipping stack — with 80+ API endpoints and 38 webhook events when you want to go deeper.",
      linkText: "See integrations →",
      linkHref: "/integrations",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="learn">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto" }}
        >
          <p className="eyebrow">LEARN MORE</p>
          <h2 style={{ marginTop: "14px" }}>Learn more about Buyience</h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="learn-card text-left"
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <Link href={card.linkHref} className="go">
                {card.linkText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
