import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: {
          50: "#EFF8F6",
          100: "#D9EEE9",
          200: "#AFDDD4",
          300: "#7BC6BA",
          400: "#43A798",
          500: "#278A7C",
          600: "#1B6E63",
          700: "#17584F",
          800: "#14473F",
          900: "#0D3631",
          950: "#06231F",
        },
        sage: { light: "#D8F2EC", DEFAULT: "#70C5B7", dark: "#287F72" },
        cream: "#F8F8F3",
        sand: "#EEEFE7",
        ink: "#152825",
      },
      fontFamily: {
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgb(13 54 49 / 0.04), 0 18px 50px -28px rgb(13 54 49 / 0.28)",
        float: "0 24px 70px -32px rgb(6 35 31 / 0.42)",
      },
      borderRadius: { "4xl": "1.5rem" },
    },
  },
  plugins: [],
} satisfies Config;
