/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage:{
        background: "url('/background.png')",
        'nlw-gradient': ' linear-gradient(to right, #9572FC, #43E7AD, #E1D55D)',
      }
    },
  },
  plugins: [],
}
