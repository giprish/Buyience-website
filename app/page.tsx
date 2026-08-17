import React from "react";
import type { Metadata } from "next";
import HomePageContent from "./home/HomePageContent";

export const metadata: Metadata = {
  title: "B2B Commerce Platform with AI Quoting",
  description:
    "AI-powered B2B commerce platform for wholesalers and distributors. Quotes that price themselves, live negotiation, and margin intelligence — launch in days.",
};

export default function Home() {
  return <HomePageContent />;
}
