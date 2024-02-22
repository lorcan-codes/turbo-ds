import {
  border_radius,
  py,
  px,
  height,
  gap,
  icon_size,
  stroke_width,
  border_width,
} from "./src/figma-export/tailwind_objects";

import {
  fontSize,
  letterSpacing,
  lineHeight,
} from "./src/figma-export/typography";

import { colors } from "./src/figma-export/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  safelist: ["dark"],
  theme: {
    container: {
      center: true,
      padding: "2rem 0",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ...colors,
      },
      spacing: {
        // TODO: these are not in figma
        "btn-icon-width-xs": "var(--btn-icon-width-xs)",
        "btn-icon-width-sm": "var(--btn-icon-width-sm)",
        "btn-icon-width-md": "var(--btn-icon-width-md)",

        ...py,
        ...px,
        ...height,
        ...gap,
        ...icon_size,
      },
      strokeWidth: {
        ...stroke_width,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        ...border_radius,
      },
      borderWidth: {
        ...border_width,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["Menlo", "monospace"],
      },
      fontSize: {
        ...fontSize,
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        extrabold: 800,
        bold: 700,
      },
      lineHeight: {
        ...lineHeight,
      },
      letterSpacing: {
        ...letterSpacing,
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
