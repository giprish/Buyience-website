"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

type Cell = React.ReactNode;

type FeatureRow = {
  feature: string;
  grow: Cell;
  pro: Cell;
  enterprise: Cell;
};

type Category = {
  id: string;
  label: string;
  rows: FeatureRow[];
};

function Yes() {
  return (
    <span className="yes" aria-label="Included">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <path
          d="M2.2 6.2 4.8 8.8 9.8 3.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function No() {
  return (
    <span className="no" aria-label="Not included">
      —
    </span>
  );
}

const CATEGORIES: Category[] = [
  {
    id: "platform",
    label: "PLATFORM LIMITS",
    rows: [
      { feature: "Monthly orders", grow: "250", pro: "1,000", enterprise: "Unlimited" },
      { feature: "Products / SKUs", grow: "1,000", pro: "2,500", enterprise: "Unlimited" },
      { feature: "Team members", grow: "3", pro: "10", enterprise: "Unlimited" },
      { feature: "Pricing tiers", grow: "50", pro: "Unlimited", enterprise: "Unlimited" },
      { feature: "Warehouse locations", grow: "1", pro: "3", enterprise: "Unlimited" },
      { feature: "API calls / month", grow: "10K", pro: "50K", enterprise: "Custom" },
    ],
  },
  {
    id: "storefront",
    label: "B2B STOREFRONT",
    rows: [
      {
        feature: "Customer-specific pricing",
        grow: <Yes />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Quick order / CSV upload",
        grow: <Yes />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Custom domain",
        grow: <Yes />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Saved shopping lists",
        grow: <No />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Multiple storefronts",
        grow: <No />,
        pro: <No />,
        enterprise: <Yes />,
      },
    ],
  },
  {
    id: "ai",
    label: "AI & SALES TOOLS",
    rows: [
      {
        feature: "AI Quote Engine",
        grow: <span className="cmp-tag">Add-on</span>,
        pro: <span className="cmp-tag on">Included</span>,
        enterprise: <span className="cmp-tag on">Unlimited</span>,
      },
      {
        feature: "Win-probability scoring",
        grow: <No />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Digital Sales Room",
        grow: <No />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Product Configurator (CPQ)",
        grow: <No />,
        pro: <span className="cmp-tag">Add-on</span>,
        enterprise: <Yes />,
      },
    ],
  },
  {
    id: "integrations",
    label: "INTEGRATIONS & API",
    rows: [
      {
        feature: "WordPress / WooCommerce",
        grow: <Yes />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Webhooks",
        grow: <No />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Custom integrations",
        grow: <No />,
        pro: <No />,
        enterprise: <Yes />,
      },
    ],
  },
  {
    id: "support",
    label: "SUPPORT",
    rows: [
      {
        feature: "Email support",
        grow: <Yes />,
        pro: <Yes />,
        enterprise: <Yes />,
      },
      {
        feature: "Response time",
        grow: "24hr",
        pro: "12hr",
        enterprise: "2hr",
      },
      {
        feature: "Phone support",
        grow: <No />,
        pro: <No />,
        enterprise: <Yes />,
      },
      {
        feature: "Dedicated success manager",
        grow: <No />,
        pro: <No />,
        enterprise: <Yes />,
      },
      {
        feature: "SLA guarantee",
        grow: "99.5%",
        pro: "99.5%",
        enterprise: "99.9%",
      },
    ],
  },
];

const DEFAULT_OPEN = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, true]),
) as Record<string, boolean>;

function readNavOffsetPx(): number {
  if (typeof window === "undefined") return 0;
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--home-nav-h")
    .trim();
  const parsed = Number.parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : 0;
}

export default function ComparisonTable() {
  const [openSections, setOpenSections] = useState(DEFAULT_OPEN);
  const [isStuck, setIsStuck] = useState(false);
  const baseId = useId();
  const sentinelRef = useRef<HTMLDivElement>(null);

  function toggleSection(id: string) {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    let observer: IntersectionObserver | null = null;

    const observe = () => {
      observer?.disconnect();
      const navPx = readNavOffsetPx();
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsStuck(!entry.isIntersecting);
        },
        {
          // Match sticky `top: var(--home-nav-h)` — sentinel leaving this
          // inset viewport means the thead has engaged under the navbar.
          root: null,
          threshold: 0,
          rootMargin: `-${navPx}px 0px 0px 0px`,
        },
      );
      observer.observe(sentinel);
    };

    observe();
    window.addEventListener("resize", observe);
    return () => {
      window.removeEventListener("resize", observe);
      observer?.disconnect();
    };
  }, []);

  return (
    <section className="compare">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="compare-intro"
        >
          <p className="eyebrow">COMPARE PLANS</p>
          <h2>Everything, side by side.</h2>
          <p className="lede">
            Exactly what&apos;s included in each plan, so you can pick the right fit.
          </p>
        </motion.div>

        {/* Mobile-only plan CTAs — desktop thead is hidden under 640px */}
        <div className="cmp-mobile-ctas">
          <div className="cmp-mobile-cta">
            <span className="cmp-name">Grow</span>
            <Button variant="ghost" size="sm" href="https://app.buyience.com/register" className="cmp-cta">
              Try free
            </Button>
          </div>
          <div className="cmp-mobile-cta rec">
            <span className="cmp-pill">Recommended</span>
            <span className="cmp-name">Pro</span>
            <Button variant="primary" size="sm" href="https://app.buyience.com/register" className="cmp-cta">
              Try free
            </Button>
          </div>
          <div className="cmp-mobile-cta">
            <span className="cmp-name">Enterprise</span>
            <Button variant="ghost" size="sm" href="/contact" className="cmp-cta">
              Contact
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`tbl-wrap${isStuck ? " is-stuck" : ""}`}
        >
          {/* Scroll sentinel for sticky-thead stuck state (keeps overflow visible). */}
          <div
            ref={sentinelRef}
            className="tbl-sticky-sentinel"
            aria-hidden="true"
          />
          <div className="tbl-scroll">
            <table className="cmp">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="cmp-feat-label">Features</span>
                  </th>
                  <th scope="col">
                    <span className="cmp-head">
                      <span className="cmp-name">Grow</span>
                      <Button variant="ghost" size="sm" href="https://app.buyience.com/register" className="cmp-cta">
                        Start free trial
                      </Button>
                    </span>
                  </th>
                  <th scope="col" className="rec-col">
                    <span className="cmp-head">
                      <span className="cmp-pill">Recommended</span>
                      <span className="cmp-name">Pro</span>
                      <Button variant="primary" size="sm" href="https://app.buyience.com/register" className="cmp-cta">
                        Start free trial
                      </Button>
                    </span>
                  </th>
                  <th scope="col">
                    <span className="cmp-head">
                      <span className="cmp-name">Enterprise</span>
                      <Button variant="ghost" size="sm" href="/contact" className="cmp-cta">
                        Contact sales
                      </Button>
                    </span>
                  </th>
                </tr>
              </thead>
              {CATEGORIES.map((category) => {
                const isOpen = openSections[category.id];
                const panelId = `${baseId}-${category.id}-panel`;
                const buttonId = `${baseId}-${category.id}-btn`;

                return (
                  <React.Fragment key={category.id}>
                    <tbody className="cmp-cat-head">
                      <tr className="cat">
                        <td colSpan={4}>
                          <button
                            type="button"
                            id={buttonId}
                            className="cmp-cat-toggle"
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => toggleSection(category.id)}
                          >
                            <span className="cmp-cat-label">{category.label}</span>
                            <span className="cmp-cat-icon" aria-hidden="true">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                    <tbody
                      id={panelId}
                      className="cmp-cat-panel"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                    >
                      {category.rows.map((row) => (
                        <tr key={row.feature}>
                          <td>{row.feature}</td>
                          <td>{row.grow}</td>
                          <td className="rec-col">{row.pro}</td>
                          <td>{row.enterprise}</td>
                        </tr>
                      ))}
                    </tbody>
                  </React.Fragment>
                );
              })}
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
