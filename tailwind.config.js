/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg123': "url('/src/assets/bg1.jpg')",
        
      }
    },
  },
  plugins: [],
}

