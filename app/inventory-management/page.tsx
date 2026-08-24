import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import InventoryPageContent from "./InventoryPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Multi-Warehouse Inventory Management for B2B | Buyience",
  description:
    "Real-time inventory across multiple warehouses. Low stock alerts, transfer orders, demand forecasting, and automatic reorder points. Never oversell again.",
  path: "/inventory-management",
});

export default function InventoryPage() {
  return <InventoryPageContent />;
}
