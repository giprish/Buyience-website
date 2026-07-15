"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button";
import {
  CurrencyCode,
  formatMoney,
  getPlanPrices,
} from "@/lib/pricing/currency";

interface PricingPlansProps {
  billingPeriod: "monthly" | "annual";
  currency: CurrencyCode;
}

export default function PricingPlans({ billingPeriod, currency }: PricingPlansProps) {
  const prices = getPlanPrices(currency);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  return (
    <section className="plans" id="plans">
      <div className="container">
        <div className="plan-grid">
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="plan"
          >
            <span className="plan-badge quiet">LAUNCH PRICE</span>
            <h3>Grow</h3>
            <div className="who">For Small Wholesalers</div>
            <div className="tag-line">Get B2B ordering online fast</div>

            <div className="price-block">
              <AnimatePresence mode="wait">
                {billingPeriod === "monthly" ? (
                  <motion.div
                    key={`grow-monthly-${currency}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="price">
                      {formatMoney(prices.growMonthly, currency)}
                      <small>/mo</small>
                    </div>
                    <div className="price-sub">
                      or {formatMoney(prices.growAnnual, currency)}/yr billed annually — 2 months free
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`grow-annual-${currency}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="price">
                      {formatMoney(prices.growAnnual, currency)}
                      <small>/year</small>
                    </div>
                    <div className="price-sub">
                      Billed annually (was {formatMoney(prices.growWas, currency)}).{" "}
                      <b>You save {formatMoney(prices.growSave, currency)} (2 months free)</b>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="primary" href="#trial">
              Start free trial
            </Button>
            <p className="trust-micro">⚡ 14-day free trial · no card required</p>
            <hr />
            <div className="feat-h">PLATFORM LIMITS</div>
            <ul>
              <li>
                <span className="ic">✓</span>250 B2B orders/month
              </li>
              <li>
                <span className="ic">✓</span>1,000 products/SKUs
              </li>
              <li>
                <span className="ic">✓</span>3 team members
              </li>
              <li>
                <span className="ic">✓</span>1 warehouse location
              </li>
              <li>
                <span className="ic">✓</span>10K API calls/month
              </li>
              <li>
                <span className="ic">✓</span>50 pricing tiers
              </li>
            </ul>
            <div className="feat-h">CORE FEATURES</div>
            <ul>
              <li>
                <span className="ic">✓</span>B2B Storefront (basic)
              </li>
              <li>
                <span className="ic">✓</span>WordPress/WooCommerce plugin
              </li>
              <li>
                <span className="ic">✓</span>Order &amp; Inventory Management
              </li>
              <li className="addon">
                <span className="ic">+</span>AI Quote Engine (add-on,{" "}
                {formatMoney(prices.aiQuoteAddon, currency)}/mo)
              </li>
            </ul>
          </motion.div>

          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="plan rec"
          >
            <span className="plan-badge">LAUNCH PRICE · RECOMMENDED</span>
            <h3>Pro</h3>
            <div className="who">For Growing Distributors</div>
            <div className="tag-line">Scale your wholesale operations</div>

            <div className="price-block">
              <AnimatePresence mode="wait">
                {billingPeriod === "monthly" ? (
                  <motion.div
                    key={`pro-monthly-${currency}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="price">
                      {formatMoney(prices.proMonthly, currency)}
                      <small>/mo</small>
                    </div>
                    <div className="price-sub">
                      or {formatMoney(prices.proAnnual, currency)}/yr billed annually — 2 months free
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`pro-annual-${currency}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="price">
                      {formatMoney(prices.proAnnual, currency)}
                      <small>/year</small>
                    </div>
                    <div className="price-sub">
                      Billed annually (was {formatMoney(prices.proWas, currency)}).{" "}
                      <b>You save {formatMoney(prices.proSave, currency)} (2 months free)</b>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="primary" href="#trial">
              Start free trial
            </Button>
            <p className="trust-micro">⚡ 14-day free trial · no card required</p>
            <hr />
            <div className="feat-h">PLATFORM LIMITS</div>
            <ul>
              <li>
                <span className="ic">✓</span>1,000 B2B orders/month
              </li>
              <li>
                <span className="ic">✓</span>2,500 products/SKUs
              </li>
              <li>
                <span className="ic">✓</span>10 team members
              </li>
              <li>
                <span className="ic">✓</span>3 warehouse locations
              </li>
              <li>
                <span className="ic">✓</span>50K API calls/month
              </li>
              <li>
                <span className="ic">✓</span>Unlimited pricing tiers
              </li>
            </ul>
            <div className="feat-h">EVERYTHING IN GROW, PLUS</div>
            <ul>
              <li>
                <span className="ic">✓</span>B2B Storefront (full features)
              </li>
              <li>
                <span className="ic">✓</span>Priority support (12hr response)
              </li>
              <li>
                <span className="ic">✓</span>Multi-warehouse inventory sync
              </li>
              <li>
                <span className="ic">✓</span>AI Quote Engine included
              </li>
            </ul>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={cardVariants}
            className="plan"
          >
            <span className="plan-badge quiet">CUSTOM PRICING</span>
            <h3>Enterprise</h3>
            <div className="who">For High-Volume Operations</div>
            <div className="tag-line">Custom solutions for complex needs</div>

            <div className="price-block">
              <div className="price">Custom</div>
              <div className="price-sub">Volume-based pricing, tailored to your needs</div>
            </div>

            <Button variant="ghost" href="#contact">
              Contact sales
            </Button>
            <p className="trust-micro">Talk to the founders</p>
            <hr />
            <div className="feat-h">PLATFORM LIMITS</div>
            <ul>
              <li>
                <span className="ic">✓</span>Unlimited orders
              </li>
              <li>
                <span className="ic">✓</span>Unlimited products/SKUs
              </li>
              <li>
                <span className="ic">✓</span>Unlimited team members
              </li>
              <li>
                <span className="ic">✓</span>Unlimited warehouses
              </li>
              <li>
                <span className="ic">✓</span>Custom API volume pricing
              </li>
              <li>
                <span className="ic">✓</span>Unlimited pricing tiers
              </li>
            </ul>
            <div className="feat-h">EVERYTHING IN PRO, PLUS</div>
            <ul>
              <li>
                <span className="ic">✓</span>Custom integrations
              </li>
              <li>
                <span className="ic">✓</span>SSO / SAML authentication
              </li>
              <li>
                <span className="ic">✓</span>SLA guarantee (99.9%)
              </li>
              <li>
                <span className="ic">✓</span>Dedicated success manager
              </li>
              <li>
                <span className="ic">✓</span>AI Quote Engine (unlimited)
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
