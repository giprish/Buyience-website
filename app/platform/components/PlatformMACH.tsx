"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function PlatformMACH() {
  const cards = [
    {
      letter: "M",
      title: "Microservices",
      description: "Independent services that scale on their own — no monolith to fight.",
    },
    {
      letter: "A",
      title: "API-First",
      description: "Every capability exposed as an API. Build on Nova Core, not around it.",
    },
    {
      letter: "C",
      title: "Cloud-Native",
      description: "Multi-tenant, elastic, and resilient — built for the cloud from day one.",
    },
    {
      letter: "H",
      title: "Headless",
      description: "Your frontend, your rules. The storefront is yours to shape.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.08, duration: 0.5 },
    }),
  };

  return (
    <section className="mach">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">BUILT DIFFERENT</p>
          <h2>API-First. Cloud-Native. Headless.</h2>
          <p className="lede">
            Nova Core is built on MACH architecture — so it composes with your stack instead of replacing it.
          </p>
        </motion.div>

        {/* MACH Grid */}
        <div className="mach-grid">
          {cards.map((c, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="mach-card reveal in"
            >
              <span className="letter">{c.letter}</span>
              <b>{c.title}</b>
              <p>{c.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mach-nums reveal in"
        >
          <b>80+</b> API endpoints · <b>38</b> webhook events
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cta-row reveal in justify-center"
        >
          <Button variant="ghost" href="/solutions">
            Explore Architecture
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
