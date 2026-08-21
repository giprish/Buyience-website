"use client";

import React from "react";
import NarrowProseSection from "@/components/NarrowProseSection";

export default function GiftingProblem({ purple = true }: { purple?: boolean }) {
  return (
    <NarrowProseSection
      eyebrow="THE SEASON"
      heading="Your busiest season is your slowest quoting."
      purple={purple}
    >
      <p>
        Peak season in corporate gifting doesn&apos;t arrive gradually. One week it&apos;s a trickle of enquiries; the next,
        every HR team and agency in your pipeline wants a custom kit — their quantities, their branding, their
        deadline. Each request is really a bill of materials wearing a bow: box, products, personalisation, insert,
        packaging tier. Priced by hand, each one costs hours.
      </p>
      <p>
        And hours are the whole game. The supplier who replies first with a clean, complete quote usually wins — not
        the one with the better box. Meanwhile the deals you do close land late in the season, under negotiation
        pressure, and reps discount to get them over the line. Nobody sees what that did to margin until January.
      </p>
      <p>Spreadsheets didn&apos;t cause this, but they can&apos;t fix it either.</p>
      <figure
        className="mx-auto mt-12 max-w-[680px]"
        aria-label="Illustrative seasonal demand curve peaking in Q4"
      >
        <svg viewBox="0 0 680 160" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
          <path
            d="M10 130 C 90 122, 150 118, 210 112 C 280 105, 330 108, 390 96 C 450 84, 500 60, 545 28 C 570 12, 600 10, 620 24 C 645 42, 660 90, 672 128"
            stroke="#D3CCEA"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M500 60 C 520 44, 535 33, 545 28 C 570 12, 600 10, 620 24"
            stroke="#8B5CF6"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="580" cy="14" r="4" fill="#D444EE" />
          <text x="10" y="152" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
            JAN
          </text>
          <text x="330" y="152" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
            JUL
          </text>
          <text x="640" y="152" fontFamily="Space Mono" fontSize="11" fill="#5B5F76">
            DEC
          </text>
        </svg>
        <figcaption className="mt-3 text-center font-mono text-xs text-(--muted)">
          when quote speed decides revenue
        </figcaption>
      </figure>
    </NarrowProseSection>
  );
}
