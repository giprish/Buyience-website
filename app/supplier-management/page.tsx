import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import SupplierPageContent from "./SupplierPageContent";

export const metadata: Metadata = pageMetadata({
  title: "B2B Supplier Management Software | Purchase Orders | Buyience",
  description:
    "Manage suppliers and purchase orders in one platform. Vendor catalogs, approval workflows, cost tracking, and supplier performance analytics for B2B.",
  path: "/supplier-management",
});

export default function SupplierPage() {
  return <SupplierPageContent />;
}
