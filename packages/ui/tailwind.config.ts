import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx,scss,css}", "./styles.scss"],
  safelist: ["border-red-300", "text-red-500"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        // Brand colors (Primary)
        primary: {
          50: "rgb(var(--gecko-ui-primary-50) / <alpha-value>)",
          100: "rgb(var(--gecko-ui-primary-100) / <alpha-value>)",
          200: "rgb(var(--gecko-ui-primary-200) / <alpha-value>)",
          300: "rgb(var(--gecko-ui-primary-300) / <alpha-value>)",
          400: "rgb(var(--gecko-ui-primary-400) / <alpha-value>)",
          500: "rgb(var(--gecko-ui-primary-500) / <alpha-value>)",
          600: "rgb(var(--gecko-ui-primary-600) / <alpha-value>)",
          700: "rgb(var(--gecko-ui-primary-700) / <alpha-value>)",
          800: "rgb(var(--gecko-ui-primary-800) / <alpha-value>)",
          900: "rgb(var(--gecko-ui-primary-900) / <alpha-value>)",
          950: "rgb(var(--gecko-ui-primary-950) / <alpha-value>)"
        },

        // Semantic surface/background colors
        surface: {
          primary: "rgb(var(--gecko-ui-surface-primary) / <alpha-value>)",
          secondary: "rgb(var(--gecko-ui-surface-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--gecko-ui-surface-tertiary) / <alpha-value>)",
          hover: "rgb(var(--gecko-ui-surface-hover) / <alpha-value>)",
          "hover-strong": "rgb(var(--gecko-ui-surface-hover-strong) / <alpha-value>)",
          active: "rgb(var(--gecko-ui-surface-active) / <alpha-value>)",
          disabled: "rgb(var(--gecko-ui-surface-disabled) / <alpha-value>)",
          overlay: "rgb(var(--gecko-ui-surface-overlay) / <alpha-value>)",
          autofill: "rgb(var(--gecko-ui-surface-autofill) / <alpha-value>)",
          emphasis: "rgb(var(--gecko-ui-surface-emphasis) / <alpha-value>)"
        },

        // Semantic text colors
        text: {
          primary: "rgb(var(--gecko-ui-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--gecko-ui-text-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--gecko-ui-text-tertiary) / <alpha-value>)",
          disabled: "rgb(var(--gecko-ui-text-disabled) / <alpha-value>)",
          placeholder: "rgb(var(--gecko-ui-text-placeholder) / <alpha-value>)",
          inverse: "rgb(var(--gecko-ui-text-inverse) / <alpha-value>)",
          muted: "rgb(var(--gecko-ui-text-muted) / <alpha-value>)",
          ["on-primary"]: "rgb(var(--gecko-ui-text-on-primary) / <alpha-value>)"
        },

        // Semantic border colors
        border: {
          primary: "rgb(var(--gecko-ui-border-primary) / <alpha-value>)",
          secondary: "rgb(var(--gecko-ui-border-secondary) / <alpha-value>)",
          focus: "rgb(var(--gecko-ui-border-focus) / <alpha-value>)",
          hover: "rgb(var(--gecko-ui-border-hover) / <alpha-value>)",
          disabled: "rgb(var(--gecko-ui-border-disabled) / <alpha-value>)"
        }
      },

      // Extend outline colors for focus states
      outlineColor: {
        focus: "rgb(var(--gecko-ui-border-focus))"
      }
    }
  }
};

export default config;
