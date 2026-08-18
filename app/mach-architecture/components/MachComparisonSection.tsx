"use client";

import {
  ArrowUpRight,
  Cable,
  Clock3,
  Code2,
  DatabaseZap,
  Layers2,
  Shuffle,
  SwatchBook,
} from "lucide-react";
import WhatChangesSection, { type WhatChangesItem } from "@/components/WhatChangesSection";

const items: WhatChangesItem[] = [
  {
    title: "Frontend",
    from: "Locked to platform templates",
    after: "Any technology",
    desc: "React, Vue, custom frontend - your backend stays the same.",
    Icon: SwatchBook,
  },
  {
    title: "Integrations",
    from: "Limited connectors, custom dev",
    after: "API-first, connect anything",
    desc: "Every capability is exposed through APIs and webhooks.",
    Icon: Cable,
  },
  {
    title: "Updates",
    from: "Major versions, migration required",
    after: "Continuous updates",
    desc: "No disruptive migration projects to stay current.",
    Icon: DatabaseZap,
  },
  {
    title: "Scaling",
    from: "Manual capacity planning",
    after: "Auto-scaling infrastructure",
    desc: "Elastic backend capacity without infrastructure firefighting.",
    Icon: Layers2,
  },
  {
    title: "Customization",
    from: "Code changes, version conflicts",
    after: "Configuration-first",
    desc: "Adapt business logic with configuration, not hard forks.",
    Icon: Code2,
  },
  {
    title: "Multi-channel",
    from: "Separate instances per channel",
    after: "One backend, unlimited frontends",
    desc: "Run storefronts, portals, and channels from one core system.",
    Icon: Shuffle,
  },
  {
    title: "Vendor lock-in",
    from: "High switching cost",
    after: "Data portable",
    desc: "API-first architecture keeps integration boundaries clean.",
    Icon: ArrowUpRight,
  },
  {
    title: "Time to market",
    from: "6-12 months implementation",
    after: "Weeks to go live",
    desc: "Ship faster with composable building blocks.",
    Icon: Clock3,
  },
];

export default function MachComparisonSection() {
  return (
    <WhatChangesSection
      eyebrow="THE DIFFERENCE"
      heading="Traditional platform vs Nova Core."
      outcomeLabel="Aspect"
      fromLabel="Traditional platform"
      toLabel="Nova Core (MACH)"
      items={items}
    />
  );
}
