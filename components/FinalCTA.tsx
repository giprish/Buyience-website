"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";
import DottedGlobe from "@/components/DottedGlobe";

export type FinalCTAAction = {
  label: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  variant?: "primary" | "ghost" | "secondary" | "outline-gray" | "text";
};

export type FinalCTAProps = {
  capsule?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  primaryAction?: FinalCTAAction;
  secondaryAction?: FinalCTAAction | null;
  trust?: React.ReactNode | null;
  id?: string;
  className?: string;
};

const DEFAULT_PRIMARY: FinalCTAAction = {
  label: "Start free trial",
  href: "https://app.buyience.com/register",
  variant: "ghost",
};

const DEFAULT_SECONDARY: FinalCTAAction = {
  label: "See Pricing",
  href: "/pricing",
  variant: "ghost",
};

const GLOBE_MQ = "(min-width: 901px)";

export default function FinalCTA({
  capsule = "Get Started",
  title,
  description,
  primaryAction = DEFAULT_PRIMARY,
  secondaryAction = DEFAULT_SECONDARY,
  trust = (
    <>
      14-day trial<span className="dot">·</span>No card required
    </>
  ),
  id,
  className = "",
}: FinalCTAProps) {
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(GLOBE_MQ);
    const update = () => setShowGlobe(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className={`final-card-section ${className}`.trim()} id={id}>
      <div className="final-card-container">
        <div className="final-card">
          <div className="final-card-copy">
            <SectionCapsule variant="outline" showIcon>
              {capsule}
            </SectionCapsule>

            <h2>{title}</h2>

            <p>{description}</p>

            <div className="final-card-actions">
              <Button
                variant={primaryAction.variant ?? "ghost"}
                size="lg"
                href={primaryAction.href}
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
              </Button>
              {secondaryAction && (
                <Button
                  variant={secondaryAction.variant ?? "ghost"}
                  size="lg"
                  href={secondaryAction.href}
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </div>

            {trust != null && <p className="final-card-trust">{trust}</p>}
          </div>

          {showGlobe && (
            <div className="final-card-visual" aria-hidden="true">
              <DottedGlobe />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
