"use client";

import React from "react";
import { Cloud, Database, Lock, Settings2, Sparkles, Webhook, Zap } from "lucide-react";
import CapabilitiesChipGridSection from "@/components/CapabilitiesChipGridSection";

const PRINCIPLES = [
  {
    title: "API-first design",
    description:
      "Everything accessible via RESTful APIs. Build your storefront with any technology. Connect ERP, CRM, and accounting systems through the API.",
    icon: <Webhook size={20} strokeWidth={2} />,
  },
  {
    title: "Multi-tenancy",
    description:
      "True SaaS multi-tenancy with a dedicated database per tenant — not shared tables. Custom branding and tenant-scoped API keys.",
    icon: <Database size={20} strokeWidth={2} />,
  },
  {
    title: "Real-time capabilities",
    description:
      "Live updates across the platform. WebSocket integration for chat and negotiations. Instant inventory and price updates.",
    icon: <Zap size={20} strokeWidth={2} />,
  },
  {
    title: "AI-powered intelligence",
    description:
      "AI scoring in the Quote Engine — win probability across 11+ factors, margin floors, and pricing recommendations.",
    icon: <Sparkles size={20} strokeWidth={2} />,
  },
  {
    title: "Auto-scaling infrastructure",
    description:
      "Infrastructure scales automatically with demand. Multi-warehouse support and enterprise performance at every tier.",
    icon: <Cloud size={20} strokeWidth={2} />,
  },
  {
    title: "Security first",
    description: "Token-based authentication, role-based access control, and encryption at rest and in transit.",
    icon: <Lock size={20} strokeWidth={2} />,
  },
  {
    title: "Flexible configuration",
    description:
      "Adapt to your process without code changes. Configurable workflows, custom pricing rules, extensible product configurator.",
    icon: <Settings2 size={20} strokeWidth={2} />,
  },
];

export default function MachPrinciplesSection({ purple = false }: { purple?: boolean }) {
  return (
    <CapabilitiesChipGridSection
      eyebrow="NOVA CORE PRINCIPLES"
      heading="Beyond MACH: what powers Nova Core."
      lede="Nova Core follows MACH principles and extends them with capabilities purpose-built for B2B commerce."
      items={PRINCIPLES}
      purple={purple}
    />
  );
}
