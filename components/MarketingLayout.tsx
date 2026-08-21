import React from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA, { type FinalCTAProps } from "@/components/FinalCTA";

export type MarketingLayoutProps = {
  children: React.ReactNode;
  mainClassName?: string;
  /** true/omitted = default Final CTA; object = override props; false = hide */
  cta?: boolean | FinalCTAProps;
};

export default function MarketingLayout({
  children,
  mainClassName = "",
  cta = true,
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-svh flex-col bg-white">
      <AnnouncementBar />
      <Navbar />
      <main className={`min-w-0 flex-grow overflow-x-clip ${mainClassName}`.trim()}>
        {children}
        {cta !== false && <FinalCTA {...(cta === true ? {} : cta)} />}
      </main>
      <Footer />
    </div>
  );
}
