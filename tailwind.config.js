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
          light: '#D4C49A',
          DEFAULT: '#C5A059',
          bright: '#E5C158',
          dark: '#9E7D36',
          deep: '#735820',
        },
        royal: {
          DEFAULT: '#0F1E36',
          dark: '#0A1424',
          light: '#1A2E50',
          blue: '#1E40AF',
        },
        emerald: {
          DEFAULT: '#10B981',
          dark: '#065F46',
          deep: '#064E3B',
          light: '#34D399',
          glow: '#A7F3D0',
        },
        ruby: {
          DEFAULT: '#BE123C',
          light: '#FB7185',
          dark: '#881337',
        },
        amber: {
          DEFAULT: '#D97706',
          light: '#FBBF24',
          dark: '#92400E',
        },
        dark: {
          DEFAULT: '#1E1E1E',
          subtle: '#141414',
          light: '#282828',
          card: '#222222',
        },
        ivory: {
          DEFAULT: '#FAF8F5',
          soft: '#F4F0E8',
          deep: '#EBE5D8',
        },
        charcoal: '#202020',
        muted: '#707070',
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
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(197, 160, 89, 0.28)',
        'card-subtle': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'gold-glow': '0 0 25px rgba(229, 193, 88, 0.35)',
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
