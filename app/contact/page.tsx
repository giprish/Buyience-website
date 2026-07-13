import React from "react";
import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Buyience | Talk to the Team Behind Nova Core",
  description:
    "Questions about Nova Core B2B commerce? Book a demo, talk to sales, get support, or discuss a partnership. Messages reach the founding team directly.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
