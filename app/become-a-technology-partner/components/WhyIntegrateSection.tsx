"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyIntegrateSection() {
  const cards = [
    {
      chip: "POSITION",
      title: "Category default, not listing #4,001",
      description:
        "Our integration directory is deliberately small and honest. Ship yours now and you're the one customers see when they filter your category — and the one we recommend when they ask.",
    },
    {
      chip: "SPEED",
      title: "Ship in weeks, not quarters",
      description:
        "No partner-manager tiers, no certification bureaucracy, no six-month queue. A real conversation, a sandbox, and engineers who answer. Small team, short path.",
    },
    {
      chip: "FIT",
      title: "An audience that's underserved",
      description:
        "SMB wholesalers, distributors, and manufacturers — companies priced out of enterprise B2B suites and running on spreadsheets. If you sell to them, they're arriving here with an unbuilt stack.",
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
    <section>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">WHY INTEGRATE NOW</p>
          <h2>We won't pretend we have thousands of customers.</h2>
          <p className="lede">
            We're early — and that's the entire argument. Integrating with a mature platform means being one listing
            among thousands. Integrating with Nova Core now means being the default in your category as it grows.
          </p>
        </motion.div>

        {/* Why Grid */}
        <div className="why-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="why reveal in"
            >
              <span className="chip">{card.chip}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </motion.div>
          ))}
        </div>

        {/* API Spec Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="spec reveal in text-left"
        >
          <div>
            <h3>Built to be integrated with.</h3>
            <p>
              Nova Core is MACH-architected and API-first — not a monolith with an API bolted on. Everything a customer
              can do in the product, your software can do through the API.
            </p>
            <div className="spec-nums">
              <div className="spec-num">
                <span className="b">80+</span>
                <span>REST endpoints</span>
              </div>
              <div className="spec-num">
                <span className="b">38</span>
                <span>webhook events</span>
              </div>
              <div className="spec-num">
                <span className="b">DB/tenant</span>
                <span>isolated by architecture</span>
              </div>
              <div className="spec-num">
                <span className="b">Sandbox</span>
                <span>tenant to build against</span>
              </div>
            </div>
          </div>
          <div>
            <div className="code">
              <span className="c">// your system reacts to Nova Core events</span>
              {"\n"}{"{"}
              {"\n"}  <span className="k">"event"</span>: <span className="s">"order.created"</span>,
              {"\n"}  <span className="k">"order_id"</span>: <span className="s">"ord_4482"</span>,
              {"\n"}  <span className="k">"customer"</span>: <span className="s">"cus_hartwell"</span>,
              {"\n"}  <span className="k">"total"</span>: <span className="s">"35860.00"</span>,
              {"\n"}  <span className="k">"currency"</span>: <span className="s">"USD"</span>
              {"\n"}{"}"}
              {"\n"}<span className="c">// → your ERP creates the sales order</span>
              {"\n"}<span className="c">// → your WMS reserves the stock</span>
              {"\n"}<span className="c">// → your accounting tool raises the invoice</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
