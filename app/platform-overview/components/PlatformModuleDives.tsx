"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

type StepStatus = "done" | "active" | "pending";

type PipelineStep = {
  tag: string;
  detail: string;
  status: StepStatus;
};

type Module = {
  id: string;
  tab: string;
  eyebrow: string;
  title: string;
  features: string[];
  pipelineLabel: string;
  pipelineAria: string;
  steps: PipelineStep[];
};

const MODULES: Module[] = [
  {
    id: "ai-quote-engine",
    tab: "AI Quote Engine",
    eyebrow: "MODULE 01 · AI QUOTE ENGINE",
    title: "Quotes in seconds. Margins protected.",
    features: [
      "2-click quote generation",
      "Win probability scoring across 11+ factors",
      "Margin protection with cost alerts",
      "Professional PDF delivery",
    ],
    pipelineLabel: "LIVE PIPELINE",
    pipelineAria: "AI quote pipeline",
    steps: [
      { tag: "RESEARCH", detail: "Customer + catalog context loaded", status: "done" },
      { tag: "PRICING", detail: "Rules applied · floor OK", status: "done" },
      { tag: "SCORE", detail: "Win probability attached", status: "active" },
      { tag: "WRITER", detail: "Drafting quote PDF…", status: "pending" },
      { tag: "QUOTE", detail: "Sent · awaiting buyer", status: "pending" },
    ],
  },
  {
    id: "order-inventory",
    tab: "Order & Inventory",
    eyebrow: "MODULE 02 · ORDER & INVENTORY",
    title: "Orders flow. Inventory syncs.",
    features: [
      "10+ order statuses across the lifecycle",
      "Multi-warehouse stock tracking, allocation & transfer orders",
      "Low-stock alerts",
      "1-click quote-to-order conversion",
    ],
    pipelineLabel: "ORDER FLOW",
    pipelineAria: "Order pipeline",
    steps: [
      { tag: "QUOTE", detail: "Accepted · converted to order", status: "done" },
      { tag: "ALLOCATE", detail: "Stock reserved · Warehouse B", status: "done" },
      { tag: "FULFIL", detail: "Picking in progress", status: "active" },
      { tag: "TRACK", detail: "Buyer sees live status", status: "pending" },
      { tag: "DELIVER", detail: "Out for delivery", status: "pending" },
    ],
  },
  {
    id: "supplier-management",
    tab: "Supplier Management",
    eyebrow: "MODULE 03 · SUPPLIER MANAGEMENT",
    title: "Every supplier. One workflow.",
    features: [
      "5-step onboarding with approvals",
      "Certificate & compliance tracking",
      "Delivery zones & logistics",
      "Supplier performance analytics",
    ],
    pipelineLabel: "ONBOARDING",
    pipelineAria: "Supplier onboarding steps",
    steps: [
      { tag: "PROFILE", detail: "Company details captured", status: "done" },
      { tag: "DOCS", detail: "Certificates uploaded", status: "done" },
      { tag: "ZONES", detail: "Delivery zones configured", status: "active" },
      { tag: "APPROVE", detail: "Awaiting approval — Ops team", status: "pending" },
      { tag: "LIVE", detail: "Performance tracking on", status: "pending" },
    ],
  },
  {
    id: "product-configurator",
    tab: "Product Configurator",
    eyebrow: "MODULE 04 · PRODUCT CONFIGURATOR",
    title: "Complex products made simple.",
    features: [
      "Unlimited option groups",
      "Real-time conflict resolution",
      "Dynamic pricing as configurations change",
      "Quote-ready configurations",
    ],
    pipelineLabel: "CONFIGURATION",
    pipelineAria: "Configurator with conflict resolution",
    steps: [
      { tag: "OPT", detail: "Frame · Size L · Finish: matte", status: "done" },
      { tag: "CHECK", detail: "No conflicts · configuration valid", status: "done" },
      { tag: "PRICE", detail: "Repriced dynamically", status: "active" },
      { tag: "READY", detail: "Add to quote", status: "pending" },
      { tag: "QUOTE", detail: "Attached to draft quote", status: "pending" },
    ],
  },
];

const STEP_MS = 1300;

function liveStatus(
  index: number,
  cursor: number,
  stepCount: number,
  fallback: StepStatus,
  reduceMotion: boolean,
): StepStatus {
  if (reduceMotion) return fallback;
  if (cursor >= stepCount) return "done";
  if (index < cursor) return "done";
  if (index === cursor) return "active";
  return "pending";
}

function PipelineGlyph({ status, index }: { status: StepStatus; index: number }) {
  if (status === "done") {
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#16A34A]" aria-hidden="true">
        <Check size={13} strokeWidth={3} className="text-white" />
      </span>
    );
  }

  if (status === "active") {
    return (
      <span className="relative flex h-6 w-6 shrink-0 items-center justify-center" aria-hidden="true">
        <span className="absolute inset-0 rounded-full border-2 border-brand-purple/20" />
        <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-brand-purple border-r-brand-purple" />
        <span className="h-2 w-2 rounded-full bg-brand-purple" />
      </span>
    );
  }

  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#1B1033]/15 text-[11px] font-semibold text-[#1B1033]/35"
      aria-hidden="true"
    >
      {index + 1}
    </span>
  );
}

function stepRowClass(status: StepStatus) {
  if (status === "done") {
    return "border-[#E8E4F4] bg-white text-[#15803D]";
  }
  if (status === "active") {
    return "border-brand-purple bg-white text-brand-purple shadow-[0_0_18px_rgba(110,44,244,0.14)]";
  }
  return "border-[#E8E4F4] bg-white text-[#1B1033]/38";
}

function LivePipeline({
  label,
  ariaLabel,
  steps,
}: {
  label: string;
  ariaLabel: string;
  steps: PipelineStep[];
}) {
  const reduceMotion = useReducedMotion() ?? false;
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
    setCursor(0);
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setCursor((c) => (c + 1) % (steps.length + 1));
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, steps.length]);

  return (
    <div className="flex flex-col justify-center border-t border-[#E8E4F4] bg-(--surface) px-6 py-8 sm:px-9 sm:py-10 md:border-t-0 md:border-l">
      <p className="m-0 mb-5 flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] text-brand-purple uppercase">
        <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
          {!reduceMotion && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-60" />
          )}
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
        </span>
        {label}
      </p>
      <ol className="m-0 flex list-none flex-col gap-2 p-0" aria-label={ariaLabel}>
        {steps.map((step, sIdx) => {
          const status = liveStatus(sIdx, cursor, steps.length, step.status, reduceMotion);
          return (
            <motion.li
              key={step.tag}
              initial={reduceMotion ? false : { opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: reduceMotion ? 0 : sIdx * 0.07 }}
              className={`flex items-center gap-3 rounded-[10px] border px-3.5 py-2.5 transition-[color,background-color,border-color,box-shadow] duration-300 ${stepRowClass(status)}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={status}
                  initial={reduceMotion ? false : { scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={reduceMotion ? undefined : { scale: 0.7, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  <PipelineGlyph status={status} index={sIdx} />
                </motion.span>
              </AnimatePresence>
              <span className="min-w-0">
                <span className="block font-mono text-[10.5px] font-bold tracking-[0.08em] uppercase">
                  {step.tag}
                </span>
                <span className="mt-0.5 block text-[12.5px] leading-snug opacity-90">{step.detail}</span>
              </span>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

export default function PlatformModuleDives({ purple = false }: { purple?: boolean }) {
  const [activeTab, setActiveTab] = useState(0);
  const current = MODULES[activeTab];

  const moveTab = (nextIdx: number) => {
    setActiveTab(nextIdx);
    document.getElementById(`platform-mod-tab-${nextIdx + 1}`)?.focus();
  };

  return (
    <section className={purple ? "bg-(--surface)" : undefined}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="center-head"
        >
          <p className="m-0 text-[11.5px] font-semibold tracking-[0.08em] text-brand-purple uppercase">
            MODULES AT A GLANCE
          </p>
          <h2>Four modules. Complete B2B commerce.</h2>
          <p className="lede">
            Each module works independently or together. Start with what you need, expand as you grow.
          </p>
        </motion.div>

        <div
          className="mt-10 flex flex-wrap justify-center gap-2.5"
          role="tablist"
          aria-label="Platform modules"
        >
          {MODULES.map((mod, idx) => {
            const selected = activeTab === idx;
            return (
              <button
                key={mod.id}
                type="button"
                role="tab"
                id={`platform-mod-tab-${idx + 1}`}
                aria-selected={selected}
                aria-controls={mod.id}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTab(idx)}
                onKeyDown={(e) => {
                  let nextIdx = idx;
                  if (e.key === "ArrowRight") nextIdx = (idx + 1) % MODULES.length;
                  if (e.key === "ArrowLeft") nextIdx = (idx - 1 + MODULES.length) % MODULES.length;
                  if (e.key === "Home") nextIdx = 0;
                  if (e.key === "End") nextIdx = MODULES.length - 1;
                  if (nextIdx !== idx) {
                    e.preventDefault();
                    moveTab(nextIdx);
                  }
                }}
                className={`cursor-pointer rounded-full px-4 py-2 text-[12px] font-bold tracking-[0.04em] uppercase transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-brand-purple/30 focus-visible:outline-none sm:px-5 sm:text-[12.5px] ${
                  selected
                    ? "bg-brand-purple text-white shadow-[0_8px_20px_rgba(110,44,244,0.28)]"
                    : "border border-[#E8E4F4] bg-white text-[#1B1033] hover:border-brand-purple/40"
                }`}
              >
                {mod.tab}
              </button>
            );
          })}
        </div>

        <div className="relative mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              role="tabpanel"
              id={current.id}
              aria-labelledby={`platform-mod-tab-${activeTab + 1}`}
              className="grid overflow-hidden rounded-3xl border border-[#E8E4F4] bg-white shadow-[0_16px_48px_rgba(23,18,65,0.08)] md:grid-cols-2"
            >
              <div className="flex flex-col justify-center px-8 py-10 sm:px-12 sm:py-12 lg:px-14">
                <p className="m-0 text-[11px] font-bold tracking-[0.12em] text-brand-purple uppercase">
                  {current.eyebrow}
                </p>
                <p className="font-heading mt-2.5 mb-0 text-[clamp(1.65rem,2.8vw,2rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#1B1033]">
                  {current.title}
                </p>
                <ul className="mt-7 flex list-none flex-col gap-3.5 p-0">
                  {current.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-center gap-3 text-[15.5px] leading-snug font-medium text-[#1B1033]"
                    >
                      <span
                        className="flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full bg-[#16A34A]"
                        aria-hidden="true"
                      >
                        <Check size={12} strokeWidth={3} className="text-white" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <LivePipeline
                label={current.pipelineLabel}
                ariaLabel={current.pipelineAria}
                steps={current.steps}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
