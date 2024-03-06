
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gold': '#b78a1a',
        'custom-green': '#295a49',
        'custom-cafe': '#faeed6',
        'nav-green': '#205040',
        'serv-green': '#205040',
        'port-green': '#265646',
      },
      textColor: {
        'custom-gold': '#b78a1a',
        'custom-green': '#295a49',
        'custom-cafe': '#faeed6',
      },
      borderColor: {
        'custom-gold': '#b78a1a',
        'custom-green': '#295a49',
        'custom-cafe': '#faeed6',
      },
    },
  },
  plugins: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
}

