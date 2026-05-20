
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'dark-brown': 'var(--color-dark-brown)',
        'golden-brown': 'var(--color-golden-brown)',
        'warm-tan': 'var(--color-warm-tan)',
        'cream': 'var(--color-cream)',
        'beige': 'var(--color-beige)',
        'whatsapp': 'var(--color-whatsapp)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
