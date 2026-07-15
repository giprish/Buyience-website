import React from "react";
import SectionCapsule from "./SectionCapsule";

interface SectionHeaderProps {
  capsule: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}

/** Shared non-hero section intro: capsule + heading + optional lede */
export default function SectionHeader({
  capsule,
  title,
  description,
  className = "",
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-0 ${alignClass} ${className}`}>
      <SectionCapsule>{capsule}</SectionCapsule>
      <h2 className="mt-4 mb-0">{title}</h2>
      {description ? <p className="lede mt-3 mb-0">{description}</p> : null}
    </div>
  );
}
