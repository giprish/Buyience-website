import React from "react";

type EyebrowPillProps = {
  children: React.ReactNode;
  className?: string;
  /** Show leading Framer sparkle. Default true. */
  sparkle?: boolean;
};

/** Phosphor Sparkle (fill) — matches buyience.com INTEGRATIONS peal. */
function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      aria-hidden="true"
      className={`h-3 w-3 shrink-0 ${className}`.trim()}
      fill="currentColor"
    >
      <path d="M208,144a15.78,15.78,0,0,1-10.42,14.94L146,178l-19,51.62a15.92,15.92,0,0,1-29.88,0L78,178l-51.62-19a15.92,15.92,0,0,1,0-29.88L78,110l19-51.62a15.92,15.92,0,0,1,29.88,0L146,110l51.62,19A15.78,15.78,0,0,1,208,144ZM152,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H184V16a8,8,0,0,0-16,0V32H152a8,8,0,0,0,0,16Zm88,32h-8V72a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0V96h8a8,8,0,0,0,0-16Z" />
    </svg>
  );
}

/**
 * Section eyebrow peal: white fill, purple border, deep-purple label + sparkle.
 * Distinct from SectionCapsule (hero white pill + green live dot).
 * Size is our site default (32px / 11.5px); icon/colors match Framer INTEGRATIONS.
 */
export default function EyebrowPill({
  children,
  className = "",
  sparkle = true,
}: EyebrowPillProps) {
  return (
    <span
      className={`inline-flex h-8 w-fit max-w-full items-center gap-1.5 rounded-full border border-[#985eff] bg-white px-3.5 text-[11.5px] font-semibold uppercase leading-none tracking-[0.06em] text-[#6818C4] ${className}`.trim()}
    >
      {sparkle ? <SparkleIcon /> : null}
      {children}
    </span>
  );
}
