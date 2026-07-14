"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SupplierChallenge() {
  const challenges = [
    {
      num: "01",
      title: "Scattered supplier data",
      description:
        "Bank details in an email, contacts in a phone, terms in a PDF from 2023. Nobody has the full picture of any supplier.",
    },
    {
      num: "02",
      title: "Certificates expire silently",
      description:
        "The insurance certificate lapsed three months ago. You find out during an audit — or worse, during a claim.",
    },
    {
      num: "03",
      title: "Logistics guesswork",
      description:
        "Which supplier ships to Ireland? What's the minimum order? What's the lead time? Every PO starts with the same questions.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.1, duration: 0.5 },
    }),
  };

  return (
    <section className="challenge">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE CHALLENGE</p>
          <h2>Supplier knowledge shouldn't live in someone's head.</h2>
          <p className="lede">
            Contacts in inboxes, certificates in folders, delivery quirks in tribal memory — until the one person who
            knows is on holiday.
          </p>
        </motion.div>

        <div className="chal-grid">
          {challenges.map((c, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="chal-card reveal in"
            >
              <span className="num">{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
