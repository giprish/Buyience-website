import React from "react";
import type { Metadata } from "next";
import SimpleMarketingPage from "@/components/SimpleMarketingPage";

export const metadata: Metadata = {
  title: "B2B Order Management System | Wholesale Automation",
  description:
    "Quote-to-order lifecycle for wholesalers and distributors. Track orders, payment terms, and fulfillment from one B2B commerce platform.",
};

export default function OrderManagementPage() {
  return (
    <SimpleMarketingPage
      capsule="Capabilities"
      title="B2B Order Management that closes the loop"
      description="Move from quote to order without spreadsheet chaos. Payment terms, approvals, fulfillment status, and customer visibility — in one wholesale-ready workflow."
    >
      <div className="space-y-8">
        {[
          {
            title: "Quote-to-order handoff",
            body: "Accepted quotes become orders with line items, pricing, and customer terms intact — no re-keying.",
          },
          {
            title: "Payment terms built in",
            body: "Net 30/60/90 and customer-specific terms travel with every order so finance and sales stay aligned.",
          },
          {
            title: "Real-time status",
            body: "Sales and customers see where each order stands — from confirmation through fulfillment.",
          },
        ].map((item) => (
          <div key={item.title}>
            <h2 className="text-lg font-bold text-[#171241]">{item.title}</h2>
            <p className="mt-2">{item.body}</p>
          </div>
        ))}
      </div>
    </SimpleMarketingPage>
  );
}
