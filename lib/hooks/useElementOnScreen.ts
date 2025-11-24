"use client";

import { useState, useEffect, useRef, useMemo } from "react";

interface UseElementOnScreenOptions extends IntersectionObserverInit {
  freezeOnce?: boolean;
}

export function useElementOnScreen(
  options: UseElementOnScreenOptions = {}
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Memoizar opciones para evitar reinicializaciones innecesarias
  const memoOptions = useMemo(() => {
    const { freezeOnce, ...observerOptions } = options;
    return {
      ...observerOptions,
      threshold: observerOptions.threshold || 0.1,
      freezeOnce: freezeOnce ?? true,
    };
  }, [options]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (memoOptions.freezeOnce) {
          observer.unobserve(element);
        }
      }
    }, memoOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [memoOptions]);

  return [containerRef, isVisible] as const;
}
