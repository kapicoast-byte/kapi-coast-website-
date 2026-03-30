import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        kc: {
          dark:      "#3D2208",
          brown:     "#5C3A1E",
          mid:       "#8B5E2E",
          gold:      "#C8882A",
          tan:       "#A0642A",
          cream:     "#F5E6C8",
          warm:      "#EDD5A0",
          parchment: "#F9F0E0",
          white:     "#FFFFFF",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body:    ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
