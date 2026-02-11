/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  safelist: [
    'bg-white',
    'bg-gray-50',
    'text-brand-purple',
    'border-brand-purple',
    'border-brand-purple/50',
    'border-brand-purple/60',
    'shadow-neon-glow-cyan',
    'shadow-neon-glow-magenta',
    'shadow-glow-purple',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        'neon-cyan': '#00f5ff',
        'neon-magenta': '#ff00ff',
        'neon-lime': '#39ff14',
        'dark-bg': '#0a0a0f',
        'brand-purple': '#7c3aed',
      },
      boxShadow: {
        'neon-glow-cyan': '0 0 20px rgba(0, 245, 255, 0.5), 0 0 40px rgba(0, 245, 255, 0.3)',
        'glow-purple': '0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.2)',
        'neon-glow-magenta': '0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.3)',
        'neon-glow-lime': '0 0 20px rgba(57, 255, 20, 0.5)',
      },
    },
  },
  plugins: [],
}
