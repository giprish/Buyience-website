"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2.5 7.2 5.4 10.2 11.5 3.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PlatformHowItWorks() {
  const steps = [
    {
      n: "1",
      title: "Sign up",
      dur: "2 MIN",
      d: "Create your account. Your tenant is provisioned automatically.",
    },
    {
      n: "2",
      title: "Import catalog",
      dur: "< 1 HOUR",
      d: "Bring products in via CSV, API, or your WooCommerce store.",
    },
    {
      n: "3",
      title: "Storefront live",
      dur: "< 1 DAY",
      d: "Your headless B2B storefront is auto-configured and ready.",
    },
    {
      n: "✓",
      title: "Fully operational",
      dur: "< 2 WEEKS",
      d: "Quoting, orders, inventory, and suppliers — running end to end.",
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

        <ol className="mt-12 m-0 grid list-none grid-cols-1 gap-4.5 p-0 min-[641px]:grid-cols-2 min-[961px]:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.li
              key={step.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="reveal in flex flex-col rounded-[18px] border border-[#EDE6FB] bg-white px-6 py-6 text-left"
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-purple text-[13px] font-bold leading-none text-white"
                  aria-hidden="true"
                >
                  {step.n === "✓" ? <CheckIcon /> : step.n}
                </span>
                <span className="rounded-full bg-[#E7F6F1] px-2.5 py-1 font-mono text-[10.5px] font-semibold tracking-[0.06em] text-[#0E9E7E]">
                  {step.dur}
                </span>
              </div>
              <h3 className="mt-5 mb-2 !text-[18px] font-bold text-[#1B1033]">{step.title}</h3>
              <p className="m-0 text-[14.5px] font-medium leading-[1.55] text-[#5A4B7C]">{step.d}</p>
            </motion.li>
          ))}
        </ol>

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
