import React from "react";
import styles from "./HomeStats.module.css";

const STATS = [
  { value: "90%", label: "faster quote turnaround" },
  { value: "95%", label: "pricing accuracy" },
  { value: "15 min", label: "to a live storefront" },
  { value: "50+", label: "integrations" },
];

export default function HomeStats({ purple = false }: { purple?: boolean }) {
  return (
    <section
      className={`home-stats ${styles.section} ${purple ? "bg-(--surface)" : ""}`.trim()}
      aria-label="Platform outcomes"
    >
      <div className="container">
        <dl className={`home-stats-grid ${styles.grid}`}>
          {STATS.map((stat) => (
            <div key={stat.label} className={`home-stats-item ${styles.item}`}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <strong className={styles.value}>{stat.value}</strong>
                <span className={styles.label}>{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
