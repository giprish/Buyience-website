import React from "react";

interface SectionCapsuleProps {
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  variant?: "soft" | "outline";
}

/**
 * New-page hero capsule: white pill, green live dot, purple sentence-case label.
 */
export default function SectionCapsule({
  children,
  className = "",
  showIcon = true,
  variant = "outline",
}: SectionCapsuleProps) {
  // soft kept for API compat — same look as outline
  void variant;

  return (
    <span
      className={`inline-flex w-fit max-w-full items-center gap-1.5 rounded-full border border-[#E7DEFB] bg-white px-2.5 py-1 text-[12px] font-bold leading-none text-[#6E2CF4] shadow-[0_4px_14px_rgba(110,44,244,0.08)] sm:gap-2 sm:px-3.5 sm:py-[7px] sm:text-[13px] ${className}`}
    >
      {showIcon && (
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#16A34A] sm:h-[7px] sm:w-[7px]"
          aria-hidden="true"
        />
      )}
      <span className="min-w-0">{children}</span>
    </span>
  );
}
