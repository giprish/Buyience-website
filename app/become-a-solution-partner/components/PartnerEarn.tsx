"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PartnerEarn() {
  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head reveal in"
        >
          <p className="eyebrow">THE ECONOMICS</p>
          <h2>Two revenue streams. One platform.</h2>
        </motion.div>

        <div className="earn-grid">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="earn reveal in"
          >
            <span className="chip">RECURRING</span>
            <h3>Revenue share on subscriptions</h3>
            <p>
              Recurring commission on every client you bring to Nova Core, paid for as long as they remain a customer. Exact
              structure is agreed on your intro call — as a founding-stage program, we negotiate person-to-person, not from a
              rate card.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>Recurring, not one-off referral bounties</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Registered deals protected as yours</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="earn reveal in"
          >
            <span className="chip">100% YOURS</span>
            <h3>Your implementation business</h3>
            <p>
              Setup, data migration, customization, storefront design, training — you scope it, you bill it, you keep it.
              Nova Core's under-2-week typical go-live means your projects close fast and your capacity goes further.
            </p>
            <ul>
              <li>
                <span className="ic">✓</span>
                <span>You own the client relationship</span>
              </li>
              <li>
                <span className="ic">✓</span>
                <span>Config-first platform — implementations without heavy dev</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
