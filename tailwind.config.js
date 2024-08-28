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
        black: '#050505',
        darkRed: '#8C0000',
        sunglow:'#FFC917',
        mikadoYellow:'#FFE602',
        chiffon:'#FAF3CD',
      },
    },
  },
  plugins: [],
};
