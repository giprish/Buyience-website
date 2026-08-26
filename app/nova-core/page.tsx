import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import NovaCorePageContent from "./NovaCorePageContent";

export const metadata: Metadata = pageMetadata({
  title: "Nova Core | One B2B Commerce Core | Buyience",
  description:
    "Nova Core is the platform behind Buyience: quoting, CPQ, sales rooms, orders, inventory, and suppliers on one database, one price book, and one API.",
  path: "/nova-core",
});

export default function NovaCorePage() {
  return <NovaCorePageContent />;
}
