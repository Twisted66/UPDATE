/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#b38728',
        secondary: '#8b4513',
        accent: '#cd7f32',
        dark: '#000000',
        light: '#f5f5f5',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #b38728, #cd7f32)',
      },
      animation: {
        'rotate': 'rotate 20s infinite linear',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotateX(0) rotateY(0)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        }
      }
    },
  },
  plugins: [],
}