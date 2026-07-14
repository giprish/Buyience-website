"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PartnerHero() {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [itype, setItype] = useState("");
  const [site, setSite] = useState("");
  const [plans, setPlans] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [errors, setErrors] = useState({
    first: false,
    email: false,
    location: false,
    company: false,
    itype: false,
    site: false,
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isFirstErr = first.trim().length === 0;
    const isEmailErr = !emailRegex.test(email.trim());
    const isLocErr = location.trim().length === 0;
    const isCompErr = company.trim().length === 0;
    const isTypeErr = itype.trim().length === 0;
    const isSiteErr = site.trim().length === 0;

    setErrors({
      first: isFirstErr,
      email: isEmailErr,
      location: isLocErr,
      company: isCompErr,
      itype: isTypeErr,
      site: isSiteErr,
    });

    if (isFirstErr || isEmailErr || isLocErr || isCompErr || isTypeErr || isSiteErr) {
      return;
    }

    setIsSuccess(true);
    const formElement = document.getElementById("tSuccess");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const benefits = [
    {
      title: "Full API access",
      description: "80+ REST endpoints, 38 webhook events, and a sandbox tenant to build against.",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "A listing in the integration directory",
      description: (
        <>
          Your product, categorised and searchable, in front of every customer evaluating their stack.{" "}
          <Link href="/integrations" className="underline font-semibold text-violet-700">
            See the directory →
          </Link>
        </>
      ),
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
    {
      title: "Engineers, not a ticket queue",
      description: "Direct access to the people who built the API while you're building against it.",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2a7 7 0 0 0-4 12.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 2zM9 21h6" />
        </svg>
      ),
    },
    {
      title: "Co-marketing",
      description:
        "Joint launch announcements and case studies from the first shared customers — promoted through both our channels.",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 11l18-5v12L3 14v-3zM11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
      ),
    },
  ];

  const chips = [
    "ERP systems",
    "Payment gateways",
    "Shipping & logistics",
    "Accounting software",
    "Warehouse management",
    "CRM & PIM",
  ];

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        {/* Left Side Info */}
        <div className="flex flex-col text-left">
          <p className="eyebrow">TECHNOLOGY PARTNER PROGRAM</p>
          <h1>
            Integrate your software with <span className="grad-text">an AI-native B2B commerce platform.</span>
          </h1>
          <p className="lede">
            Connect your product to Nova Core and reach wholesalers, distributors, and manufacturers who need what
            you build — while the integration directory is small enough that yours is the one they see.
          </p>

          <div className="mt-6">
            {benefits.map((b, idx) => (
              <div key={idx} className="benefit">
                <span className="ic" aria-hidden="true">
                  {b.icon}
                </span>
                <div>
                  <b>{b.title}</b>
                  <p>{b.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="ideal">
            <p className="h">IDEAL INTEGRATION PARTNERS</p>
            <div className="chips">
              {chips.map((chip, idx) => (
                <span key={idx}>{chip}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Application Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card"
          id="tFormContainer"
        >
          {!isSuccess ? (
            <form onSubmit={handleSubmit} noValidate>
              <p className="card-h">Apply for technology partnership</p>
              <p className="card-sub">Tell us about your product and integration plans.</p>

              {/* Honeypot spambot trap */}
              <div className="hp" aria-hidden="true">
                <label>
                  Leave this empty
                  <input
                    type="text"
                    name="website2"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </label>
              </div>

              {/* Row: First and Last Name */}
              <div className="row2">
                <div className={`f ${errors.first ? "invalid" : ""}`} id="fFirst">
                  <label htmlFor="first">First name *</label>
                  <input
                    type="text"
                    id="first"
                    autoComplete="given-name"
                    value={first}
                    onChange={(e) => {
                      setFirst(e.target.value);
                      setErrors((prev) => ({ ...prev, first: false }));
                    }}
                  />
                  <span className="err">Required.</span>
                </div>
                <div className="f">
                  <label htmlFor="last">
                    Last name <span className="opt">(optional)</span>
                  </label>
                  <input type="text" id="last" autoComplete="family-name" value={last} onChange={(e) => setLast(e.target.value)} />
                </div>
              </div>

              {/* Email */}
              <div className={`f ${errors.email ? "invalid" : ""}`} id="fEmail">
                <label htmlFor="email">Business email *</label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: false }));
                  }}
                />
                <span className="err">Please enter a valid email.</span>
              </div>

              {/* Row: Phone and Location */}
              <div className="row2">
                <div className="f">
                  <label htmlFor="phone">
                    Phone <span className="opt">(optional)</span>
                  </label>
                  <input type="text" id="phone" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className={`f ${errors.location ? "invalid" : ""}`} id="fLoc">
                  <label htmlFor="loc">Location *</label>
                  <select
                    id="loc"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setErrors((prev) => ({ ...prev, location: false }));
                    }}
                  >
                    <option value="">Select…</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>India</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Netherlands</option>
                    <option>Ireland</option>
                    <option>Spain</option>
                    <option>Italy</option>
                    <option>United Arab Emirates</option>
                    <option>Singapore</option>
                    <option>New Zealand</option>
                    <option>South Africa</option>
                    <option>Other</option>
                  </select>
                  <span className="err">Required.</span>
                </div>
              </div>

              {/* Company / Product Name */}
              <div className={`f ${errors.company ? "invalid" : ""}`} id="fCompany">
                <label htmlFor="company">Company / product name *</label>
                <input
                  type="text"
                  id="company"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    setErrors((prev) => ({ ...prev, company: false }));
                  }}
                />
                <span className="err">Required.</span>
              </div>

              {/* Row: Integration Type and Website */}
              <div className="row2">
                <div className={`f ${errors.itype ? "invalid" : ""}`} id="fType">
                  <label htmlFor="itype">Integration type *</label>
                  <select
                    id="itype"
                    value={itype}
                    onChange={(e) => {
                      setItype(e.target.value);
                      setErrors((prev) => ({ ...prev, itype: false }));
                    }}
                  >
                    <option value="">Select…</option>
                    <option>ERP system</option>
                    <option>Payment gateway</option>
                    <option>Shipping &amp; logistics</option>
                    <option>Accounting software</option>
                    <option>Warehouse management</option>
                    <option>CRM</option>
                    <option>PIM / product data</option>
                    <option>Other</option>
                  </select>
                  <span className="err">Required.</span>
                </div>
                <div className={`f ${errors.site ? "invalid" : ""}`} id="fSite">
                  <label htmlFor="site">Product website *</label>
                  <input
                    type="url"
                    id="site"
                    placeholder="https://"
                    value={site}
                    onChange={(e) => {
                      setSite(e.target.value);
                      setErrors((prev) => ({ ...prev, site: false }));
                    }}
                  />
                  <span className="err">Required.</span>
                </div>
              </div>

              {/* Plans */}
              <div className="f">
                <label htmlFor="plans">
                  Your integration plans <span className="opt">(optional)</span>
                </label>
                <textarea
                  id="plans"
                  placeholder="What you'd connect, which direction data flows, whether a shared customer is already asking…"
                  value={plans}
                  onChange={(e) => setPlans(e.target.value)}
                ></textarea>
              </div>

              {/* Submit */}
              <div className="submit-row">
                <button type="submit" className="btn btn-primary">
                  Submit application
                </button>
                <p className="fine">We only use your details to talk to you about the partnership.</p>
              </div>
            </form>
          ) : (
            <div className="success show" id="tSuccess" role="status">
              <div className="tick">✓</div>
              <h3>Application received.</h3>
              <p>
                It goes straight to the engineering team. If there's a fit, you'll hear from a person who can actually
                answer API questions.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
}
