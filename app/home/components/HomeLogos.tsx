import React from "react";
import StackLogoMarquee from "@/app/components/StackLogoMarquee";

export default function HomeLogos() {
  return (
    <section className="home-logos">
      <div className="container">
        <p className="eyebrow">Connects with the tools you already run</p>
        <StackLogoMarquee />
      </div>
    </section>
  );
}
