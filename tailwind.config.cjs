/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*[js, jsx]"],
  theme: {
    extend: {
      backgroundImage: {
        'Build': "url('/public/Building.jpg')",
        'Shipping': "url('/public/Shipping.jpg')",
      }
    },
  },
  plugins: [],
}
