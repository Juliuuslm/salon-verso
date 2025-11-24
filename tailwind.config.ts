import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
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
      },
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.7s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(2rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        // Fluid typography using clamp()
        "h1-fluid": ["clamp(2rem, 8vw, 6rem)", { lineHeight: "1.2" }],
        "h2-fluid": ["clamp(1.5rem, 5vw, 3.75rem)", { lineHeight: "1.2" }],
        "h3-fluid": ["clamp(1.25rem, 3.5vw, 2.25rem)", { lineHeight: "1.3" }],
        "h4-fluid": ["clamp(1.125rem, 2.5vw, 1.875rem)", { lineHeight: "1.4" }],
        "h5-fluid": ["clamp(1rem, 2vw, 1.5rem)", { lineHeight: "1.4" }],
      },
    },
  },
  plugins: [],
};

export default config;
