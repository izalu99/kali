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
        black: '#101010',
        darkRed: '#B20c06',
        sunglow:'#FFC917',
        mikadoYellow:'#FFE602',
        chiffon:'#FDFFFF',
        lightGray:'#738589',
      },
    },
  },
  plugins: [],
};
