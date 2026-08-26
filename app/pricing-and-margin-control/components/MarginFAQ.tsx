"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";

export default function MarginFAQ() {
  const faqs = [
    {
      q: "Can I set different margin floors per product or customer?",
      a: "Yes. Floors and targets can be set globally, then overridden per product, customer, or deal. A gold-tier contract can sit above the default floor; a new buyer can sit on list until you decide otherwise. The engine resolves the most specific rule at quote time.",
    },
    {
      q: "Does the AI have to respect the same floors as my sales team?",
      a: "Yes — that's the point. The Quote Engine drafts against the same customer rates, volume breaks, and floors your reps see. There is one price book, not a human book and an AI book.",
    },
    {
      q: "What happens if someone tries to send below the floor?",
      a: "The send is blocked or flagged, depending on how you configure overrides. A below-floor price cannot leave as a silent exception. If you allow an override, it is a logged decision with who, when, and why.",
    },
    {
      q: "Do volume breaks update during a live negotiation?",
      a: "Yes. Quantity changes in the Digital Sales Room recalculate line price and remaining margin immediately, including whether the new break would breach the floor.",
    },
    {
      q: "How do customer-specific prices get into the system?",
      a: "Import contract rates, map customers to a price list, or capture the last agreed price from a won quote. Returning buyers load that history automatically so the next draft does not restart from list.",
    },
    {
      q: "Is this a separate product from the AI Quote Engine?",
      a: "No. Pricing & Margin Control is the rulebook the Quote Engine, Sales Room, configurator, and storefront all read. You configure it once; every quote path uses it.",
    },
  ];

  return (
    <FaqSection
      eyebrow="QUESTIONS, ANSWERED"
      title="Pricing & Margin Control FAQs"
      items={faqs}
      card
    />
  );
}
