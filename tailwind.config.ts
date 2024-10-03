import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        greenButton: '#1AB2A6',
        titleDark: '#242424',
        borderColor: '#E8E8E8',
        green20: '#D1F0ED',
        green100: '#1AB2A6'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'], // Add Raleway to the fontFamily
      },
    },
  },
  plugins: [],
};

export default config;
