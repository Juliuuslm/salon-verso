/**
 * Design Token: Icons
 * Sistema consistente de tamaños y estilos para iconos
 */

export const icons = {
  // Icon sizes (in pixels)
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    md: 20,
    lg: 24,
    xl: 32,
    "2xl": 40,
    "3xl": 48,
    "4xl": 64,
  },

  // Icon stroke widths (for Lucide icons)
  strokeWidth: {
    light: 1,
    normal: 1.5,
    bold: 2,
    thick: 2.5,
  },

  // Icon style presets
  styles: {
    // Navigation icons
    nav: { size: 16, strokeWidth: 1.5 },

    // UI action icons (buttons)
    button: { size: 18, strokeWidth: 1.5 },

    // Large decorative icons
    decorative: { size: 32, strokeWidth: 1.5 },

    // Inline icons (next to text)
    inline: { size: 16, strokeWidth: 1.5 },

    // Header/badge icons
    header: { size: 24, strokeWidth: 1.5 },

    // Form validation icons (error, success)
    validation: { size: 20, strokeWidth: 1.5 },

    // Large hero section icons
    hero: { size: 48, strokeWidth: 1.2 },
  },

  // Color presets
  colors: {
    default: "currentColor",
    muted: "rgba(255, 255, 255, 0.5)",
    subtle: "rgba(255, 255, 255, 0.3)",
    strong: "rgba(255, 255, 255, 0.9)",
    accent: "rgba(251, 146, 60, 0.7)", // amber-500/70
    accentHover: "rgba(251, 146, 60, 1)", // amber-500
    error: "rgba(239, 68, 68, 1)", // red-500
    success: "rgba(34, 197, 94, 1)", // green-500
  },
} as const;
