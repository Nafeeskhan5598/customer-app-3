/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        // 'red-rgba': 'rgba(240, 80, 80, 1)',
        // 'yello-rgba': 'rgba(255, 189, 74, 1)',

      },
    },
  },
  // plugins: {
  //   'postcss-import': {},
  //   'tailwindcss/nesting': {},
  //   tailwindcss: {},
  //   autoprefixer: {},
  // }
}

// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };