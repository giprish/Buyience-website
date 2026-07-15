"use client";

import React from "react";
import Link from "next/link";
import { useCurrency } from "@/components/CurrencyProvider";

export default function AnnouncementBar() {
  const { format, prices } = useCurrency();

  return (
    <div className="announcement-bar relative w-full overflow-hidden select-none">
      <div className="announcement-bar-glow" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-3 text-center sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1 sm:px-5 sm:py-2.5">
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/25 bg-white/12 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.08em]">
          <span aria-hidden="true" className="text-[9px] opacity-90">
            ✦
          </span>
          Founder launch
        </span>
        <p className="max-w-[20rem] text-[12.5px] font-medium leading-relaxed tracking-wide text-white/80 sm:max-w-none sm:text-[13px] sm:leading-snug">
          lock in <b className="font-bold text-white">{format(prices.growMonthly)}/mo</b>
          <span className="hidden sm:inline"> before standard pricing rises to $249</span>
          <span className="mx-1.5 text-white/35" aria-hidden="true">
            ·
          </span>
          <b className="font-semibold text-white">31 of 50</b> spots taken
          <span className="mx-1.5 text-white/35" aria-hidden="true">
            ·
          </span>
          <Link
            href="/pricing"
            className="font-semibold whitespace-nowrap text-white underline decoration-white/40 underline-offset-[3px] transition-colors hover:text-violet-200 hover:decoration-violet-200"
          >
            View Pricing
          </Link>
        </p>
      </div>
    </div>
  );
}
