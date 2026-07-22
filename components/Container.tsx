import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-[35px] ${className}`}>
      {children}
    </div>
  );
}
