import React from "react";
import Button from "@/components/Button";
import SectionCapsule from "@/components/SectionCapsule";

export default function IntegrationsHero() {
  const nodes = [
    { cx: 280, cy: 58, label: "PAYMENTS" },
    { cx: 468, cy: 148, label: "COMMERCE" },
    { cx: 478, cy: 342, label: "MARKETING" },
    { cx: 280, cy: 432, label: "SHIPPING" },
    { cx: 82, cy: 342, label: "ANALYTICS" },
    { cx: 92, cy: 148, label: "INFRA" },
  ] as const;

  return (
    <header className="integrations-hero relative flex flex-col overflow-hidden bg-hero-grid sm:min-h-[var(--home-hero-h)] sm:justify-center">
      <div className="pointer-events-none absolute inset-0 bg-hero-glows" aria-hidden="true" />
      <div className="integrations-hero-inner relative z-10 mx-auto grid w-full max-w-[var(--w-max,1200px)] grid-cols-1 items-stretch gap-10 px-5 py-12 sm:grid-cols-2 sm:px-8">
        <div className="integrations-hero-copy flex min-h-0 flex-col text-left">
          <div className="integrations-hero-copy-main">
            <SectionCapsule>Integrations</SectionCapsule>
            <h1 className="text-[1.75rem] leading-[1.1] font-extrabold tracking-normal sm:text-[clamp(2.1rem,5vw,4rem)] sm:leading-[1.03]">
              Integrations that connect Nova Core to{" "}
              <span className="grad-text">the stack you already run.</span>
            </h1>
            <p className="lede">
              Payments, commerce platforms, marketing, shipping, and analytics — connected in settings, kept in sync by
              webhooks. And when a tool isn&apos;t here yet, the API is.
            </p>
          </div>
          <div className="integrations-hero-copy-foot">
            <div className="cta-row">
              <Button variant="primary" size="lg" href="#directory">
                Browse integrations
              </Button>
              <Button variant="ghost" size="lg" href="https://app.buyience.com/register">
                Start free trial
              </Button>
            </div>
          </div>
        </div>

        <div className="integrations-hero-visual constellation min-h-0 w-full" aria-hidden="true">
          <svg viewBox="0 0 560 490" xmlns="http://www.w3.org/2000/svg" role="presentation" className="h-auto w-full">
            <defs>
              <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#D444EE" />
                <stop offset=".55" stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#6D5DF6" />
              </linearGradient>
              <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.28" />
                <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
              </radialGradient>
              <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#1b1140" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* Soft hub glow */}
            <circle cx="280" cy="245" r="118" fill="url(#hubGlow)" />

            {/* Orbit ring */}
            <circle className="const-orbit" cx="280" cy="245" r="158" />

            {/* Spokes */}
            {nodes.map((node) => (
              <line
                key={`line-${node.label}`}
                className="const-line"
                x1="280"
                y1="245"
                x2={node.cx}
                y2={node.cy}
              />
            ))}

            {/* Outer nodes */}
            {nodes.map((node) => (
              <g key={node.label}>
                <circle
                  className="const-node"
                  cx={node.cx}
                  cy={node.cy}
                  r="40"
                  filter="url(#nodeShadow)"
                />
                <text className="const-label" x={node.cx} y={node.cy + 4} textAnchor="middle">
                  {node.label}
                </text>
              </g>
            ))}

            {/* Hub */}
            <circle className="const-hub-ring" cx="280" cy="245" r="72" />
            <circle className="const-hub" cx="280" cy="245" r="62" />
            <text className="const-hub-label" x="280" y="239" textAnchor="middle">
              NOVA
            </text>
            <text className="const-hub-label" x="280" y="258" textAnchor="middle">
              CORE
            </text>
          </svg>
        </div>
      </div>
    </header>
  );
}
