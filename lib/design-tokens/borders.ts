/**
 * Design Token: Borders
 * Sistema consistente de bordes, radios y estilos
 */

export const borders = {
  // Border radius scale
  radius: {
    none: "0",
    xs: "0.125rem", // 2px - tiny elements
    sm: "0.25rem", // 4px - small elements
    md: "0.5rem", // 8px - medium (default)
    lg: "0.75rem", // 12px - large cards
    xl: "1rem", // 16px - larger elements
    "2xl": "1.5rem", // 24px - extra large
    full: "9999px", // circles and full rounding
  },

  // Border widths
  width: {
    none: "0",
    xs: "1px",
    sm: "2px",
    md: "3px",
    lg: "4px",
  },

  // Border colors (semantic)
  colors: {
    default: "currentColor",
    subtle: "rgba(255, 255, 255, 0.05)",
    muted: "rgba(255, 255, 255, 0.1)",
    standard: "rgba(255, 255, 255, 0.2)",
    strong: "rgba(255, 255, 255, 0.3)",
    accent: "rgba(251, 146, 60, 0.3)", // amber-500/30
    accentHover: "rgba(251, 146, 60, 0.5)", // amber-500/50
  },

  // Common border styles
  styles: {
    none: "border-none",
    hairline: "border-xs border-standard",
    thin: "border-sm border-standard",
    normal: "border-md border-standard",
    thick: "border-lg border-standard",
  },
} as const;
