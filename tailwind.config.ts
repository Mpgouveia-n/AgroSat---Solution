import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        agrosat: {
          green: '#22C55E',
          blue: '#0EA5E9',
          space: '#0F172A',
          card: '#1E293B',
          text: '#F8FAFC',
          alert: '#FACC15',
          critical: '#EF4444',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
