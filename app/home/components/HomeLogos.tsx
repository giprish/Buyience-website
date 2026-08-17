import React from "react";
import StackLogoMarquee from "@/app/components/StackLogoMarquee";

export default function HomeLogos({ purple = false }: { purple?: boolean }) {
  return (
    <section className={`home-logos ${purple ? "bg-(--surface)" : ""}`.trim()}>
      <div className="container">
        <p className="eyebrow">Connects with the tools you already run</p>
        <StackLogoMarquee />
      </div>
    </section>
  );
}
