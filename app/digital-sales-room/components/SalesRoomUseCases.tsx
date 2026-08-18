"use client";

import React from "react";
import { Briefcase, MessageSquare, Users, Wrench } from "lucide-react";
import SplitCopyCards from "@/components/SplitCopyCards";

export default function SalesRoomUseCases({ purple = false }: { purple?: boolean }) {
  return (
    <SplitCopyCards
      purple={purple}
      eyebrow="Use Cases"
      heading="Built for how B2B actually negotiates."
      body={
          <p style={{ margin: 0 }}>
          Every negotiation scenario — price pushback, bulk terms, multi-stakeholder sign-off, or a last-minute spec question — handled in one place, with the margin floor enforced throughout.
        </p>
      }
      cards={[
        {
          title: "Price negotiations",
          description:
            "The buyer wants a discount, you need margin. The back-and-forth happens in minutes, with structured offer cards making every proposal crystal clear — and the floor enforced throughout.",
          icon: Briefcase,
        },
        {
          title: "Bulk order discussions",
          description:
            "Large orders need special terms. Discuss volume discounts, delivery schedules and payment terms in one place, with full context — and let the AI surface the volume-break that works for both sides.",
          icon: MessageSquare,
        },
        {
          title: "Multi-stakeholder approvals",
          description:
            "Procurement needs finance to sign off. Invite them in; they see the full history and approve in-thread instead of chasing forwarded emails.",
          icon: Users,
        },
        {
          title: "Product clarifications",
          description:
            "Questions about specs, compatibility or lead times get answered instantly, with attachments and links — no separate email chain.",
          icon: Wrench,
        },
      ]}
    />
  );
}
