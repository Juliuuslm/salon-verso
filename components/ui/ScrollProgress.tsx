"use client";

import { useState, useEffect } from "react";

/**
 * SCROLL PROGRESS COMPONENT
 * Muestra una barra de progreso del scroll en la parte superior de la página
 * Ayuda al usuario a entender cuánto ha avanzado
 */
export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 z-[999] transition-all duration-300 ease-out origin-left"
      style={{
        width: `${scrollProgress}%`,
        opacity: scrollProgress > 0 ? 1 : 0,
      }}
      role="progressbar"
      aria-label="Scroll progress"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
