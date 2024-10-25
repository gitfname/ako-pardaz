import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.tsx",
    "./src/components/**/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: "#7389FF"
      }
    },
  },
  plugins: [],
};
export default config;
