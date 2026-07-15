"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CurrencyCode,
  formatMoney,
  getPlanPrices,
} from "@/lib/pricing/currency";

interface AddonsSectionProps {
  currency: CurrencyCode;
}

export default function AddonsSection({ currency }: AddonsSectionProps) {
  const prices = getPlanPrices(currency);

  const addons = [
    {
      title: "AI Quote Engine",
      description:
        "Add AI-powered pricing intelligence to the Grow plan. Included on Pro and Enterprise.",
      price: `${formatMoney(prices.aiQuoteAddon, currency)}/mo`,
    },
    {
      title: "Product Configurator (CPQ)",
      description: "Visual configuration builder with BOM generation. Included on Enterprise.",
      price: `${formatMoney(prices.cpqAddon, currency)}/mo`,
    },
    {
      title: "Extra warehouses",
      description: "Additional warehouse locations beyond your plan limit.",
      price: `${formatMoney(prices.warehouseAddon, currency)}/mo per location`,
    },
    {
      title: "Extra users",
      description: "Additional admin users beyond your plan limit.",
      price: `${formatMoney(prices.extraUserAddon, currency)}/mo per user`,
    },
    {
      title: "Priority support",
      description: "4-hour response SLA with phone support included.",
      price: `${formatMoney(prices.prioritySupportAddon, currency)}/mo`,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="addons">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto" }}
        >
          <p className="eyebrow">ADD-ONS</p>
          <h2 style={{ marginTop: "14px" }}>Customise your stack.</h2>
          <p className="lede" style={{ fontSize: "16.5px", marginTop: "12px" }}>
            Add premium capabilities when you need them. No long-term commitment.
          </p>
        </motion.div>

        <div className="grid">
          {addons.map((addon, idx) => (
            <motion.a
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="addon-card text-left"
              href="#trial"
            >
              <h3>{addon.title}</h3>
              <p>{addon.description}</p>
              <div className="addon-price">{addon.price}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
