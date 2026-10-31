/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#C9B98A',
          DEFAULT: '#B19F6A',
          dark: '#8C7A4A',
          deep: '#6F5F34',
        },
        dark: {
          DEFAULT: '#242424',
          subtle: '#1C1C1C',
          light: '#2E2E2E',
          card: '#292929',
        },
        ivory: {
          DEFAULT: '#F8F6F0',
          soft: '#F4F1EA',
          deep: '#EBE7DD',
        },
        charcoal: '#242424',
        muted: '#777777',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', '"Source Sans Pro"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.15em',
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.07)',
        'luxury-hover': '0 30px 60px -15px rgba(177, 159, 106, 0.18)',
        'card-subtle': '0 4px 20px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
