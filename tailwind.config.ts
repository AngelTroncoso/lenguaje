import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7FB069',
          DEFAULT: '#2D5016',
          dark: '#1A3009',
        },
        secondary: {
          light: '#A8C686',
          DEFAULT: '#6B8E23',
          dark: '#4A6318',
        },
        accent: {
          light: '#D4A574',
          DEFAULT: '#8B4513',
          dark: '#5C2D0A',
        },
        background: {
          light: '#FDFBF7',
          dark: '#1A1A1A',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#2A2A2A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
