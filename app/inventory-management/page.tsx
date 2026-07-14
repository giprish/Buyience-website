import React from "react";
import type { Metadata } from "next";
import InventoryPageContent from "./InventoryPageContent";

export const metadata: Metadata = {
  title: "Multi-Warehouse Inventory Management for B2B | Buyience",
  description:
    "Real-time B2B inventory management across multiple warehouses. Low stock alerts, one-click purchase orders, inter-warehouse transfer orders, and built-in supplier management.",
};

export default function InventoryPage() {
  return <InventoryPageContent />;
}
