import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline-gray" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center font-semibold cursor-pointer transition-all duration-150 ease-out select-none active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]/30";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#D444EE] via-[#8B5CF6] to-[#6D5DF6] !text-white hover:brightness-107 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(139,92,246,0.3)] hover:no-underline",
    secondary:
      "bg-white !text-[#7C3AED] border border-[#CBB8F5] hover:border-[#7C3AED] hover:-translate-y-[1px] hover:no-underline",
    ghost:
      "bg-white !text-[#7C3AED] border border-[#CBB8F5] hover:border-[#7C3AED] hover:-translate-y-[1px] hover:no-underline",
    "outline-gray":
      "border border-slate-300 !text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-[1px] hover:no-underline",
    text: "!text-slate-600 hover:!text-[#7C3AED] bg-transparent hover:no-underline",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-[8px]",
    md: "px-6 py-[13px] text-[15.5px] rounded-[10px]",
    lg: "px-[28px] py-[15px] text-[16.5px] rounded-[10px]",
  };

  const combinedClassName = `${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // Omit href from being passed to the button element
  const { type = "button", ...buttonProps } = props;

  return (
    <button type={type as "button" | "submit" | "reset"} className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
