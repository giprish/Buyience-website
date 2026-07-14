"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MachPrinciplesSection() {
  const principles = [
    {
      chip: "REST + WEBHOOKS",
      title: "API-first design",
      description:
        "Everything accessible via RESTful APIs. Build your storefront with any technology. Connect ERP, CRM, and accounting systems through the API.",
    },
    {
      chip: "DB PER TENANT",
      title: "Multi-tenancy",
      description:
        "True SaaS multi-tenancy with a dedicated database per tenant — not shared tables. Custom branding and tenant-scoped API keys.",
    },
    {
      chip: "WEBSOCKET ENABLED",
      title: "Real-time capabilities",
      description:
        "Live updates across the platform. WebSocket integration for chat and negotiations. Instant inventory and price updates.",
    },
    {
      chip: "QUOTE ENGINE",
      title: "AI-powered intelligence",
      description:
        "AI scoring in the Quote Engine — win probability across 11+ factors, margin floors, and pricing recommendations.",
    },
    {
      chip: "CLOUD-NATIVE",
      title: "Auto-scaling infrastructure",
      description:
        "Infrastructure scales automatically with demand. Multi-warehouse support and enterprise performance at every tier.",
    },
    {
      chip: "ENTERPRISE-GRADE",
      title: "Security first",
      description: "Token-based authentication, role-based access control, and encryption at rest and in transit.",
    },
    {
      chip: "NO-CODE CONFIG",
      title: "Flexible configuration",
      description:
        "Adapt to your process without code changes. Configurable workflows, custom pricing rules, extensible product configurator.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">NOVA CORE PRINCIPLES</p>
          <h2>Beyond MACH: what powers Nova Core.</h2>
          <p className="lede">
            Nova Core follows MACH principles and extends them with capabilities purpose-built for B2B commerce.
          </p>
        </motion.div>

        <div className="cap-grid">
          {principles.map((cap, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="cap-card reveal in"
            >
              <span className="chip">{cap.chip}</span>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
