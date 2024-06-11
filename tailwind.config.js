export const content = [];
export const darkMode = 'class'; // or 'media' based on how you want to enable dark mode
export const theme = {
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
  darkMode: {
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
};
export const plugins = [];
export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
