import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat'],
      },
      colors: {
        customGray: '#252B42', // Aap is naam ko apni marzi se change kar sakte hain
      },
      
    },
  },
  plugins: [],
};
export default config;
