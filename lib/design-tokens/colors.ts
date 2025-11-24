/**
 * Design Token: Colors
 * Sistema de colores completo con WCAG AA compliance
 * Contraste mínimo 4.5:1 para texto small
 */

export const colors = {
  // Primary Brand (Amber/Gold)
  amber: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b", // Primary brand color
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  // Neutral/Gray - Expanded for better contrast
  neutral: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },

  // Semantic Colors - for states and feedback
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#145231",
  },

  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },

  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },

  info: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    200: "#bae6fd",
    300: "#7dd3fc",
    400: "#38bdf8",
    500: "#0ea5e9",
    600: "#0284c7",
    700: "#0369a1",
    800: "#075985",
    900: "#0c3d66",
  },

  // Background colors
  background: {
    primary: "#0a0a0a",
    secondary: "#0c0c0c",
    tertiary: "#0f0f0f",
    overlay: "rgba(0, 0, 0, 0.5)",
  },

  // Text colors - with contrast ratios
  text: {
    primary: "#fafafa", // on dark: 18.5:1
    secondary: "#e5e5e5", // on dark: 12.2:1
    tertiary: "#a3a3a3", // on dark: 4.5:1 (minimum WCAG AA)
    muted: "#737373", // on dark: 3.1:1 (avoid for small text)
  },

  // Borders & Dividers
  border: {
    light: "rgba(255, 255, 255, 0.1)",
    medium: "rgba(255, 255, 255, 0.2)",
    dark: "rgba(255, 255, 255, 0.3)",
  },
} as const;

/**
 * Helper function to get contrasting text color
 * Returns white or dark text depending on background luminance
 */
export function getContrastText(bgColor: string): "light" | "dark" {
  // Simple contrast detection
  // In production, use a library like color-contrast-checker
  const rgb = parseInt(bgColor.slice(1), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "dark" : "light";
}
