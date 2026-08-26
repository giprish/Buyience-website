import React from "react";
import type { Metadata } from "next";
import SimpleMarketingPage from "@/components/SimpleMarketingPage";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "B2B Storefront | Self-Service Customer Portal | Buyience",
  description:
    "Launch a B2B storefront your customers will love. Customer-specific pricing, quick order, saved lists, quote requests, and account management-built in.",
  path: "/b2b-storefront",
});

export default function B2BStorefrontPage() {
  return (
    <SimpleMarketingPage
      capsule="Capabilities"
      title="A B2B storefront customers actually use"
      description="Give every account their own pricing, catalogs, and reorder flows. Self-service by day — sales-assisted when deals get complex."
      contentPurple
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
            <h2 className="text-xl font-bold text-[#1B1033]">{item.title}</h2>
            <p className="mt-2">{item.body}</p>
          </div>
        ))}
      </div>
    </SimpleMarketingPage>
  );
}
