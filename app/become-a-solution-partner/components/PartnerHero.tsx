"use client";

import React, { useState } from "react";
import Button from "@/components/Button";

export default function PartnerHero() {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    phone: "",
    loc: "",
    company: "",
    ptype: "",
    about: "",
    website2: "", // honeypot
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: false }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website2) {
      return;
    }

    const newErrors: Record<string, boolean> = {};
    if (!formData.first.trim()) newErrors.first = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true;
    }
    if (!formData.loc) newErrors.loc = true;
    if (!formData.company.trim()) newErrors.company = true;
    if (!formData.ptype) newErrors.ptype = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success state
    setSubmitted(true);
  };

  const benefits = [
    {
      title: "Revenue share",
      desc: "Earn recurring commission on every client you bring to Nova Core — for as long as they stay.",
      svg: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      title: "Implementation fees — 100% yours",
      desc: "Bill clients directly for setup, customization, and training. We don't take a cut of your services.",
      svg: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
    {
      title: "Deal registration & sales support",
      desc: "Register your deals directly with the team — registered clients are protected as yours, and we help you close them.",
      svg: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
    },
    {
      title: "Co-marketing",
      desc: "Joint case studies with your first implementations, promoted through our channels alongside yours.",
      svg: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 3.9M15.4 6.5l-6.8 3.9" />
        </svg>
      ),
    },
  ];

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        <div className="flex flex-col text-left">
          <p className="eyebrow">BUYIENCE PARTNER PROGRAM</p>
          <h1>
            Become a Nova Core solution partner. <span className="grad-text">Grow your business with us.</span>
          </h1>
          <p className="lede">
            Join our network of implementation partners. Help B2B businesses modernize their commerce stack — and earn
            recurring revenue doing it.
          </p>

          {benefits.map((b, idx) => (
            <div className="benefit" key={idx}>
              <span className="ic" aria-hidden="true">
                {b.svg}
              </span>
              <div>
                <b>{b.title}</b>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}

          <div className="ideal">
            <p className="h">IDEAL FOR</p>
            <div className="chips">
              <span>Digital agencies</span>
              <span>B2B consultants</span>
              <span>WordPress / WooCommerce specialists</span>
              <span>ERP &amp; eCommerce consultants</span>
            </div>
          </div>
        </div>

        {/* APPLICATION FORM CARD */}
        <div className="card reveal in">
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <p className="card-h">Apply to the partner program</p>
              <p className="card-sub">Tell us about your business and we'll be in touch.</p>

              {/* Honeypot field */}
              <div className="hp" aria-hidden="true">
                <label>
                  Leave this empty
                  <input
                    type="text"
                    id="website2"
                    value={formData.website2}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="row2">
                <div className={`f ${errors.first ? "invalid" : ""}`}>
                  <label htmlFor="first">First name *</label>
                  <input type="text" id="first" value={formData.first} onChange={handleChange} autoComplete="given-name" />
                  <span className="err">Required.</span>
                </div>
                <div className="f">
                  <label htmlFor="last">
                    Last name <span className="opt">(optional)</span>
                  </label>
                  <input type="text" id="last" value={formData.last} onChange={handleChange} autoComplete="family-name" />
                </div>
              </div>

              <div className={`f ${errors.email ? "invalid" : ""}`}>
                <label htmlFor="email">Business email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@agency.com"
                />
                <span className="err">Please enter a valid email.</span>
              </div>

              <div className="row2">
                <div className="f">
                  <label htmlFor="phone">
                    Phone <span className="opt">(optional)</span>
                  </label>
                  <input type="text" id="phone" value={formData.phone} onChange={handleChange} autoComplete="tel" />
                </div>
                <div className={`f ${errors.loc ? "invalid" : ""}`}>
                  <label htmlFor="loc">Location *</label>
                  <select id="loc" value={formData.loc} onChange={handleChange}>
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

              <div className={`f ${errors.company ? "invalid" : ""}`}>
                <label htmlFor="company">Company *</label>
                <input type="text" id="company" value={formData.company} onChange={handleChange} autoComplete="organization" />
                <span className="err">Required.</span>
              </div>

              <div className={`f ${errors.ptype ? "invalid" : ""}`}>
                <label htmlFor="ptype">Partner type *</label>
                <select id="ptype" value={formData.ptype} onChange={handleChange}>
                  <option value="">Select partner type</option>
                  <option value="Digital agency">Digital agency</option>
                  <option value="B2B consultant / integrator">B2B consultant / integrator</option>
                  <option value="WordPress / WooCommerce specialist">WordPress / WooCommerce specialist</option>
                  <option value="ERP / eCommerce consultant">ERP / eCommerce consultant</option>
                  <option value="Other">Other</option>
                </select>
                <span className="err">Required.</span>
              </div>

              <div className="f">
                <label htmlFor="about">
                  Tell us about your business <span className="opt">(optional)</span>
                </label>
                <textarea
                  id="about"
                  value={formData.about}
                  onChange={handleChange}
                  placeholder="Your clients, your services, why Nova Core fits your practice…"
                ></textarea>
              </div>

              <div className="submit-row">
                <button type="submit" className="btn btn-primary">
                  Submit application
                </button>
                <p className="fine">We only use your details to talk to you about the partner program.</p>
              </div>
            </form>
          ) : (
            <div className="success show" role="status">
              <div className="tick">✓</div>
              <h3>Application received.</h3>
              <p>You'll hear from us directly — applications go to the founding team, not a queue.</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
