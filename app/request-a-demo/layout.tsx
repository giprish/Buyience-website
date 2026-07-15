import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo | See Nova Core B2B Platform in Action",
  description:
    "Book a personalized demo of Nova Core. See AI quoting, inventory management, and B2B storefront in action. 30-minute walkthrough with our team.",
};

export default function RequestDemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
