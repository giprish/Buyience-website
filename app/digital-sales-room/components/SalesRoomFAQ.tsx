"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";

export default function SalesRoomFAQ() {
  const faqs = [
    {
      q: "What is a Digital Sales Room?",
      a: "A Digital Sales Room is a private, shared online workspace where a buyer and seller negotiate a specific quote together in real time — with the quote items, prices, and current offer visible to both sides, live chat, one-click counter-offers, and a complete audit trail of everything agreed.",
    },
    {
      q: "How is it different from negotiating over email?",
      a: "Email scatters the deal across threads, attachments and versions, and every reply can take a day. In the Sales Room, both parties see the same live quote, counters are structured cards instead of prose, presence and typing indicators keep momentum up, and the AI copilot suggests floor-safe moves in context — so deals close in minutes rather than days.",
    },
    {
      q: "Can my team and the buyer's team both join?",
      a: "Yes. Rooms support multiple participants on both sides — colleagues, managers, procurement, finance. Everyone sees the same conversation and history, and approvals happen in-thread instead of over forwarded emails.",
    },
    {
      q: "Is the negotiation private and secure?",
      a: "Each room is private to the deal's participants and encrypted in transit, with a full activity log. Your negotiations — and your margins — stay confidential to the room.",
    },
    {
      q: "What happens when both sides agree?",
      a: "One click to accept — the agreed quote converts to an order automatically, with the final terms captured on the audit trail. No re-keying, no 'let me send a confirmation email.'",
    },
    {
      q: "Does it work with the AI Quote Engine?",
      a: "They're built together. The Quote Engine prices and scores the quote before it's sent; in the Sales Room, the same intelligence becomes a live copilot — suggesting counters with margin and win-probability shown, spotting volume-break opportunities in the conversation, and enforcing your margin floor on every move.",
    },
  ];

  return (
    <FaqSection
      eyebrow="QUESTIONS, ANSWERED"
      title="Digital Sales Room FAQs"
      items={faqs}
      className="challenge"
    />
  );
}
