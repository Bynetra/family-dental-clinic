import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: {
          50: "#F0F7F6",
          100: "#DCEBE9",
          200: "#B9D6D3",
          300: "#8DBAB5",
          400: "#5E9B95",
          500: "#3C807B",
          600: "#1F6B66",
          700: "#145753",
          800: "#0E4F4A",
          900: "#0A3B37",
          950: "#052725",
        },
        sage: { light: "#E6EFE7", DEFAULT: "#9DBBA6", dark: "#5F8A6B" },
        cream: "#FBFAF6",
        sand: "#F3F0E8",
        ink: "#1C2B29",
      },
      fontFamily: {
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(28 43 41 / 0.05), 0 10px 28px -14px rgb(28 43 41 / 0.14)",
      },
      borderRadius: { "4xl": "2rem" },
    },
  },
  plugins: [],
} satisfies Config;
