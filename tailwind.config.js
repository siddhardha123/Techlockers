/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/landing.svg')",
        'banner' : "url('/src/assets/banner.svg')"
      },
  }
  },
  plugins: [],
}
