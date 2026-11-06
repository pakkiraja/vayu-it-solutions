import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        vayu: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0284c7", // VAYU Brand Cyan (High-contrast for light theme)
          600: "#0369a1",
          700: "#075985",
          800: "#0c4a6e",
          900: "#082f49",
          cyan: "#00c2ff",
        },
        slateRibbon: {
          light: "#64748b",
          DEFAULT: "#334155", // VAYU Logo Charcoal/Slate Ribbon
          dark: "#1e293b",
          deep: "#0f172a",
          surface: "#f8fafc",
          border: "#e2e8f0",
        },
        brand: {
          cyan: "#0284c7",
          cyanLight: "#e0f2fe",
          charcoal: "#1e293b",
          slate: "#334155",
          bg: "#ffffff",
          bgSoft: "#f8fafc",
          card: "#ffffff",
          cardBorder: "#e2e8f0",
        }
      },
      boxShadow: {
        "cyan-sm": "0 2px 8px -1px rgba(2, 132, 199, 0.12)",
        "cyan-md": "0 8px 24px -4px rgba(2, 132, 199, 0.16)",
        "cyan-lg": "0 16px 36px -6px rgba(2, 132, 199, 0.22)",
        "card": "0 2px 10px -2px rgba(15, 23, 42, 0.06), 0 1px 3px -1px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 12px 28px -4px rgba(15, 23, 42, 0.1), 0 4px 10px -2px rgba(2, 132, 199, 0.12)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out 2s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 25s linear infinite",
        "radar-sweep": "radar-sweep 4s linear infinite",
        "data-flow": "data-flow 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "radar-sweep": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "data-flow": {
          "0%": { strokeDashoffset: "20" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      backgroundImage: {
        "vayu-gradient": "linear-gradient(135deg, #0284c7 0%, #00c2ff 50%, #0369a1 100%)",
        "vayu-subtle": "linear-gradient(135deg, #f0f9ff 0%, #ffffff 100%)",
        "grid-light": "linear-gradient(to right, rgba(2, 132, 199, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(2, 132, 199, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
