import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import HomePageContent from "./home/HomePageContent";

export const metadata: Metadata = pageMetadata({
  title: "B2B Commerce Platform with AI Quoting | Buyience Nova Core",
  description:
    "AI-powered B2B commerce platform for wholesalers & distributors. Customer-specific pricing, real-time inventory, and quote generation. Launch in days.",
  path: "/",
});

export default function Home() {
  return <HomePageContent />;
}
