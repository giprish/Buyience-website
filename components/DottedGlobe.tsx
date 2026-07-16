"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

const PHI_DRAG = 0.005;
const THETA_DRAG = 0.003;
const AUTO_ROTATE_SPEED = 0.00012;
const THETA_MIN = -Math.PI / 3;
const THETA_MAX = Math.PI / 3;

/**
 * Framer-style dotted Earth (COBE) — light gray sphere with black stippled land.
 * Auto-spin and drag-to-rotate. Corner cropping is handled by CSS overflow on
 * the parent card (avoids harsh square edges cutting through the dots).
 */
export default function DottedGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    let width = Math.max(canvas.offsetWidth, 320);
    // Camera angle similar to the COBE / Framer demo (Americas-forward feel)
    let phi = 0.35;
    let theta = 0.28;
    let revealed = false;
    let lastFrame = 0;
    let isDragging = false;
    let lastPointerX = 0;
    let lastPointerY = 0;
    let activePointerId: number | null = null;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta,
      dark: 0,
      diffuse: 1.25,
      mapSamples: 24000,
      mapBrightness: 6.5,
      mapBaseBrightness: 0.04,
      // Monochrome stipple — light gray sphere, near-black land dots
      baseColor: [0.97, 0.97, 0.98],
      markerColor: [0.12, 0.12, 0.14],
      // White glow blends into the white card — no colored square fringe
      glowColor: [1, 1, 1],
      markers: [],
      // Full sphere must fit in the canvas so edges stay circular
      scale: 1.02,
      offset: [0, 0],
      onRender: (state) => {
        const now = performance.now();
        if (!isDragging && lastFrame > 0) {
          phi += (now - lastFrame) * AUTO_ROTATE_SPEED;
        }
        lastFrame = now;

        state.phi = phi;
        state.theta = theta;
        state.width = width * 2;
        state.height = width * 2;

        if (!revealed) {
          revealed = true;
          canvas.style.opacity = "1";
        }
      },
    });

    const onPointerMove = (event: PointerEvent) => {
      if (!isDragging || event.pointerId !== activePointerId) return;

      const dx = event.clientX - lastPointerX;
      const dy = event.clientY - lastPointerY;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;

      phi += dx * PHI_DRAG;
      theta = clamp(theta + dy * THETA_DRAG, THETA_MIN, THETA_MAX);
    };

    const endDrag = (event: PointerEvent) => {
      if (!isDragging || event.pointerId !== activePointerId) return;

      isDragging = false;
      activePointerId = null;
      wrapper.classList.remove("is-dragging");
      lastFrame = 0;

      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      event.preventDefault();
      isDragging = true;
      activePointerId = event.pointerId;
      lastPointerX = event.clientX;
      lastPointerY = event.clientY;
      wrapper.classList.add("is-dragging");

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", endDrag);
      window.addEventListener("pointercancel", endDrag);
    };

    const onResize = () => {
      const next = canvas.offsetWidth;
      if (next > 0) width = next;
    };

    wrapper.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      wrapper.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", endDrag);
      window.removeEventListener("pointercancel", endDrag);
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`dotted-globe ${className}`}>
      <canvas
        ref={canvasRef}
        className="dotted-globe-canvas"
        aria-label="Interactive globe. Drag to rotate."
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          transition: "opacity 0.45s ease",
        }}
      />
    </div>
  );
}
