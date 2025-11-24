/**
 * Design Token: Typography
 * Sistema tipográfico consistente
 *
 * Families:
 * - Serif: Playfair Display (headings, premium)
 * - Sans: Inter (body, UI)
 */

export const typography = {
  // Font families
  fontFamily: {
    serif: '"Playfair Display", serif',
    sans: '"Inter", sans-serif',
  },

  // Font sizes with clamp() for fluid typography
  fontSize: {
    xs: "0.75rem", // 12px - captions
    sm: "0.875rem", // 14px - small text
    base: "1rem", // 16px - body
    lg: "1.125rem", // 18px - body large
    xl: "1.25rem", // 20px - subheading
    "2xl": "1.5rem", // 24px - small heading
    "3xl": "1.875rem", // 30px - medium heading
    "4xl": "2.25rem", // 36px - large heading
    "5xl": "3rem", // 48px - extra large
    "6xl": "3.75rem", // 60px - display
    "7xl": "4.5rem", // 72px - display large
    "8xl": "6rem", // 96px - display extra large
    "9xl": "8rem", // 128px - hero title
  },

  // Font weights
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },

  // Line heights (for optimal readability)
  lineHeight: {
    tight: "1.2", // headings
    snug: "1.4", // captions, labels
    normal: "1.5", // body
    relaxed: "1.6", // large body text
    loose: "2", // lists, special content
  },

  // Letter spacing (tracking)
  letterSpacing: {
    tight: "-0.02em",
    normal: "0em",
    wide: "0.05em",
    wider: "0.1em",
    widest: "0.2em",
    widest2: "0.3em",
    widest3: "0.5em",
  },

  // Text styles presets with fluid typography
  styles: {
    // Headings - using clamp() for fluid responsive sizing
    h1: {
      fontSize: "clamp(2rem, 8vw, 6rem)", // 32px → 96px (scales smoothly)
      fontWeight: "700",
      lineHeight: "1.2",
      fontFamily: "serif",
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "clamp(1.5rem, 5vw, 3.75rem)", // 24px → 60px
      fontWeight: "700",
      lineHeight: "1.2",
      fontFamily: "serif",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontSize: "clamp(1.25rem, 3.5vw, 2.25rem)", // 20px → 36px
      fontWeight: "600",
      lineHeight: "1.3",
      fontFamily: "serif",
    },
    h4: {
      fontSize: "clamp(1.125rem, 2.5vw, 1.875rem)", // 18px → 30px
      fontWeight: "600",
      lineHeight: "1.4",
      fontFamily: "serif",
    },
    h5: {
      fontSize: "clamp(1rem, 2vw, 1.5rem)", // 16px → 24px
      fontWeight: "600",
      lineHeight: "1.4",
    },

    // Body
    body: {
      fontSize: "1rem", // 16px
      fontWeight: "400",
      lineHeight: "1.6",
      fontFamily: "sans",
    },
    bodyLarge: {
      fontSize: "1.125rem", // 18px
      fontWeight: "400",
      lineHeight: "1.6",
      fontFamily: "sans",
    },
    bodySmall: {
      fontSize: "0.875rem", // 14px
      fontWeight: "400",
      lineHeight: "1.5",
      fontFamily: "sans",
    },

    // UI elements
    label: {
      fontSize: "0.75rem", // 12px
      fontWeight: "500",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      fontFamily: "sans",
    },
    button: {
      fontSize: "0.875rem", // 14px
      fontWeight: "600",
      letterSpacing: "0.05em",
      textTransform: "uppercase",
      fontFamily: "sans",
    },
    caption: {
      fontSize: "0.75rem", // 12px
      fontWeight: "400",
      lineHeight: "1.4",
      fontFamily: "sans",
    },
  },
} as const;
