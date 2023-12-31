import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      l: "1220px",
      xl: "1440px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      blue: {
        600: "#2563eb",
        700: "#1d4ed8",
      },
      gray: {
        50: "#f9fafb",
        100: "#f7fafc",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        700: "#374151",
        800: "#1f2937",
        900: "#1a202c",
      },
      green: {
        500: "#84cc16",
        600: "#65a30d",
      },
      indigo: {
        100: "#E0E7FF",
        500: "#6366F1",
        600: "#4f46e5",
        900: "#312E81",
      },
      orange: {
        300: "#FDBA74",
        500: "#f97316",
      },
      purple: "#7e5bef",
      pink: "#ff49db",
      red: {
        500: "#ef4444",
        600: "#dc2626",
      },
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      "gray-light": "#d3dce6",
      white: "#fff",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
export default config;
