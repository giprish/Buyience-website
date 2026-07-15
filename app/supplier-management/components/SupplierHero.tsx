"use client";

import React, { useState } from "react";
import Button from "@/components/Button";
import { useCurrency } from "@/components/CurrencyProvider";

type StepKey = 1 | 2 | 3 | 4 | 5;

interface FieldRow {
  tag: string;
  text: string;
  status?: "ok" | "warn" | "hl" | "";
}

export default function SupplierHero() {
  const { format, currency } = useCurrency();
  const [currentStep, setCurrentStep] = useState<StepKey>(1);
  const [isCreated, setIsCreated] = useState(false);

  const panels: Record<StepKey, FieldRow[]> = {
    1: [
      { tag: "FIELD", text: "Company · Nordfab Components GmbH" },
      { tag: "FIELD", text: "Registration HRB 88214 · Tax ID DE 314 559" },
      { tag: "CONTACT", text: "anna.weber@nordfab.de · +49 40 5551 020", status: "ok" },
    ],
    2: [
      { tag: "FIELD", text: "Bank · Commerzbank · SWIFT COBADEFF" },
      { tag: "MASKED", text: "Account ····· 4821 — stored securely", status: "ok" },
      { tag: "FIELD", text: `Currency ${currency} · Payment terms Net 30` },
    ],
    3: [
      { tag: "VALID", text: "ISO 9001 · expires Mar 2027", status: "ok" },
      { tag: "EXPIRING", text: "Liability insurance · 21 days left", status: "warn" },
      { tag: "FIELD", text: "Import licence.pdf · uploaded, awaiting verify" },
    ],
    4: [
      { tag: "FIELD", text: "Road freight · 5-day transit" },
      { tag: "FIELD", text: "Zones · DE, UK mainland, BeNeLux" },
      { tag: "RULES", text: `Min order ${format(500)} · chilled transport`, status: "warn" },
    ],
    5: [
      { tag: "BASIC", text: "Complete", status: "ok" },
      { tag: "FINANCIAL", text: "Complete", status: "ok" },
      { tag: "COMPLIANCE", text: "2 valid · 1 expiring flagged", status: "ok" },
      { tag: "READY", text: "Validation passed — create supplier", status: "hl" },
    ],
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as StepKey);
    } else {
      setIsCreated(true);
    }
  };

  return (
    <header className="hero overflow-hidden relative">
      <div className="container hero-grid">
        <div className="flex flex-col text-left">
          <p className="eyebrow">SUPPLIER MANAGEMENT</p>
          <h1>
            B2B supplier management. Every supplier, every document,{" "}
            <span className="grad-text">one workflow.</span>
          </h1>
          <p className="lede">
            Onboard suppliers with a structured 5-step process. Track compliance documents and expiry dates. Configure
            logistics and delivery zones. See supplier status and spending at a glance.
          </p>
          <div className="cta-row">
            <Button variant="primary" size="lg" href="/contact">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" href="/contact">
              Request Demo
            </Button>
          </div>
          <p className="trust-micro">
            14-day trial<span className="dot" aria-hidden="true">·</span>No card required
          </p>
        </div>

        <div>
          <div className="ob" aria-label="Supplier onboarding — step through the 5-step workflow">
            <div className="ob-head">
              <b>New supplier · Nordfab Components GmbH</b>
              <span className="ob-badge">LIVE DEMO</span>
            </div>
            <div className="ob-steps" role="group" aria-label="Onboarding steps">
              {([1, 2, 3, 4, 5] as StepKey[]).map((s) => (
                <button
                  key={s}
                  type="button"
                  className={currentStep > s ? "donec" : ""}
                  aria-pressed={currentStep === s}
                  onClick={() => {
                    setCurrentStep(s);
                    setIsCreated(false);
                  }}
                >
                  <b>{s}</b>
                  {s === 1
                    ? "Basic"
                    : s === 2
                    ? "Financial"
                    : s === 3
                    ? "Compliance"
                    : s === 4
                    ? "Logistics"
                    : "Review"}
                </button>
              ))}
            </div>
            <div className="ob-prog">
              <span className="sr-only">Onboarding progress</span>
              <i style={{ width: `${isCreated ? 100 : currentStep * 20}%` }}></i>
            </div>
            <div className="ob-panel">
              {panels[currentStep].map((row, idx) => (
                <div key={idx} className={`ob-field ${row.status || ""}`}>
                  <span className="tag">{row.tag}</span>
                  <span>{row.text}</span>
                </div>
              ))}
            </div>
            <div className="ob-foot">
              <span className="stat">
                {isCreated ? "APPROVED · ACTIVE" : `STEP ${currentStep} OF 5`}
              </span>
              <button
                className={`ob-next ${currentStep === 5 ? "create" : ""}`}
                type="button"
                onClick={handleNext}
              >
                {isCreated ? "✓ Supplier created" : currentStep === 5 ? "✓ Create supplier" : "Next step →"}
              </button>
            </div>
          </div>
          <p className="ob-note">Structured onboarding — no missed fields, no incomplete profiles</p>
        </div>
      </div>
    </header>
  );
}
