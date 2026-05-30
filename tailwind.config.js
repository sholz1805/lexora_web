/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        ink: "#0A0E1A",
        signal: "#0047FF",
        deepSignal: "#0033B8",
        glass: "#E8F0FF",
        paper: "#FFFFFF",
        surface: "#f6f9ff",
        panel: "#eff3ff",
        muted: "#dbe6ff",
      },

      fontFamily: {
        display: ["Georgia", "serif"],
        sans: ["Calibri", "sans-serif"],
        mono: ["Consolas", "monospace"],
      },

      boxShadow: {
        soft: "0 24px 80px rgba(15, 23, 42, 0.08)",
      },

      maxWidth: {
        container: "1440px",
      },
    },
  },

  plugins: [],
};