
module.exports = {
  content: [],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        'custom-gold': '#b78a1a',
        'custom-green': '#FFFFFF',
        'custom-cafe': '#faeed6',
        'nav-green': '#FFFFFF',
        'serv-green': '#FFFFFF',
        'port-green': '#FFFFFF',
        'footer-green': '#FFFFFF',
        'footB-green': '#FFFFFF',
        'in-green': "#295a49",
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

