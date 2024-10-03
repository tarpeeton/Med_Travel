import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // "src" papkasidan keyin components qo'shilgan
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // CSS o'zgaruvchisi asosida
        foreground: "var(--foreground)", // CSS o'zgaruvchisi asosida
        greenButton: '#1AB2A6', // Statik rang
      },
    },
  },
  plugins: [],
};

export default config;
