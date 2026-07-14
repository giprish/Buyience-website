"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MachFAQ() {
  const faqs = [
    {
      q: "What does \"headless\" mean?",
      a: "The frontend (what buyers see) is decoupled from the backend (business logic and data). Nova Core's backend serves any frontend through APIs — the hosted storefront we generate for you, a custom React or Vue build, a mobile experience, or your existing WordPress site. One backend, unlimited frontends.",
    },
    {
      q: "Do I need developers to use Nova Core?",
      a: "No. The hosted storefront is generated on signup and editable without code, and workflows, pricing rules, and the product configurator are configuration-first. Developers come in only if you want them to — for custom frontends or deeper integrations through the 80+ REST endpoints.",
    },
    {
      q: "How is data isolated between tenants?",
      a: "Each tenant gets a dedicated database — your data physically lives in its own database rather than in shared tables filtered by a tenant ID. API keys and authentication tokens are scoped per tenant, so isolation is enforced at both the storage and access layers.",
    },
    {
      q: "What happens during traffic spikes?",
      a: "The cloud-native infrastructure scales with demand — background work is queued and processed asynchronously, so a spike in orders or quote requests doesn't degrade the experience. You don't do capacity planning; the platform absorbs it.",
    },
    {
      q: "Is there AI in the platform?",
      a: "Yes — concentrated where it earns its keep. The AI Quote Engine scores win probability across 11+ factors, recommends pricing, and enforces margin floors. Operational systems — orders, inventory, suppliers — are deliberately deterministic, because operational state should follow rules, not guesses. The architecture keeps AI services as independent components, so intelligence can expand without destabilising core commerce.",
    },
  ];

  return (
    <section className="challenge" style={{ backgroundColor: "var(--surface)" }} id="faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">QUESTIONS, ANSWERED</p>
          <h2>MACH architecture FAQs</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="faq-list reveal in"
        >
          {faqs.map((faq, idx) => (
            <details key={idx}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
