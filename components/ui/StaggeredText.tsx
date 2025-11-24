"use client";

import { useElementOnScreen } from "@/lib/hooks/useElementOnScreen";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delayStart?: number;
}

/**
 * STAGGERED TEXT COMPONENT
 * Anima cada carácter del texto con un delay progresivo
 * Perfecto para títulos y headings
 */
export default function StaggeredText({
  text,
  className = "",
  delayStart = 0,
}: StaggeredTextProps) {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  return (
    <div ref={ref} className={`flex flex-wrap justify-center ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-700 ease-out ${
            isVisible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-full opacity-0 blur-sm"
          }`}
          style={{ transitionDelay: `${delayStart + index * 40}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}
