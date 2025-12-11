"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";

interface ScrollContextType {
  lenis: Lenis | null;
  pauseScroll: () => void;
  resumeScroll: () => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within ScrollProvider");
  }
  return context;
}

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis para smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const pauseScroll = () => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  };

  const resumeScroll = () => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  };

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current, pauseScroll, resumeScroll }}>
      {children}
    </ScrollContext.Provider>
  );
}
