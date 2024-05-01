import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '768px',
        md: '976px',
        lg: '1480px',
        xl: '1920px',
      },
      colors: {
        'primary': '#3E4095',
        'secundary': '#0098DA',
      }
      
    },
  },
  plugins: [],
};
export default config;
