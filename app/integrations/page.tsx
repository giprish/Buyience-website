import React from "react";
import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntegrationsHero from "./components/IntegrationsHero";
import IntegrationsDirectory from "./components/IntegrationsDirectory";
import HowItConnects from "./components/HowItConnects";
import IntegrationsFAQ from "./components/IntegrationsFAQ";
import IntegrationsFinalCTA from "./components/IntegrationsFinalCTA";

export const metadata: Metadata = {
  title: "Integrations | Connect Payments, Commerce & Marketing Tools | Buyience",
  description:
    "Connect Nova Core to Stripe, Razorpay, PayPal, Shopify, WooCommerce, Klaviyo, Brevo, Google Ads, Shiprocket and more — plus 80+ REST endpoints and 38 webhooks to build your own.",
};

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Navbar */}
      <Navbar />

      {/* Scoped Content Block */}
      <main className="integrations-page flex-grow">
        <IntegrationsHero />
        <IntegrationsDirectory />
        <HowItConnects />
        <IntegrationsFAQ />
        <IntegrationsFinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
