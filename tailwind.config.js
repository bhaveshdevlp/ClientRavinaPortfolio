/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-430': {'max': '430px'}, // Custom screen breakpoint for max width of 430px
      },
    },
  },
  plugins: [],
}

