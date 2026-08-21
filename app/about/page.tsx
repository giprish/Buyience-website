import React from "react";
import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About Buyience | B2B Commerce Platform Built for Wholesalers",
  description:
    "We're building the B2B platform we wished existed. Founded in UK, Buyience helps wholesalers and distributors modernize commerce with AI-powered tools.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
