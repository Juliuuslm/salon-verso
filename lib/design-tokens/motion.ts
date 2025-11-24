/**
 * Design Token: Motion & Animation
 * Sistema consistente de transiciones y animaciones
 *
 * Cumple con WCAG 2.3.3 (Animation from Interactions)
 * Respeta prefers-reduced-motion
 */

export const motion = {
  // Duration scales
  duration: {
    fast: "150ms", // quick feedback
    normal: "300ms", // standard transitions
    slow: "500ms", // deliberate animations
    slower: "700ms", // entrance animations
    slowest: "1000ms", // parallax, scroll animations
  },

  // Easing functions
  easing: {
    // Linear (use sparingly)
    linear: "linear",

    // Ease in/out (smooth and natural)
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",

    // Bounce and playful
    easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeOutQuart: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",

    // Smooth entrance
    smoothEntrance: "cubic-bezier(0.2, 0.65, 0.3, 0.9)",
  },

  // Delay timing
  delay: {
    none: "0ms",
    xs: "50ms",
    sm: "100ms",
    md: "200ms",
    lg: "300ms",
    xl: "400ms",
  },

  // Common transition properties
  transitions: {
    // Standard color/opacity transition
    colors: "color, background-color, border-color 300ms cubic-bezier(0.4, 0, 0.2, 1)",

    // Standard transform transition
    transform: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",

    // All smooth
    all: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",

    // Focus state
    focus: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Reduced motion (accessibility)
  prefersReducedMotion: "@media (prefers-reduced-motion: reduce)",

  // Motion tokens for specific components
  hover: {
    duration: "300ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  focus: {
    duration: "200ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  entrance: {
    duration: "700ms",
    easing: "cubic-bezier(0.2, 0.65, 0.3, 0.9)",
  },

  exit: {
    duration: "300ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

/**
 * Helper para aplicar prefers-reduced-motion
 * Retorna duration de 0 si el usuario prefiere movimiento reducido
 */
export function getMotionDuration(
  duration: typeof motion.duration[keyof typeof motion.duration],
  respectPrefersReducedMotion: boolean = true
): string {
  if (respectPrefersReducedMotion) {
    return `${duration}, 0ms ${motion.prefersReducedMotion}`;
  }
  return duration;
}

/**
 * Animation presets
 */
export const animations = {
  // Fade in/out
  fadeIn: {
    duration: "300ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    from: { opacity: "0" },
    to: { opacity: "1" },
  },

  // Slide up
  slideUp: {
    duration: "500ms",
    easing: "cubic-bezier(0.2, 0.65, 0.3, 0.9)",
    from: { transform: "translateY(1rem)", opacity: "0" },
    to: { transform: "translateY(0)", opacity: "1" },
  },

  // Slide down
  slideDown: {
    duration: "500ms",
    easing: "cubic-bezier(0.2, 0.65, 0.3, 0.9)",
    from: { transform: "translateY(-1rem)", opacity: "0" },
    to: { transform: "translateY(0)", opacity: "1" },
  },

  // Scale
  scaleIn: {
    duration: "300ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    from: { transform: "scale(0.95)", opacity: "0" },
    to: { transform: "scale(1)", opacity: "1" },
  },
} as const;
