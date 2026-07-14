import React from "react";
import type { Metadata } from "next";
import TechnologyPartnerPageContent from "./TechnologyPartnerPageContent";

export const metadata: Metadata = {
  title: "Technology Partner Program | Integrate with Nova Core | Buyience",
  description:
    "Integrate your software with Nova Core's B2B commerce platform. 80+ REST endpoints, 38 webhook events, engineering access during build, and a listing in our integration directory.",
};

export default function TechnologyPartnerPage() {
  return <TechnologyPartnerPageContent />;
}
