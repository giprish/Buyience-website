"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUp, Plus } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { useCurrency } from "@/components/CurrencyProvider";

const DELAYS = [1400, 1500, 1800, 1800, 1800, 800];
const HOLD = 2500;

export default function SalesRoomDemo() {
  const { format } = useCurrency();
  const reduceMotion = useReducedMotion();
  const [shown, setShown] = useState(0);
  const threadRef = useRef<HTMLDivElement>(null);

  const money = (value: number) => format(value, 2);

  const items = useMemo(
    () => [
      {
        kind: "them" as const,
        who: "RACHEL · BUYER",
        text: "Morning! We reviewed Round 2. The waffle robe and the graphic tee are still a bit high for our margins.",
      },
      { kind: "ai" as const },
      {
        kind: "you" as const,
        who: "ALEX · YOU",
        text: `Here's where I can land: robe ${format(20.5, 2)}, tee holds at ${format(8.8, 2)}. Sending a formal counter now.`,
      },
      {
        kind: "them" as const,
        who: "RACHEL · BUYER",
        text: `That works for the robe. Can you do ${format(8.4, 2)} on the tee if we bump qty to 30?`,
      },
      {
        kind: "you" as const,
        who: "ALEX · YOU",
        text: `Tee at ${format(8.55, 2)} if we lock 30 — still above the floor. Updating the quote now.`,
      },
      {
        kind: "success" as const,
        text: "Quote updated in the room · both parties aligned",
      },
    ],
    [format],
  );

  const total = items.length;

  useEffect(() => {
    if (reduceMotion === true) {
      setShown(total);
      return;
    }
    if (reduceMotion !== false) return;

    let cancelled = false;
    const timers = new Set<ReturnType<typeof setTimeout>>();

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };

    const run = () => {
      let elapsed = 0;
      DELAYS.forEach((delay, i) => {
        elapsed += delay;
        schedule(() => {
          if (!cancelled) setShown(i + 1);
        }, elapsed);
      });
      elapsed += HOLD;
      schedule(() => {
        if (cancelled) return;
        setShown(0);
        run();
      }, elapsed);
    };

    setShown(0);
    run();

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion, total]);

  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTo({
      top: el.scrollHeight,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }, [shown, reduceMotion]);

  const next = shown < total ? items[shown] : null;
  const status =
    next?.kind === "them"
      ? "● Buyer online · typing…"
      : next?.kind === "you"
        ? "● You · typing…"
        : "● Buyer online";

  const typingLabel = next?.kind === "them" ? "Rachel is typing…" : null;
  const draft = next?.kind === "you" && "text" in next ? next.text : "";

  const visible = items.slice(0, shown);
  const aiLive = visible.some((item) => item.kind === "ai");

  return (
    <div className="sales-room-hero-visual relative flex min-h-0 w-full flex-col">
      <div className="room" aria-label="A live negotiation in the Digital Sales Room">
        <div className="room-head">
          <div>
            <b>Sales Room · Q-2048</b>
            <div className="st">{status}</div>
          </div>
          <div className="presence" aria-label="Participants">
            <span className="av on">RA</span>
            <span className="av on">AL</span>
            <span className={`av${aiLive ? " on" : ""}`}>AI</span>
          </div>
        </div>
        <div className="pin">📌 Pinned: Delivery must land before 20-May for the retail launch window.</div>
        <div className="room-thread" aria-hidden="true" ref={threadRef}>
          {shown === 0 ? (
            <p className="room-empty">Digital Sales Room</p>
          ) : null}
          <div className="room-thread-inner">
            {visible.map((item, i) => {
              if (item.kind === "them") {
                return (
                  <div key={`${i}-${item.kind}`} className="msg-row them">
                    <span className="msg-av them">RA</span>
                    <div className="msg them">
                      <span className="who">{item.who}</span>
                      {item.text}
                    </div>
                  </div>
                );
              }
              if (item.kind === "you") {
                return (
                  <div key={`${i}-${item.kind}`} className="msg-row you">
                    <div className="msg you">
                      <span className="who">{item.who}</span>
                      {item.text}
                    </div>
                    <span className="msg-av you">AL</span>
                  </div>
                );
              }
              if (item.kind === "ai") {
                return (
                  <div key={`${i}-ai`} className="ai-card">
                    <div className="ai-h">✦ AI SUGGESTION · based on buyer&apos;s target costs &amp; your margin floor</div>
                    <p>
                      Counter the robe at <b>{money(20.5)}</b> (24.6% margin) and hold the tee at{" "}
                      <b>{money(8.8)}</b>. This raises win probability to <b>81%</b> while staying above your{" "}
                      <b>22% floor</b>.
                    </p>
                    <div className="acts">
                      <span>⇄ Build counter from this</span>
                      <span>Insert as reply</span>
                    </div>
                  </div>
                );
              }
              return (
                <div key={`${i}-success`} className="room-success">
                  <span aria-hidden="true">✓</span>
                  {item.text}
                </div>
              );
            })}
            <p className="typing">{typingLabel ?? "\u00a0"}</p>
          </div>
        </div>
        <div className="room-composer" aria-hidden="true">
          <span className="room-composer-add">
            <Plus size={13} strokeWidth={2.4} />
          </span>
          <div className={`room-composer-field${draft ? " is-typing" : ""}`}>
            {draft ? (
              <>
                <span className="room-composer-draft">{draft}</span>
                <span className="room-composer-caret" />
              </>
            ) : (
              <span className="room-composer-ph">Message as Alex…</span>
            )}
          </div>
          <span className={`room-composer-send${draft ? " is-ready" : ""}`}>
            <ArrowUp size={13} strokeWidth={2.6} />
          </span>
        </div>
      </div>
    </div>
  );
}
