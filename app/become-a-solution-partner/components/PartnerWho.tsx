"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnerWho() {
  const cards = [
    {
      title: "Digital agencies",
      desc: "Your clients keep asking for B2B portals, customer-specific pricing, and quoting. Nova Core gives you the product to sell against those briefs — with the storefront generated in under a day, your team designs and configures instead of building from scratch.",
    },
    {
      title: "B2B consultants & integrators",
      desc: "You already advise wholesalers and distributors on process. Nova Core is the system that implements the advice — quoting, orders, inventory, suppliers in one platform, connected to the rest of their stack through 80+ API endpoints.",
    },
    {
      title: "WordPress / WooCommerce specialists",
      desc: "The Nova Core plugin adds B2B quoting to the WooCommerce sites you already build and maintain — no replatforming conversation required. Your existing client base is your pipeline.",
    },
    {
      title: "ERP & eCommerce consultants",
      desc: "Your mid-market clients are priced out of enterprise B2B suites. Nova Core delivers the capability set at SMB pricing — and its API-first architecture connects cleanly to the ERP work you're already doing.",
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
          <p className="eyebrow">WHO IT'S FOR</p>
          <h2>Built for the people B2B companies already trust.</h2>
        </motion.div>

        <div className="who-grid">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="who-card reveal in"
            >
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
