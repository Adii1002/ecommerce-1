import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#111111",
        accent: "#F5F5F5",
        light: "#FAFAFA",
      },
      spacing: {
        "128": "32rem",
      },
    },
  },
  plugins: [],
};
export default config;
