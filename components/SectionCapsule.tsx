import React from "react";
import { Sparkles } from "lucide-react";

interface SectionCapsuleProps {
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?: "soft" | "outline";
}

/** Framer-style pill label used above non-hero section headings */
export default function SectionCapsule({
  children,
  className = "",
  showIcon = true,
  variant = "outline",
}: SectionCapsuleProps) {
  const variants = {
    soft: "bg-[#f5f3ff] border border-transparent text-[#7c3aed]",
    outline: "bg-white border border-[#c4b5fd] text-[#7c3aed]",
  };

  return (
    <span
      className={`inline-flex max-w-full flex-wrap items-center gap-1.5 rounded-full px-3 py-[7px] text-left text-[11px] font-semibold uppercase tracking-[0.04em] sm:px-3.5 sm:text-[11.5px] sm:tracking-[0.06em] ${variants[variant]} ${className}`}
    >
      {showIcon && <Sparkles className="h-3 w-3 shrink-0 text-[#7c3aed]" strokeWidth={2.25} aria-hidden="true" />}
      <span className="min-w-0 break-words">{children}</span>
    </span>
  );
}
