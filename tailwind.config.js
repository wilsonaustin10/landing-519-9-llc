/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D946EF',
        secondary: '#F59E0B',
        accent: '#000000', // COMPANY ACCENT COLOR PLACEHOLDER
        highlight: '#000000', // COMPANY HIGHLIGHT COLOR PLACEHOLDER
        background: '#ffffff', // White
        text: '#333333', // Dark gray for regular text
        footer: {
          bg: '#D946EF',
          text: '#ffffff', // White
          hover: '#F59E0B',
        }
      },
    },
  },
  plugins: [],
}; 