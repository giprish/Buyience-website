"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: EASE },
  },
};

const tagTones = {
  default: "bg-(--surface-2) text-(--muted)",
  done: "bg-(--mint-tint) text-(--mint)",
  active: "bg-(--violet-deep) text-white",
  warn: "bg-(--red-tint) text-(--red)",
} as const;

export type MiniRowTone = keyof typeof tagTones;

export function MiniUi({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion() === true;
  const classes =
    `w-full max-w-[440px] rounded-xl border border-(--border) bg-white p-6 text-[13.5px] leading-[1.55] shadow-(--shadow-1) ${className}`.trim();

  if (reduceMotion) {
    return (
      <div aria-label={label} className={classes}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      aria-label={label}
      className={classes}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -2, scale: 1.01 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      variants={listVariants}
    >
      {children}
    </motion.div>
  );
}

export function MiniRow({
  tag,
  tone = "default",
  trailing,
  children,
}: {
  tag: string;
  tone?: MiniRowTone;
  trailing?: React.ReactNode;
  children: React.ReactNode;
}) {
  const reduceMotion = useReducedMotion() === true;
  const classes = `flex items-center gap-3 rounded-lg px-3 py-2.75 not-first:mt-1.5 ${tone === "active" ? "bg-(--violet-tint)" : ""}`;

  const body = (
    <>
      <span
        className={`shrink-0 rounded-full px-2.25 py-1 font-mono text-[10.5px] tracking-[0.06em] ${tagTones[tone]}`}
      >
        {tag}
      </span>
      <span className="min-w-0 flex-1">{children}</span>
      {trailing}
    </>
  );

  if (reduceMotion) {
    return <div className={classes}>{body}</div>;
  }

  return (
    <motion.div
      className={classes}
      variants={itemVariants}
      whileHover={{ x: 2 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {body}
    </motion.div>
  );
}
