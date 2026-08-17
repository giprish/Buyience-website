"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  ClipboardCheck,
  Factory,
  Link2,
  MessageSquareText,
  Package,
  Puzzle,
  Receipt,
  ShoppingBag,
  SlidersHorizontal,
  Sparkles,
  Store,
  Truck,
  Warehouse,
  Webhook,
  type LucideIcon,
} from "lucide-react";

const lifecycle: {
  stage: string;
  StageIcon: LucideIcon;
  cards: {
    title: string;
    description: string;
    href: string;
    icon: LucideIcon;
  }[];
}[] = [
  {
    stage: "SELL",
    StageIcon: ShoppingBag,
    cards: [
      {
        title: "AI Quote Engine",
        description:
          "Generate accurate quotes in 2 clicks — AI-powered pricing, win probability scoring, and margin protection on every draft.",
        href: "/ai-quote-engine",
        icon: Sparkles,
      },
      {
        title: "Real-Time Negotiations",
        description:
          "Digital Sales Room with live, WebSocket-powered negotiation and an AI assistant that keeps your floor in play.",
        href: "/digital-sales-room",
        icon: MessageSquareText,
      },
      {
        title: "Product Configurator (CPQ)",
        description:
          "Complex products configured with real-time conflict resolution — every configuration valid, priced, and quote-ready.",
        href: "/cpq-configurator",
        icon: SlidersHorizontal,
      },
    ],
  },
  {
    stage: "TRANSACT",
    StageIcon: Receipt,
    cards: [
      {
        title: "Quote-to-Order Workflow",
        description:
          "Accepted quotes become orders in one click — with payment terms (Net 30/60/90) and real-time order tracking built in.",
        href: "/order-management",
        icon: ClipboardCheck,
      },
      {
        title: "Dynamic Pricing Engine",
        description:
          "Customer-specific pricing, tiered rules, and margin floors — and pricing adjusts dynamically as configurations change.",
        href: "/ai-quote-engine",
        icon: BadgePercent,
      },
      {
        title: "Buyer Self-Service Portal",
        description:
          "Customer portals with saved lists, quick reorder, and 24/7 self-service ordering against their pricing.",
        href: "/b2b-storefront",
        icon: Store,
      },
    ],
  },
  {
    stage: "FULFIL",
    StageIcon: Package,
    cards: [
      {
        title: "Multi-Warehouse Inventory",
        description: "Multi-warehouse inventory with real-time stock tracking, stock allocation, and transfer orders.",
        href: "/inventory-management",
        icon: Warehouse,
      },
    ],
  },
  {
    stage: "SUPPLY",
    StageIcon: Factory,
    cards: [
      {
        title: "Supplier Management",
        description:
          "5-step supplier onboarding with approval workflows, compliance tracking, and multi-currency support.",
        href: "/supplier-management",
        icon: Truck,
      },
    ],
  },
  {
    stage: "CONNECT",
    StageIcon: Link2,
    cards: [
      {
        title: "WordPress / WooCommerce Integration",
        description:
          "Transform your B2C store to B2B in minutes — customer pricing, quote requests, and real-time sync on your existing site.",
        href: "/wordpress-plugin-buyience-novacore-b2b-quote-engine",
        icon: Puzzle,
      },
      {
        title: "API-First Everything",
        description:
          "80+ API endpoints and 38 webhook events. Headless by design — build on Nova Core, don't build around it.",
        href: "/mach-architecture",
        icon: Webhook,
      },
    ],
  },
];

export default function PlatformLifecycle() {
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

        {lifecycle.map((group, gIdx) => {
          const StageIcon = group.StageIcon;
          return (
            <motion.div
              key={gIdx}
              variants={groupVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="life-group reveal in"
            >
              <div className="life-h">
                <span className="tag">
                  <StageIcon size={12} strokeWidth={2.25} aria-hidden="true" />
                  {group.stage}
                </span>
                <span className="rule"></span>
              </div>
              <div className="life-cards">
                {group.cards.map((card, cIdx) => {
                  const Icon = card.icon;
                  return (
                    <Link key={cIdx} href={card.href} className="life-card">
                      <motion.div variants={cardVariants} className="flex flex-col h-full">
                        <span className="life-icon" aria-hidden="true">
                          <Icon size={20} strokeWidth={2} />
                        </span>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                        <span className="go">
                          Explore
                          <ArrowRight size={14} strokeWidth={2.25} />
                        </span>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
