/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#101010', // primary
        darkRed: '#B20c06', // accent
        sunglow:'#FFC917', //highlight
        mikadoYellow:'#FFE602', //highlight 
        chiffon:'#FDFFFF', // background
        lightGray:'#738589', // secondary
      },
    },
  },
  plugins: [],
};
