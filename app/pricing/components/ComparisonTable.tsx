"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function ComparisonTable() {
  return (
    <section className="compare">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", maxWidth: "62ch", margin: "0 auto" }}
        >
          <p className="eyebrow">COMPARE PLANS</p>
          <h2 style={{ marginTop: "14px" }}>Everything, side by side.</h2>
          <p className="lede" style={{ fontSize: "16.5px", marginTop: "12px" }}>
            Exactly what's included in each plan, so you can pick the right fit.
          </p>
        </motion.div>

        {/* Table Wrap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="tbl-wrap"
        >
          <table className="cmp">
            <thead>
              <tr>
                <th>Features</th>
                <th>
                  Grow<span className="p">$99/mo</span>
                </th>
                <th className="rec-col">
                  Pro<span className="p">$179/mo</span>
                </th>
                <th>
                  Enterprise<span className="p">Custom</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="cat">
                <td colSpan={4}>PLATFORM LIMITS</td>
              </tr>
              <tr>
                <td>Monthly orders</td>
                <td>250</td>
                <td className="rec-col">1,000</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Products / SKUs</td>
                <td>1,000</td>
                <td className="rec-col">2,500</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Team members</td>
                <td>3</td>
                <td className="rec-col">10</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Pricing tiers</td>
                <td>50</td>
                <td className="rec-col">Unlimited</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Warehouse locations</td>
                <td>1</td>
                <td className="rec-col">3</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>API calls / month</td>
                <td>10K</td>
                <td className="rec-col">50K</td>
                <td>Custom</td>
              </tr>

              <tr className="cat">
                <td colSpan={4}>B2B STOREFRONT</td>
              </tr>
              <tr>
                <td>Customer-specific pricing</td>
                <td>
                  <span className="yes">✓</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Quick order / CSV upload</td>
                <td>
                  <span className="yes">✓</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Custom domain</td>
                <td>
                  <span className="yes">✓</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Saved shopping lists</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Multiple storefronts</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">
                  <span className="no">—</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>

              <tr className="cat">
                <td colSpan={4}>AI &amp; SALES TOOLS</td>
              </tr>
              <tr>
                <td>AI Quote Engine</td>
                <td>Add-on</td>
                <td className="rec-col">Included</td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>Win-probability scoring</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Digital Sales Room</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Product Configurator (CPQ)</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">Add-on</td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>

              <tr className="cat">
                <td colSpan={4}>INTEGRATIONS &amp; API</td>
              </tr>
              <tr>
                <td>WordPress / WooCommerce</td>
                <td>
                  <span className="yes">✓</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Webhooks</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Custom integrations</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">
                  <span className="no">—</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>

              <tr className="cat">
                <td colSpan={4}>SUPPORT</td>
              </tr>
              <tr>
                <td>Email support</td>
                <td>
                  <span className="yes">✓</span>
                </td>
                <td className="rec-col">
                  <span className="yes">✓</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Response time</td>
                <td>24hr</td>
                <td className="rec-col">12hr</td>
                <td>2hr</td>
              </tr>
              <tr>
                <td>Phone support</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">
                  <span className="no">—</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>Dedicated success manager</td>
                <td>
                  <span className="no">—</span>
                </td>
                <td className="rec-col">
                  <span className="no">—</span>
                </td>
                <td>
                  <span className="yes">✓</span>
                </td>
              </tr>
              <tr>
                <td>SLA guarantee</td>
                <td>99.5%</td>
                <td className="rec-col">99.5%</td>
                <td>99.9%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>
                  <Button variant="ghost" href="#trial">
                    Start free trial
                  </Button>
                </td>
                <td className="rec-col">
                  <Button variant="primary" href="#trial">
                    Start free trial
                  </Button>
                </td>
                <td>
                  <Button variant="ghost" href="#contact">
                    Contact sales
                  </Button>
                </td>
              </tr>
            </tfoot>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
