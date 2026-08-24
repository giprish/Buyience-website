import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import OrderManagementPageContent from "./OrderManagementPageContent";
import { orderManagementFaqJsonLd } from "./data/faqs";

export const metadata: Metadata = pageMetadata({
  title: "B2B Order Management System | Wholesale Automation | Buyience",
  description:
    "Streamline B2B order management. Quote-to-order conversion, approval workflows, split shipments, payment terms (Net 30/60/90), and real-time tracking.",
  path: "/order-management",
});

export default function OrderManagementPage() {
  const jsonLd = orderManagementFaqJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OrderManagementPageContent />
    </>
  );
}
