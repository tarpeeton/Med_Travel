import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // "src" papkasidan keyin components qo'shilgan
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '360px',
      'bn': '400px',
      'mdx': '460px',
      'mdl': '550px',
      'slg': '750px',
      'lg': '900px',
      'xl': '1000px',
      '2xl': '1100px',
      '3xl': '1440px',
      '4xl': '1600px',
      '6xl': '1920px',
      '5xl': '2000px',
    },
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
