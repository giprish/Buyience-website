"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";

/**
 * Framer-style dotted Earth (COBE). Still — no rotation.
 * Keep scale ≤ ~1 so the sphere + glow stay inside the canvas;
 * corner cropping is handled by CSS overflow on the parent card
 * (avoids harsh square edges cutting through the dots).
 */
export default function DottedGlobe({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = Math.max(canvas.offsetWidth, 320);
    // Camera angle similar to the COBE / Framer demo (Americas-forward feel)
    const phi = 0.35;
    const theta = 0.28;
    let revealed = false;

    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi,
      theta,
      dark: 0,
      diffuse: 1.6,
      mapSamples: 24000,
      mapBrightness: 8,
      // Purple land dots
      baseColor: [0.42, 0.28, 0.82],
      markerColor: [0.42, 0.28, 0.82],
      // White glow blends into the white card — no colored square fringe
      glowColor: [1, 1, 1],
      markers: [],
      // Full sphere must fit in the canvas so edges stay circular
      scale: 1.02,
      offset: [0, 0],
      onRender: (state) => {
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

    const onResize = () => {
      const next = canvas.offsetWidth;
      if (next > 0) width = next;
    };
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, []);

  return (
    <div className={`dotted-globe ${className}`}>
      <canvas
        ref={canvasRef}
        className="dotted-globe-canvas"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 0.45s ease",
        }}
      />
    </div>
  );
}
