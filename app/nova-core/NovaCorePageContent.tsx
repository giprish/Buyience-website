"use client";

import React from "react";
import {
  ClipboardList,
  FileText,
  LineChart,
  MessagesSquare,
  Rocket,
  Sparkles,
  SlidersHorizontal,
  Truck,
  Upload,
  Warehouse,
} from "lucide-react";
import MarketingLayout from "@/components/MarketingLayout";
import ChallengeSection from "@/components/ChallengeSection";
import CapabilitiesChipGridSection from "@/components/CapabilitiesChipGridSection";
import StepRailSection from "@/components/StepRailSection";
import SplitFeatureSection from "@/components/SplitFeatureSection";
import WhatChangesCardsSection from "@/components/WhatChangesCardsSection";
import FaqSection from "@/components/FaqSection";
import { MiniUi, MiniRow } from "@/components/MiniUi";
import NovaCoreHero from "./components/NovaCoreHero";

const MODULES = [
  {
    title: "AI Quote Engine",
    description:
      "Drafts a complete quote from a buyer's request — priced against your rates and floors, with a win score attached.",
    icon: <Sparkles className="size-5" strokeWidth={2.25} />,
    href: "/ai-quote-engine",
    linkLabel: "Explore →",
  },
  {
    title: "CPQ Configurator",
    description:
      "Configurable products resolve to valid option combinations and a real bill of materials, so the price is derived rather than guessed.",
    icon: <SlidersHorizontal className="size-5" strokeWidth={2.25} />,
    href: "/cpq-configurator",
    linkLabel: "Explore →",
  },
  {
    title: "Digital Sales Room",
    description:
      "Negotiation moves into a shared room instead of an email thread — counters, versions, and live margin in one place.",
    icon: <MessagesSquare className="size-5" strokeWidth={2.25} />,
    href: "/digital-sales-room",
    linkLabel: "Explore →",
  },
  {
    title: "Order Management",
    description:
      "An accepted quote becomes an order without re-entry, then carries its own payment terms and fulfilment state.",
    icon: <ClipboardList className="size-5" strokeWidth={2.25} />,
    href: "/order-management",
    linkLabel: "Explore →",
  },
  {
    title: "Inventory Management",
    description:
      "Stock across warehouses, safety-stock thresholds, and transfers — the same availability the quote engine reads.",
    icon: <Warehouse className="size-5" strokeWidth={2.25} />,
    href: "/inventory-management",
    linkLabel: "Explore →",
  },
  {
    title: "Supplier Management",
    description:
      "Purchase orders, approval workflows, and supplier records sit next to the demand that created them.",
    icon: <Truck className="size-5" strokeWidth={2.25} />,
    href: "/supplier-management",
    linkLabel: "Explore →",
  },
];

const FAQS = [
  {
    q: "Is Nova Core the same thing as Buyience?",
    a: "Buyience is the company; Nova Core is the platform it builds. Every module you see on this site — quoting, CPQ, sales rooms, orders, inventory, suppliers — is part of Nova Core rather than a separate product you integrate.",
  },
  {
    q: "Do I have to adopt every module at once?",
    a: "No. Most teams start with quoting and add orders, inventory, or suppliers as they go. Because it is one core, switching a module on does not require a migration — the customers, catalog, and pricing are already there.",
  },
  {
    q: "Does Nova Core replace my Shopify or WooCommerce store?",
    a: "It works alongside it. Nova Core adds B2B capability — customer-specific pricing, quote requests, buyer portals, real-time sync — behind the store you already run. You can also use the headless B2B storefront it generates for you.",
  },
  {
    q: "Is it really API-first, or is that a roadmap item?",
    a: "It is the architecture. Everything the UI does is available over 80+ REST endpoints, with 38 webhook events so your ERP or WMS reacts instead of polling.",
  },
  {
    q: "How long does it take to go live?",
    a: "Signup takes minutes and most businesses are running real quotes within two weeks. There is no consultant-led implementation phase, because the storefront, portal, and workflows are generated rather than built.",
  },
  {
    q: "Where do pricing rules and margin floors live?",
    a: "In the core, not in a module. Customer rates, volume breaks, and floors are resolved the same way whether a rep writes the quote or the AI drafts it.",
  },
];

export default function NovaCorePageContent() {
  return (
    <MarketingLayout
      mainClassName="nova-page platform-page"
      cta={{
        title: (
          <>
            Run the whole operation on{" "}
            <span className="final-card-accent">one core.</span>
          </>
        ),
        description:
          "Start a 14-day trial with every module switched on. No card required, no implementation project.",
        primaryAction: {
          label: "Start For Free",
          href: "https://app.buyience.com/register",
          variant: "primary",
        },
        secondaryAction: {
          label: "See pricing",
          href: "/pricing",
          variant: "ghost",
        },
        purple: true,
      }}
    >
      <NovaCoreHero />

      <ChallengeSection
        eyebrow="WHY ONE CORE"
        heading="A stack of tools is not a platform."
        lede="Six systems can each be good and still leave you reconciling by hand, because none of them agrees on what a customer pays or what is actually in stock."
        cards={[
          {
            marker: "01",
            title: "Every tool keeps its own truth",
            description:
              "Quotes in a spreadsheet, stock in the ERP, orders in an inbox. When they disagree, a person becomes the integration.",
          },
          {
            marker: "02",
            title: "Syncing becomes the real project",
            description:
              "Each new tool adds another connector to babysit, and the roadmap quietly turns into keeping systems in step.",
          },
          {
            marker: "03",
            title: "Buyers feel the seams",
            description:
              "A price quoted Monday, stock promised Tuesday, an invoice matching neither. Trust leaks one exception at a time.",
          },
        ]}
        purple
      />

      <CapabilitiesChipGridSection
        eyebrow="INSIDE NOVA CORE"
        heading="Six modules. One core."
        lede="Each is a full product on its own — and they all read the same customers, catalog, pricing, and stock."
        items={MODULES}
      />

      <StepRailSection
        eyebrow="HOW TO GO LIVE"
        heading="Live in weeks, not quarters."
        lede="No implementation phase to survive first — the storefront, portal, and workflows are generated for you."
        steps={[
          {
            chip: "Day 1",
            title: "Open a trial",
            desc: "Sign up, invite your team, and get a hosted B2B storefront generated from your account.",
            Icon: Rocket,
          },
          {
            chip: "Week 1",
            title: "Load what you sell",
            desc: "Import products, customers, contract rates, and stock levels by CSV or API.",
            Icon: Upload,
          },
          {
            chip: "Week 2",
            title: "Quote for real",
            desc: "Send AI-drafted quotes against your own floors, then negotiate them in a Sales Room.",
            Icon: FileText,
            live: true,
          },
          {
            chip: "Live",
            title: "Run the operation",
            desc: "Accepted quotes become orders, stock moves, and POs go out — without leaving the core.",
            Icon: LineChart,
            won: true,
          },
        ]}
        purple
      />

      <SplitFeatureSection
        header={{
          eyebrow: "SHARED BY DESIGN",
          title: "One rulebook, read by every module.",
          description:
            "Shared data is the whole point. Pricing and availability are resolved once, in the core, so no module can quietly disagree with another.",
        }}
        rows={[
          {
            id: "pricing",
            eyebrow: "PRICING",
            title: "One price book, every channel.",
            description: (
              <>
                <p>
                  Contract rates, volume breaks, and margin floors live in the core — so a quote, a counter-offer in
                  the Sales Room, and the storefront all resolve the same number for the same buyer.
                </p>
                <p>
                  <a className="cap-link" href="/pricing-and-margin-control">
                    See how pricing and margin control works →
                  </a>
                </p>
              </>
            ),
            visual: (
              <MiniUi label="Price resolution for a repeat buyer">
                <MiniRow tag="TIER" tone="done" trailing={<span className="font-bold">Gold</span>}>
                  Contract rate applied
                </MiniRow>
                <MiniRow tag="QTY" tone="default" trailing={<span className="font-bold">600 units</span>}>
                  Volume break resolved at the line
                </MiniRow>
                <MiniRow tag="FLOOR" tone="active" trailing={<span className="font-bold">Enforced</span>}>
                  Margin floor checked before send
                </MiniRow>
              </MiniUi>
            ),
          },
          {
            id: "api",
            eyebrow: "API-FIRST",
            title: "Headless by architecture, not by add-on.",
            description: (
              <>
                <p>
                  Every capability is available over REST, with webhooks so your ERP, WMS, or marketing stack reacts
                  the moment something changes instead of polling for it.
                </p>
                <p>
                  <a className="cap-link" href="/mach-architecture">
                    Read about the MACH architecture →
                  </a>
                </p>
              </>
            ),
            visual: (
              <MiniUi label="Nova Core API surface">
                <MiniRow tag="POST" tone="active" trailing={<span className="font-bold">201</span>}>
                  /quotes — draft a priced quote
                </MiniRow>
                <MiniRow tag="GET" tone="default" trailing={<span className="font-bold">200</span>}>
                  /inventory — availability by warehouse
                </MiniRow>
                <MiniRow tag="HOOK" tone="done" trailing={<span className="font-bold">order.paid</span>}>
                  Fires the moment payment clears
                </MiniRow>
              </MiniUi>
            ),
          },
        ]}
      />

      <WhatChangesCardsSection
        heading="What changes when it is one core."
        items={[
          {
            title: "Nothing gets re-keyed",
            desc: "An accepted quote becomes an order with its own terms — no copying lines between systems.",
          },
          {
            title: "One number, everywhere",
            desc: "Quote, counter-offer, storefront, and invoice resolve pricing from the same book.",
          },
          {
            title: "Stock you can promise",
            desc: "Quotes price against real multi-warehouse availability, not last night's export.",
          },
          {
            title: "AI inside the rules",
            desc: "Drafts respect the same floors and customer rates your reps work within.",
          },
          {
            title: "Integrations stop being the job",
            desc: "80+ endpoints and 38 webhooks replace the connectors you were maintaining by hand.",
          },
          {
            title: "One place to look",
            desc: "Quotes, orders, stock, and suppliers sit in one system, so questions have one answer.",
          },
        ]}
        purple
      />

      <FaqSection eyebrow="QUESTIONS, ANSWERED" title="Nova Core FAQs" items={FAQS} />
    </MarketingLayout>
  );
}
