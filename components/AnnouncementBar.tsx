import React from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#170d3f] text-slate-100 select-none border-b border-white/5 py-2.5">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center flex-wrap gap-x-2 gap-y-1 text-xs font-semibold tracking-wide">
        <span className="bg-white/10 text-white px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase">
          🔔 Founder launch
        </span>
        <span className="text-slate-300">
          First 50 customers get <b className="text-white font-bold">60% off for life</b> — $99/mo instead of $249 · 19 spots left ·{" "}
          <Link
            href="/pricing"
            className="text-violet-300 hover:text-white underline underline-offset-2 transition-colors font-bold"
          >
            View Pricing
          </Link>
        </span>
      </div>
    </div>
  );
}