/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F1419",
        "ink-soft": "#2A3139",
        cream: "#F7F3EC",
        paper: "#FFFFFF",
        teal: {
          DEFAULT: "#3FCBC5",
          deep: "#0F9E98",
          wash: "#E8F7F6",
        },
        hairline: "#E6E1D7",
      },
      fontFamily: {
        serif: ['"Frank Ruhl Libre"', "serif"],
        display: ['"Fraunces"', "serif"],
        sans: ['"Assistant"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "680px",
        content: "1280px",
      },
      boxShadow: {
        hairline:
          "0 1px 2px rgba(15,20,25,0.04), 0 8px 24px rgba(15,20,25,0.04)",
      },
      letterSpacing: {
        label: "0.25em",
        wider: "0.2em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
