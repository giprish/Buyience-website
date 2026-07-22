import React from "react";
import { Sparkles } from "lucide-react";

interface SectionCapsuleProps {
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?: "soft" | "outline";
}

/**
 * Framer buyience.com hero pill.
 * Spec: ~32px tall, 1px border rgb(152,94,255), pale lavender fill, 14px x-padding, 6px icon gap.
 */
export default function SectionCapsule({
  children,
  className = "",
  showIcon = true,
  variant = "outline",
}: SectionCapsuleProps) {
  const variants = {
    // soft kept for API compat — same Framer pill as outline
    soft: "border-[#985eff] bg-[#faf8ff] text-[#985eff]",
    outline: "border-[#985eff] bg-[#faf8ff] text-[#985eff]",
  };

  return (
    <span
      className={`inline-flex h-8 w-fit max-w-full items-center gap-1.5 rounded-full border px-3.5 text-[11.5px] font-semibold uppercase leading-none tracking-[0.06em] ${variants[variant]} ${className}`}
    >
      {showIcon && (
        <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#985eff]" strokeWidth={2.25} aria-hidden="true" />
      )}
      <span className="min-w-0">{children}</span>
    </span>
  );
}
