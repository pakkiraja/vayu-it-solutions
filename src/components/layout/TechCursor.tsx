"use client";

import React, { useEffect, useState, useRef } from "react";

export default function TechCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!isVisible) setIsVisible(true);

        const target = e.target as HTMLElement | null;
        if (target) {
          const isClickable = 
            target.tagName === "BUTTON" ||
            target.tagName === "A" ||
            target.closest("button") !== null ||
            target.closest("a") !== null ||
            target.getAttribute("role") === "button" ||
            target.classList.contains("cursor-pointer");
          setIsPointer(!!isClickable);
        }
      });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision Center Dot */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-vayu-500 transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(2,132,199,0.5)]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? "6px" : "4px",
          height: isPointer ? "6px" : "4px",
        }}
      />

      {/* Cyber Reticle Ring */}
      <div
        className={`fixed -translate-x-1/2 -translate-y-1/2 rounded-full border border-vayu-500/40 transition-all duration-150 ease-out ${
          isPointer 
            ? "scale-150 bg-vayu-500/10 border-vayu-600 shadow-[0_0_12px_rgba(2,132,199,0.25)]" 
            : "scale-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: "28px",
          height: "28px",
        }}
      />
    </div>
  );
}
