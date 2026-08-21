import React from "react";
import type { Metadata } from "next";
import OrderManagementPageContent from "./OrderManagementPageContent";

export const metadata: Metadata = {
  title: "B2B Order Management System | Wholesale Automation",
  description:
    "Quote-to-order lifecycle for wholesalers and distributors. Track orders, payment terms, and fulfillment from one B2B commerce platform.",
};

export default function OrderManagementPage() {
  return <OrderManagementPageContent />;
}
