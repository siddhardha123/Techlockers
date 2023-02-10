/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/landing.svg')",
        'banner' : "url('/src/assets/banner.svg')",
        'banner2' : "url('/src/assets/banner2.svg')",
        'banner3' : "url('/src/assets/banner3.svg')",
        'banner4' : "url('/src/assets/banner4.svg')"
      },
  }
  },
  plugins: [],
}
