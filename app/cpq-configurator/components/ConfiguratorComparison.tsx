"use client";

import { Boxes, GraduationCap, Layers2, ShieldCheck, ShieldX, Sparkles, Tag, Zap } from "lucide-react";
import WhatChangesSection, { type WhatChangesItem } from "@/components/WhatChangesSection";

const items: WhatChangesItem[] = [
  {
    title: "Product count",
    from: "Dozens of separate SKUs",
    after: "1 product with option groups",
    desc: "One configurable product replaces dozens of SKU combinations.",
    Icon: Layers2,
  },
  {
    title: "Price updates",
    from: "Update each SKU individually",
    after: "Update option prices once",
    desc: "Change a price once and every configuration inherits it.",
    Icon: Tag,
  },
  {
    title: "Inventory",
    from: "Track stock per SKU combination",
    after: "Track stock per option value",
    desc: "Nine option values to manage instead of twenty-seven SKU permutations.",
    Icon: Boxes,
  },
  {
    title: "Configuration errors",
    from: "Manual validation, frequent mistakes",
    after: "Conflicts caught automatically",
    desc: "Invalid combinations you define never reach a quote.",
    Icon: ShieldX,
  },
  {
    title: "Quote speed",
    from: "Manual calculation",
    after: "Real-time pricing",
    desc: "The price updates as options are selected — no spreadsheet lookups.",
    Icon: Zap,
  },
  {
    title: "Sales rep training",
    from: "Deep product knowledge required",
    after: "Guided configuration with defaults",
    desc: "Constraints and defaults walk reps through valid builds.",
    Icon: GraduationCap,
  },
  {
    title: "Customer experience",
    from: "Overwhelming product list",
    after: "Clear options, live prices",
    desc: "Buyers configure a product instead of scrolling a catalogue.",
    Icon: Sparkles,
  },
  {
    title: "Margin protection",
    from: "Unknown cost per configuration",
    after: "Cost tracking per option",
    desc: "You see margin as the product is built, not after it is quoted.",
    Icon: ShieldCheck,
  },
];

export default function ConfiguratorComparison({ purple = false }: { purple?: boolean }) {
  return (
    <WhatChangesSection
      purple={purple}
      eyebrow="THE DIFFERENCE"
      heading="Before CPQ vs with Nova Core CPQ."
      lede="SKU sprawl and live configuration are not the same catalogue with a nicer picker. Eight things actually move."
      outcomeLabel="Aspect"
      fromLabel="Without CPQ"
      toLabel="Nova Core CPQ"
      items={items}
    />
  );
}
