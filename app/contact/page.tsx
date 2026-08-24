import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us | B2B Commerce Support | Buyience",
  description:
    "Get in touch with Buyience. Questions about Nova Core B2B commerce platform? Request a demo, talk to sales, or get support. Response within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageContent />;
}
