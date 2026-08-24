import type { Metadata } from "next";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Request a Demo | See Nova Core B2B Platform in Action | Buyience",
  description:
    "Book a personalized demo of Nova Core. See AI quoting, inventory management, and B2B storefront in action. 30-minute walkthrough with our team.",
  path: "/request-a-demo",
});

export default function RequestDemoLayout({ children }: { children: ReactNode }) {
  return children;
}
