"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Shopify", logo: "/images/integrations/shopify.svg", tileText: "Sh" },
  { name: "WooCommerce", logo: "/images/integrations/woocommerce.svg", tileText: "Wc" },
  { name: "Stripe", logo: "/images/integrations/stripe.svg", tileText: "St" },
  { name: "Razorpay", logo: "/images/integrations/razorpay.svg", tileText: "Rz" },
  { name: "PayPal", logo: "/images/integrations/paypal.svg", tileText: "Pp" },
  { name: "Klaviyo", logo: "/images/integrations/klaviyo.svg", tileText: "Kl" },
  { name: "Brevo", logo: "/images/integrations/brevo.png", tileText: "Br" },
  { name: "Shiprocket", logo: "/images/integrations/shiprocket.png", tileText: "Sr" },
  { name: "GA4", logo: "/images/integrations/ga4.svg", tileText: "G4" },
  { name: "Google Ads", logo: "/images/integrations/google-ads.svg", tileText: "GA" },
];

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
          <div className="logo-row" aria-label="Integrations">
            {logos.map((item) => (
              <span key={item.name} className="logo-item" title={item.name}>
                <span className={`tile${item.logo ? " has-logo" : ""}`} aria-label={item.name}>
                  {item.logo ? (
                    <Image
                      src={item.logo}
                      alt={item.name}
                      width={160}
                      height={56}
                      className="tile-logo"
                      unoptimized
                    />
                  ) : (
                    item.tileText
                  )}
                </span>
              </span>
            ))}
          </div>
          <p>
            Nova Core connects to the store, email, and shipping tools you already run — with 80+ API endpoints and 38
            webhook events when you want to go deeper.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
