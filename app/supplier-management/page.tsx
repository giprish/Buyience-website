import React from "react";
import type { Metadata } from "next";
import SupplierPageContent from "./SupplierPageContent";

export const metadata: Metadata = {
  title: "B2B Supplier Management Software | Purchase Orders | Buyience",
  description:
    "Structured 5-step supplier onboarding, compliance certificates with automatic expiry status, logistics and delivery zone configuration, and suppliers linked directly to purchase orders.",
};

export default function SupplierPage() {
  return <SupplierPageContent />;
}
