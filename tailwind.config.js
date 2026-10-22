/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1DB954',
        'spotify-green-light': '#1ED760',
        'spotify-green-dark': '#169C46',
        'spotify-green-darker': '#117A37',
        'spotify-black': '#121212',
        'spotify-black-pure': '#0A0A0A',
        'spotify-black-elevated': '#181818',
        'spotify-black-card': '#242424',
        'spotify-gray': '#B3B3B3',
        'spotify-gray-light': '#F8F9FA',
        'spotify-gray-dark': '#535353',
        'spotify-white': '#FFFFFF',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'panel': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-smooth': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '250': '250ms',
        '350': '350ms',
        '450': '450ms',
        '600': '600ms',
      },
      boxShadow: {
        'glow-green': '0 0 30px -5px rgba(29, 185, 84, 0.45)',
        'glow-green-sm': '0 0 15px -3px rgba(29, 185, 84, 0.25)',
        'card-elevated': '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 35px -10px rgba(0, 0, 0, 0.12), 0 0 20px -2px rgba(29, 185, 84, 0.18)',
        'dark-card': '0 12px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 24px, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -10px, 0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        carouselProgress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.2s linear infinite',
        'carousel-progress': 'carouselProgress 2s linear forwards',
      },
    },
  },
  plugins: [],
}
