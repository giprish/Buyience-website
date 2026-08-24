import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ConfiguratorPageContent from "./ConfiguratorPageContent";

export const metadata: Metadata = pageMetadata({
  title: "B2B Product Configurator (CPQ) | Visual Builder | Buyience",
  description:
    "Configure complex products with visual CPQ builder. Real-time pricing, conflict resolution, BOM generation. Eliminate SKU explosion and quote errors.",
  path: "/cpq-configurator",
});

export default function ConfiguratorPage() {
  return <ConfiguratorPageContent />;
}
