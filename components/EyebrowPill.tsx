import React from "react";

type EyebrowPillProps = {
  children: React.ReactNode;
  className?: string;
  /** Show leading sparkle. Default true. */
  sparkle?: boolean;
};

/**
 * Section eyebrow pill: lavender fill, purple border, uppercase label.
 * Distinct from SectionCapsule (hero white pill + green live dot).
 */
export default function EyebrowPill({
  children,
  className = "",
  sparkle = true,
}: EyebrowPillProps) {
  return (
    <span
      className={`inline-flex h-8 w-fit max-w-full items-center gap-1.5 rounded-full border border-[#985eff] bg-[#faf8ff] px-3.5 text-[11.5px] font-semibold uppercase leading-none tracking-[0.06em] text-[#985eff] ${className}`.trim()}
    >
      {sparkle ? <span aria-hidden="true">✦</span> : null}
      {children}
    </span>
  );
}
