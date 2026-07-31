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
      className={`inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-[#E7DEFB] bg-white px-3.5 py-[7px] text-[13px] font-bold leading-none text-[#6E2CF4] shadow-[0_4px_14px_rgba(110,44,244,0.08)] ${className}`}
    >
      {showIcon && (
        <span
          className="h-[7px] w-[7px] shrink-0 rounded-full bg-[#16A34A]"
          aria-hidden="true"
        />
      )}
      <span className="min-w-0">{children}</span>
    </span>
  );
}
