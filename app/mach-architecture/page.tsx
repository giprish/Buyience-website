import React from "react";
import type { Metadata } from "next";
import MachPageContent from "./MachPageContent";

export const metadata: Metadata = {
  title: "MACH Architecture | Headless B2B Commerce Platform | Buyience",
  description:
    "Nova Core's MACH architecture: Microservices, API-First, Cloud-Native, Headless. 80+ REST endpoints, 38 webhook events, database-per-tenant isolation. Scalable, flexible B2B commerce.",
};

export default function MachPage() {
  return <MachPageContent />;
}
