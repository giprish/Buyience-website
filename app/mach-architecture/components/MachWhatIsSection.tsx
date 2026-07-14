"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MachWhatIsSection() {
  const cards = [
    {
      letter: "M",
      title: "Microservices",
      description: "Individual components that are independently developed, deployed, and managed.",
    },
    {
      letter: "A",
      title: "API-First",
      description: "All functionality exposed via APIs, enabling any frontend or integration.",
    },
    {
      letter: "C",
      title: "Cloud-Native",
      description: "Built for the cloud from day one, leveraging cloud capabilities.",
    },
    {
      letter: "H",
      title: "Headless",
      description: "Frontend presentation decoupled from backend business logic.",
    },
  ];

  const stats = [
    { big: "80+", text: "REST API endpoints" },
    { big: "38", text: "webhook events" },
    { big: "1 DB", text: "per tenant — isolated by design" },
    { big: "<2 wks", text: "typical go-live" },
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
    <section className="challenge" style={{ backgroundColor: "var(--surface)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE FOUNDATION</p>
          <h2>What is MACH architecture?</h2>
          <p className="lede">
            MACH is a set of guiding principles for modern enterprise technology. It represents best practices for
            building software that's flexible, scalable, and future-proof.
          </p>
        </motion.div>

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
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="stats">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="stat-card reveal in"
            >
              <span className="big">{st.big}</span>
              <span>{st.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
