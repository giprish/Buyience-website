"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type CapabilitiesGridItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
  linkLabel?: string;
};

export default function CapabilitiesChipGridSection({
  id = "capabilities",
  eyebrow = "CORE CAPABILITIES",
  heading,
  lede,
  items,
  purple = false,
}: {
  id?: string;
  eyebrow?: string;
  heading: React.ReactNode;
  lede?: React.ReactNode;
  items: CapabilitiesGridItem[];
  purple?: boolean;
}) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section id={id} className={purple ? "bg-(--surface)" : undefined}>
      <div className="container">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{heading}</h2>
          {lede ? <p className="lede">{lede}</p> : null}
        </motion.div>

        <div className="cap-grid">
          {items.map((item, idx) => (
            <motion.div
              key={`${item.title}-${idx}`}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="cap-card"
            >
              {item.icon ? (
                <div className="cap-icon" aria-hidden="true">
                  {item.icon}
                </div>
              ) : null}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.href ? (
                <a className="cap-link" href={item.href}>
                  {item.linkLabel ?? "How it works ↓"}
                </a>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
