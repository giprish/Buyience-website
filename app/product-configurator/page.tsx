import React from "react";
import type { Metadata } from "next";
import ConfiguratorPageContent from "./ConfiguratorPageContent";

export const metadata: Metadata = {
  title: "B2B Product Configurator (CPQ) | Visual Builder | Buyience",
  description:
    "Configure complex products with a visual CPQ builder. Real-time pricing, conflict resolution, and configured products that flow straight into quotes — one product instead of exploding SKUs.",
};

export default function ConfiguratorPage() {
  return <ConfiguratorPageContent />;
}
