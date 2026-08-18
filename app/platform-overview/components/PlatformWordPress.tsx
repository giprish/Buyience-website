"use client";

import React from "react";
import { DollarSign, MessageSquare, RefreshCw, User } from "lucide-react";
import Button from "@/components/Button";
import SplitCopyCards from "@/components/SplitCopyCards";

export default function PlatformWordPress() {
  return (
    <SplitCopyCards
      purple
      eyebrow="WordPress + WooCommerce"
      heading="Already on WordPress? Even better."
      body="Keep your store. Add Nova Core's B2B capabilities on top — no migration required."
      cta={
        <Button variant="primary" href="/contact">
          Get the WordPress plugin →
        </Button>
      }
      cards={[
        {
          title: "Customer pricing",
          description: "Show each B2B customer their negotiated prices, right on your WooCommerce store.",
          icon: DollarSign,
        },
        {
          title: "Quote requests",
          description: "Buyers request quotes from product pages; Nova Core takes it from there.",
          icon: MessageSquare,
        },
        {
          title: "Buyer portal",
          description: "Self-service order history, reordering, and account management for your B2B customers.",
          icon: User,
        },
        {
          title: "Real-time sync",
          description: "Products, stock, and orders stay in sync between WooCommerce and Nova Core.",
          icon: RefreshCw,
        },
      ]}
    />
  );
}
