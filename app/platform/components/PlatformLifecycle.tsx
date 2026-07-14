"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PlatformLifecycle() {
  const lifecycle = [
    {
      stage: "SELL",
      cards: [
        {
          title: "AI Quote Engine",
          description:
            "Generate accurate quotes in 2 clicks — AI-powered pricing, win probability scoring, and margin protection on every draft.",
          href: "/solutions",
        },
        {
          title: "Real-Time Negotiations",
          description:
            "Digital Sales Room with live, WebSocket-powered negotiation and an AI assistant that keeps your floor in play.",
          href: "/solutions",
        },
        {
          title: "Product Configurator (CPQ)",
          description:
            "Complex products configured with real-time conflict resolution — every configuration valid, priced, and quote-ready.",
          href: "/solutions",
        },
      ],
    },
    {
      stage: "TRANSACT",
      cards: [
        {
          title: "Quote-to-Order Workflow",
          description:
            "Accepted quotes become orders in one click — with payment terms (Net 30/60/90) and real-time order tracking built in.",
          href: "/solutions",
        },
        {
          title: "Dynamic Pricing Engine",
          description:
            "Customer-specific pricing, tiered rules, and margin floors — and pricing adjusts dynamically as configurations change.",
          href: "/solutions",
        },
        {
          title: "Buyer Self-Service Portal",
          description:
            "Customer portals with saved lists, quick reorder, and 24/7 self-service ordering against their pricing.",
          href: "/solutions",
        },
      ],
    },
    {
      stage: "FULFIL",
      cards: [
        {
          title: "Multi-Warehouse Inventory",
          description: "Multi-warehouse inventory with real-time stock tracking, stock allocation, and transfer orders.",
          href: "/solutions",
        },
      ],
    },
    {
      stage: "SUPPLY",
      cards: [
        {
          title: "Supplier Management",
          description:
            "5-step supplier onboarding with approval workflows, compliance tracking, and multi-currency support.",
          href: "/solutions",
        },
      ],
    },
    {
      stage: "CONNECT",
      cards: [
        {
          title: "WordPress / WooCommerce Integration",
          description:
            "Transform your B2C store to B2B in minutes — customer pricing, quote requests, and real-time sync on your existing site.",
          href: "/solutions",
        },
        {
          title: "API-First Everything",
          description:
            "80+ API endpoints and 38 webhook events. Headless by design — build on Nova Core, don't build around it.",
          href: "/solutions",
        },
      ],
    },
  ];

  const groupVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="platform">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE PLATFORM</p>
          <h2>Why Nova Core Stands Apart</h2>
          <p className="lede">
            Purpose-built for B2B commerce with the flexibility to scale and the intelligence to close deals faster.
          </p>
        </motion.div>

        {lifecycle.map((group, gIdx) => (
          <motion.div
            key={gIdx}
            variants={groupVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="life-group reveal in"
          >
            <div className="life-h">
              <span className="tag">{group.stage}</span>
              <span className="rule"></span>
            </div>
            <div className="life-cards">
              {group.cards.map((card, cIdx) => (
                <Link key={cIdx} href={card.href} className="life-card hover:no-underline">
                  <motion.div variants={cardVariants} className="flex flex-col h-full">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <span className="go">Explore →</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
