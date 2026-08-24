import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = pageMetadata({
  title: "About Buyience | B2B Commerce Platform Built for Wholesalers",
  description:
    "We're building the B2B platform we wished existed. Founded in UK, Buyience helps wholesalers and distributors modernize commerce with AI-powered tools.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutPageContent />;
}
