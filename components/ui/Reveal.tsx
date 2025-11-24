"use client";

import { useElementOnScreen } from "@/lib/hooks/useElementOnScreen";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
  variant?: "standard" | "blur";
}

/**
 * REVEAL COMPONENT
 * Componente que anima elementos cuando entran en el viewport
 * Soporta diferentes direcciones y variantes de animación
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  variant = "standard",
}: RevealProps) {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });

  const getTransform = (): string => {
    if (!isVisible) {
      switch (direction) {
        case "left":
          return "-translate-x-12";
        case "right":
          return "translate-x-12";
        case "up":
        default:
          return "translate-y-16";
      }
    }
    return "translate-y-0 translate-x-0";
  };

  const getBlur = (): string => {
    if (variant === "blur") {
      return isVisible
        ? "blur-0 scale-100 opacity-100"
        : "blur-sm scale-95 opacity-0";
    }
    return isVisible ? "opacity-100" : "opacity-0";
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform will-change-transform ${getTransform()} ${getBlur()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
