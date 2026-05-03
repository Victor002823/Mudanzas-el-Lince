/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
          "inverse-on-surface": "#f1f0f7",
          "surface-container-lowest": "#ffffff",
          "surface-variant": "#e3e1e9",
          "secondary-fixed-dim": "#c7c6c6",
          "surface-container-highest": "#e3e1e9",
          "on-primary-container": "#8fa8ff",
          "background": "#faf8ff",
          "on-primary": "#ffffff",
          "primary-fixed": "#dce1ff",
          "on-tertiary-container": "#f39461",
          "on-secondary-fixed": "#1b1c1c",
          "on-background": "#1a1b21",
          "tertiary-fixed": "#ffdbcb",
          "surface-container": "#eeedf4",
          "secondary": "#5e5e5e",
          "on-secondary-fixed-variant": "#464747",
          "tertiary-container": "#6e2c00",
          "tertiary-fixed-dim": "#ffb691",
          "surface-bright": "#faf8ff",
          "inverse-surface": "#2f3036",
          "surface-container-high": "#e9e7ef",
          "on-secondary-container": "#646464",
          "surface": "#faf8ff",
          "on-tertiary": "#ffffff",
          "on-surface-variant": "#444651",
          "on-secondary": "#ffffff",
          "surface-tint": "#405aab",
          "on-surface": "#1a1b21",
          "outline-variant": "#c5c5d3",
          "outline": "#757682",
          "on-tertiary-fixed": "#341100",
          "on-tertiary-fixed-variant": "#773205",
          "on-error": "#ffffff",
          "secondary-fixed": "#e3e2e2",
          "primary-fixed-dim": "#b5c4ff",
          "surface-container-low": "#f4f3fa",
          "on-primary-fixed": "#00164e",
          "secondary-container": "#e3e2e2",
          "surface-dim": "#dad9e1",
          "inverse-primary": "#b5c4ff",
          "error-container": "#ffdad6",
          "on-primary-fixed-variant": "#254191",
          "on-error-container": "#93000a",
          "primary-container": "#1d3a8a",
          "primary": "#00236e",
          "tertiary": "#4b1c00",
          "error": "#ba1a1a"
      },
      borderRadius: {
          DEFAULT: "0.125rem",
          lg: "0.25rem",
          xl: "0.5rem",
          full: "0.75rem"
      },
      spacing: {
          lg: "24px",
          md: "16px",
          sm: "8px",
          xs: "4px",
          xxl: "80px",
          xl: "48px"
      },
      fontFamily: {
          h2: ["Inter", "sans-serif"],
          h3: ["Inter", "sans-serif"],
          h1: ["Inter", "sans-serif"],
          "body-md": ["Inter", "sans-serif"],
          "body-sm": ["Inter", "sans-serif"],
          "label-caps": ["Inter", "sans-serif"],
          "body-lg": ["Inter", "sans-serif"]
      },
      fontSize: {
          h2: ["32px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
          h3: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
          h1: ["40px", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
          "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
          "body-sm": ["14px", { lineHeight: "1.4", fontWeight: "400" }],
          "label-caps": ["12px", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "600" }],
          "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
