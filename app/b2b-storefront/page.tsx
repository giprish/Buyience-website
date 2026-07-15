import React from "react";
import type { Metadata } from "next";
import SimpleMarketingPage from "@/components/SimpleMarketingPage";

export const metadata: Metadata = {
  title: "B2B Storefront | Self-Service Customer Portal",
  description:
    "A branded B2B portal where customers see their pricing, place orders, track shipments, and reorder — without calling your sales team.",
};

export default function B2BStorefrontPage() {
  return (
    <SimpleMarketingPage
      capsule="Capabilities"
      title="A B2B storefront customers actually use"
      description="Give every account their own pricing, catalogs, and reorder flows. Self-service by day — sales-assisted when deals get complex."
    >
      <div className="space-y-8">
        {[
          {
            title: "Customer-specific catalogs & pricing",
            body: "Buyers only see what they're authorized to buy — at the contract rates you already negotiated.",
          },
          {
            title: "Reorder & buy again",
            body: "Reduce repeat order friction with saved carts, previous orders, and quick reorder paths.",
          },
          {
            title: "Branded self-service",
            body: "Launch a polished portal on headless architecture — or connect through WordPress / WooCommerce.",
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
