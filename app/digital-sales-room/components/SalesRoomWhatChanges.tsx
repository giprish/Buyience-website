"use client";

import { Layers2, ScrollText, ShieldCheck, Timer } from "lucide-react";
import WhatChangesSection, { type WhatChangesItem } from "@/components/WhatChangesSection";

const items: WhatChangesItem[] = [
  {
    title: "Time to close",
    from: "Days of email rounds",
    after: "Minutes, not days",
    desc: "Live negotiation instead of inbox ping-pong.",
    Icon: Timer,
  },
  {
    title: "Margin protected",
    from: "Floor missed in the thread",
    after: "Zero floor errors",
    desc: "Every counter checked against your floor.",
    Icon: ShieldCheck,
  },
  {
    title: "No version confusion",
    from: "Four quote PDFs",
    after: "One shared room",
    desc: "Both sides on the same live quote.",
    Icon: Layers2,
  },
  {
    title: "Full audit trail",
    from: "Lost in the inbox",
    after: "Every offer logged",
    desc: "A complete record for compliance and handoffs.",
    Icon: ScrollText,
  },
];

export default function SalesRoomWhatChanges({ purple = false }: { purple?: boolean }) {
  return (
    <WhatChangesSection
      purple={purple}
      eyebrow="WHAT CHANGES"
      heading="What changes when the negotiation moves live."
      lede="The email deal and the live room are not the same process with a nicer UI. Four things actually move."
      outcomeLabel="Outcome"
      fromLabel="Email"
      toLabel="Live room"
      items={items}
    />
  );
}
