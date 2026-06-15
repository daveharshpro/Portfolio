"use client";
import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    let ringX = 0, ringY = 0;
    let mouseX = 0, mouseY = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top  = `${mouseY}px`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.12);
      ringY = lerp(ringY, mouseY, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top  = `${ringY}px`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    // Scale up on hoverable elements
    const handleEnter = () => {
      if (dotRef.current)  dotRef.current.style.transform  = "translate(-50%,-50%) scale(2.5)";
      if (ringRef.current) { ringRef.current.style.width = "60px"; ringRef.current.style.height = "60px"; ringRef.current.style.borderColor = "var(--accent)"; }
    };
    const handleLeave = () => {
      if (dotRef.current)  dotRef.current.style.transform  = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) { ringRef.current.style.width = "36px"; ringRef.current.style.height = "36px"; ringRef.current.style.borderColor = "rgba(249,115,22,0.5)"; }
    };

    const interactives = document.querySelectorAll("a, button, .card, .tag");
    interactives.forEach(el => { el.addEventListener("mouseenter", handleEnter); el.addEventListener("mouseleave", handleLeave); });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      <div ref={dotRef}  className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
