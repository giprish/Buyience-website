"use client";

import React from "react";
import { motion } from "framer-motion";
import StackLogoMarquee from "@/app/components/StackLogoMarquee";

export default function PackagingIntegrations() {
  return (
    <section className="integrations">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="reveal in"
        >
          <p className="eyebrow">FITS YOUR STACK</p>
          <StackLogoMarquee />
          <p>
            Nova Core connects to the store, email, and shipping tools you already run — with 80+ API endpoints and 38
            webhook events when you want to go deeper.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
