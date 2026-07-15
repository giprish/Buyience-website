"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactRoutesProps {
  selectedReason: string;
  onSelectReason: (reason: string) => void;
}

export default function ContactRoutes({ selectedReason, onSelectReason }: ContactRoutesProps) {
  const routes = [
    {
      id: "demo",
      title: "See a demo",
      description: "A live walkthrough of Nova Core with your use case in mind.",
      btnText: "BOOK A DEMO →",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
          <path d="m10 8 5 3-5 3V8z" />
        </svg>
      ),
      isPrimary: true,
    },
    {
      id: "sales",
      title: "Talk to sales",
      description: "Pricing, plan fit, migration, Enterprise terms — ask directly.",
      btnText: "ASK A QUESTION →",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      id: "support",
      title: "Get support",
      description: "Already a customer and something's not working? Start here.",
      btnText: "CONTACT SUPPORT →",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" />
        </svg>
      ),
    },
    {
      id: "partnership",
      title: "Partnerships",
      description: "Agencies, consultants, and software vendors — let's talk.",
      btnText: "START A CONVERSATION →",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 3.9M15.4 6.5l-6.8 3.9" />
        </svg>
      ),
    },
  ];

  const handleSelect = (reasonId: string) => {
    onSelectReason(reasonId);
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setTimeout(() => {
      const nameInput = document.getElementById("name");
      if (nameInput) {
        nameInput.focus();
      }
    }, 500);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <div className="routes">
      <div className="container">
        <div className="route-grid">
          {routes.map((route, idx) => (
            <motion.button
              key={route.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              onClick={() => handleSelect(route.id)}
              className={`route ${route.isPrimary || selectedReason === route.id ? "primary" : ""}`}
              type="button"
            >
              <span className="ic" aria-hidden="true">
                {route.icon}
              </span>
              <b>{route.title}</b>
              <p>{route.description}</p>
              <span className="go">{route.btnText}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
}
