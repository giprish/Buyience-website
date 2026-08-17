"use client";

import React from "react";
import { motion } from "framer-motion";
import { DollarSign, MessageSquare, RefreshCw, User, type LucideIcon } from "lucide-react";
import Button from "@/components/Button";

const cards: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
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
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.5 },
  }),
};

export default function PlatformWordPress() {
  return (
    <section className="wp">
      <div className="container">
        <div className="wp-layout">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="wp-copy reveal in"
          >
            <p className="eyebrow">WORDPRESS + WOOCOMMERCE</p>
            <h2>Already on WordPress? Even better.</h2>
            <p className="lede">
              Keep your store. Add Nova Core&apos;s B2B capabilities on top — no migration required.
            </p>
            <div className="cta-row">
              <Button variant="primary" href="/contact">
                Get the WordPress plugin →
              </Button>
            </div>
          </motion.div>

          <div className="wp-grid">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={cardVariants}
                  className="wp-card reveal in"
                >
                  <div className="wp-icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
