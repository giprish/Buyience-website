"use client";

import React from "react";
import Button from "@/components/Button";
import { useCurrency } from "@/components/CurrencyProvider";

export default function SalesRoomHero() {
  const { format } = useCurrency();

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        <div className="flex flex-col text-left">
          <p className="eyebrow">REAL-TIME B2B NEGOTIATION</p>
          <h1>
            The <span className="grad-text">digital sales room</span> where B2B deals close in minutes — not email
            threads.
          </h1>
          <p className="lede">
            The Digital Sales Room brings buyers and sellers into one shared workspace. Negotiate the quote, share
            documents, and close the deal in minutes — not days of back-and-forth. With an AI copilot in the room that
            knows your margin floor.
          </p>
          <div className="cta-row">
            <Button variant="primary" size="lg" href="/contact">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" href="/contact">
              Request Demo
            </Button>
          </div>
          <p className="trust-micro">
            14-day trial<span className="dot" aria-hidden="true">·</span>No card required
          </p>
        </div>

        <div className="room" aria-label="A live negotiation in the Digital Sales Room">
          <div className="room-head">
            <div>
              <b>Sales Room · Q-2048</b>
              <div className="st">● Buyer online · typing…</div>
            </div>
            <div className="presence" aria-label="Participants">
              <span className="av on">RA</span>
              <span className="av on">AL</span>
              <span className="av">AI</span>
            </div>
          </div>
          <div className="pin">📌 Pinned: Delivery must land before 20-May for the retail launch window.</div>
          <div className="msg them">
            <span className="who">RACHEL · BUYER</span>Morning! We reviewed Round 2. The waffle robe and the graphic
            tee are still a bit high for our margins.
          </div>
          <div className="ai-card">
            <div className="ai-h">✦ AI SUGGESTION · based on buyer&apos;s target costs &amp; your margin floor</div>
            <p>
              Counter the robe at <b>{format(20.5, 2)}</b> (24.6% margin) and hold the tee at{" "}
              <b>{format(8.8, 2)}</b>. This raises win probability to <b>81%</b> while staying above your{" "}
              <b>22% floor</b>.
            </p>
            <div className="acts">
              <span>⇄ Build counter from this</span>
              <span>Insert as reply</span>
            </div>
          </div>
          <div className="msg you">
            <span className="who">ALEX · YOU</span>Here&apos;s where I can land: robe {format(20.5, 2)}, tee holds at{" "}
            {format(8.8, 2)}. Sending a formal counter now.
          </div>
          <div className="msg them">
            <span className="who">RACHEL · BUYER</span>That works for the robe. Can you do {format(8.4, 2)} on the tee if
            we bump qty to 30?
          </div>
          <p className="typing">Rachel is typing…</p>
        </div>
      </div>
    </header>
  );
}
