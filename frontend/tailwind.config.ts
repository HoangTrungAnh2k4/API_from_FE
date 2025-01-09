import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF571A",
        background: "#1E252B",
        dark3: "#262D34",
        dark4: "#2C353D",
        tag: "#C5D0E6"
      },
      boxShadow: {
        'inner-reverse': 'inset 0px -1px 1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
