"use client";

import React from "react";
import { motion } from "framer-motion";

export default function IntegrationGapsSection() {
  const gaps = [
    {
      title: "ERP systems",
      description: "Our customers connect to ERPs through the API today. A native integration is the single most-requested gap.",
    },
    {
      title: "Accounting software",
      description: "Paid orders and invoices should land in the accounting system without re-keying. They don't yet, natively.",
    },
    {
      title: "Warehouse management",
      description: "Nova Core tracks multi-warehouse inventory. WMS platforms that want to own the physical layer fit cleanly.",
    },
    {
      title: "CRM & PIM",
      description: "Quotes, customers, and product data are all API-exposed — and all live in someone else's system too.",
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

  const handleScrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const firstInput = document.getElementById("first");
    const formContainer = document.getElementById("tFormContainer");
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      if (firstInput) firstInput.focus();
    }, 500);
  };

  return (
    <section className="gaps">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">OPEN CATEGORIES</p>
          <h2>Where our customers keep asking.</h2>
          <p className="lede">
            These are the gaps in our directory today — the integrations customers request most and we haven't built. If
            you're in one of these categories, you're pushing on an open door.
          </p>
        </motion.div>

        <div className="gap-grid">
          {gaps.map((gap, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="gap reveal in"
            >
              <span className="dot"></span>
              <div>
                <b>{gap.title}</b>
                <p>{gap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="gap-note reveal in"
        >
          Not on this list?{" "}
          <a href="#tForm" onClick={handleScrollToForm} className="font-semibold text-violet-700 hover:underline">
            Apply anyway
          </a>{" "}
          — customer demand decides what we prioritise, and yours might be the request we're already hearing.
        </motion.p>
      </div>
    </section>
  );
}
