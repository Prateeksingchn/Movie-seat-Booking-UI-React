/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-card': 'rgba(147, 197, 253, 0.2)',
      },
      boxShadow: {
        'card': '0 4px 24px -1px rgba(147, 197, 253, 0.1)',
      },
      backgroundImage: {
        'card-gradient': 'linear-gradient(145deg, rgba(147, 197, 253, 0.2) 0%, rgba(147, 197, 253, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}

