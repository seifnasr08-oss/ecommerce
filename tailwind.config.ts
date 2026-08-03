import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14181F",       // near-black navy, primary text/nav
        paper: "#FFFFFF",     // clean white surface
        slate: "#5B6472",     // secondary text
        line: "#E5E7EB",      // hairline borders
        gold: "#B8863A",      // accent — CTAs, prices, highlights
        goldDark: "#8F6524",
        mist: "#F4F5F7",      // subtle section background
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
