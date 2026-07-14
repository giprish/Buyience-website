"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function PlatformHowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Sign Up",
      dur: "2 MIN",
      d: "Create your account. Your tenant is provisioned automatically.",
    },
    {
      n: "2",
      title: "Import Catalog",
      dur: "< 1 HOUR",
      d: "Bring products in via CSV, API, or your WooCommerce store.",
    },
    {
      n: "3",
      title: "Storefront Live",
      dur: "< 1 DAY",
      d: "Your headless B2B storefront is auto-configured and ready.",
    },
    {
      n: "✓",
      title: "Fully Operational",
      dur: "< 2 WEEKS",
      d: "Quoting, orders, inventory, and suppliers — running end to end.",
    },
  ];

  const stacks = [
    { chip: "AUTO-CONFIGURED", title: "Headless B2B Storefront" },
    { chip: "AI-READY", title: "AI Quote Engine" },
    { chip: "REAL-TIME", title: "Digital Sales Room" },
    { chip: "DUAL-SIDED", title: "Seller & Buyer Dashboards" },
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
    <section className="how">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">HOW IT WORKS</p>
          <h2>From Signup to Selling in Days, Not Months</h2>
          <p className="lede">
            Nova Core auto-generates everything you need. No consultants, no 6-month implementations, no IT team required.
          </p>
        </motion.div>

        {/* Timeline */}
        <ol className="timeline" style={{ listStyle: "none" }}>
          {steps.map((step, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="t-step reveal in"
            >
              <span className="t-n">{step.n}</span>
              <div>
                <b>{step.title}</b>
                <span className="dur">{step.dur}</span>
                <span className="d">{step.d}</span>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Stacks */}
        <div className="stack-grid">
          {stacks.map((st, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="stack-card reveal in"
            >
              <span className="chip">{st.chip}</span>
              <b>{st.title}</b>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cta-row reveal in justify-center"
        >
          <Button variant="primary" size="lg" href="/contact">
            Start Selling to Your B2B Customers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
