import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /** High-end private dental clinic primary teal */
        primary: {
          DEFAULT: "#0F3D44",
          50:  "#EEF7F5",
          100: "#D6EEE9",
          200: "#AEDCD3",
          300: "#7EC4B8",
          400: "#4DA99B",
          500: "#2B8C7E",
          600: "#1A6F63",
          700: "#13554C",
          800: "#0F3D44", // User-specified primary teal
          900: "#0A292E",
          950: "#06181B",
        },
        /** Primary teal alias for backwards compatibility */
        teal: {
          50:  "#EEF7F5",
          100: "#D6EEE9",
          200: "#AEDCD3",
          300: "#7EC4B8",
          400: "#4DA99B",
          500: "#2B8C7E",
          600: "#1A6F63",
          700: "#13554C",
          800: "#0F3D44", // User-specified primary teal
          900: "#0A292E",
          950: "#06181B",
        },
        /** Fresh mint accent */
        mint: {
          DEFAULT: "#4FD1B8",
          50:  "#F0FBF9",
          100: "#D8F6F0",
          200: "#B4ECE2",
          300: "#86E1D1",
          400: "#4FD1B8", // User-specified accent mint
          500: "#2EB99F",
          600: "#22947F",
          700: "#1D7566",
          800: "#195D52",
          900: "#174D44",
        },
        /** Soft gold for high-end subtle highlights */
        gold: {
          DEFAULT: "#C9A45C",
          50:  "#FAF6ED",
          100: "#F4EBD7",
          200: "#E8D5AE",
          300: "#DCBE84",
          400: "#C9A45C", // User-specified soft gold
          500: "#B28C45",
          600: "#8F6E34",
          700: "#6B5226",
          800: "#47361A",
          900: "#241B0D",
        },
        /** Warm off-white background */
        ivory: "#FAF8F3",
        /** Soft aqua background tint */
        aqua: "#EEF7F4",
        /** Muted seafoam */
        seafoam: "#DCEEE8",
        /** Charcoal text */
        ink: "#1A2E33",
        /** Muted text */
        muted: "#4A6166",
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "var(--font-noto-urdu)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "var(--font-noto-urdu)", "Georgia", "serif"],
        urdu:    ["var(--font-noto-urdu)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card:         "0 2px 6px -1px rgb(15 61 68 / 0.06), 0 12px 32px -4px rgb(15 61 68 / 0.08)",
        "card-hover": "0 12px 32px -4px rgb(15 61 68 / 0.16), 0 4px 12px -2px rgb(15 61 68 / 0.08)",
        glass:        "0 8px 32px -8px rgb(15 61 68 / 0.14), inset 0 1px 0 rgb(255 255 255 / 0.6)",
        nav:          "0 1px 0 rgb(15 61 68 / 0.08), 0 4px 20px -6px rgb(15 61 68 / 0.1)",
        gold:         "0 4px 20px -4px rgb(201 164 92 / 0.35)",
      },
      borderRadius: {
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
} satisfies Config;
