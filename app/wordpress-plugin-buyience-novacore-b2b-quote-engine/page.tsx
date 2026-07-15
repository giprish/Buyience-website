import React from "react";
import type { Metadata } from "next";
import SimpleMarketingPage from "@/components/SimpleMarketingPage";

export const metadata: Metadata = {
  title: "WooCommerce B2B Plugin | WordPress Integration",
  description:
    "Connect WordPress and WooCommerce to Nova Core for AI quoting, B2B pricing, and wholesale workflows — without rebuilding your front end.",
};

export default function WordpressPluginPage() {
  return (
    <SimpleMarketingPage
      capsule="Integrations"
      title="WordPress + WooCommerce, powered by Nova Core"
      description="Keep the WordPress front end your team knows. Add B2B quoting, customer-specific pricing, and wholesale workflows through Buyience Nova Core."
      primaryCta={{ label: "Request a Demo", href: "/request-a-demo" }}
      secondaryCta={{ label: "See Integrations", href: "/integrations" }}
    >
      <div className="space-y-8">
        {[
          {
            title: "API-first connection",
            body: "Nova Core is headless and API-first — integrate quote requests, pricing, and catalog data with your WordPress site.",
          },
          {
            title: "Wholesale-ready flows",
            body: "Support quote-driven buying, customer-specific pricing, and B2B carts that B2C plugins were never designed for.",
          },
          {
            title: "More of your stack",
            body: "WordPress today — Shopify & BigCommerce coming soon — plus 50+ tools across your commerce and ops stack.",
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
