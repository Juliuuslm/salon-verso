/**
 * Design Token: Spacing Scale
 * Sistema de espaciado consistente basado en múltiplos de 4px
 *
 * Uso:
 * - sections: 96px (py-24 md:py-32)
 * - containers: 64px (gap-16)
 * - cards: 32px (p-8 md:p-12)
 * - elements: 16px (mb-4)
 * - micro: 8px (p-2)
 */

export const spacing = {
  // Micro spacing
  xs: "0.5rem", // 8px
  sm: "1rem", // 16px
  md: "1.5rem", // 24px
  lg: "2rem", // 32px
  xl: "3rem", // 48px
  "2xl": "4rem", // 64px
  "3xl": "6rem", // 96px
  "4xl": "8rem", // 128px

  // Section spacing
  section: {
    py: "5rem md:8rem", // 80px / 128px
  },

  // Container padding
  container: {
    px: "1.5rem", // 24px (mobile), scales with container
  },

  // Card spacing
  card: {
    p: "2rem md:3rem", // 32px / 48px
    gap: "1rem md:1.5rem", // 16px / 24px
  },

  // Element spacing
  element: {
    gap: "1rem", // 16px
    mb: "1rem", // 16px
  },
} as const;

/**
 * Spacing multipliers para responsive design
 */
export const spacingResponsive = {
  mobile: "1rem", // 16px
  tablet: "1.5rem", // 24px
  desktop: "2rem", // 32px
  wide: "3rem", // 48px
} as const;

/**
 * Gap sizes para grids y flex
 */
export const gaps = {
  tight: "0.5rem", // 8px
  normal: "1rem", // 16px
  relaxed: "1.5rem", // 24px
  loose: "2rem", // 32px
  spacious: "3rem", // 48px
} as const;

/**
 * Padding presets for common patterns
 */
export const padding = {
  xs: "0.5rem", // 8px
  sm: "1rem", // 16px
  md: "1.5rem", // 24px
  lg: "2rem", // 32px
  xl: "3rem", // 48px
  "2xl": "4rem", // 64px
} as const;
