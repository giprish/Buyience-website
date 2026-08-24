"use client";

import React from "react";
import FaqSection from "@/components/FaqSection";
import { orderManagementFaqs } from "../data/faqs";

export default function OrderManagementFAQ() {
  return (
    <FaqSection
      eyebrow="QUESTIONS, ANSWERED"
      title="Order management FAQs"
      items={orderManagementFaqs}
      card
    />
  );
}
