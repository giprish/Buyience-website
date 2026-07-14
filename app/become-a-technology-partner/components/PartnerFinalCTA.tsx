"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function PartnerFinalCTA() {
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
    <section className="final">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="container reveal in"
      >
        <p className="eyebrow">JOIN THE PROGRAM</p>
        <h2>Integrate once. Be the one they find.</h2>
        <p>
          An API built to be integrated with, engineers who answer, and a directory small enough that your listing
          matters.
        </p>
        <div className="cta-row">
          <Button variant="primary" size="lg" href="#tForm" onClick={handleScrollToForm}>
            Apply now
          </Button>
          <Button variant="ghost" size="lg" href="/solutions">
            Explore the API &amp; architecture
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
