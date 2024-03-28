// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/index.html",
    ],
    theme: {
      colors: {
        'dark': '#131019',
        'medium': '#312744',
        'middle': '#3F3357',
        'light': '#5A4B78',
        'white': '#FFFFFF',
        'black': '#000000',
        'hover': '#CFC0E6',
      },
      
      extend: {
        letterSpacing: {
          widest: '0.2em',
        },
        spacing: {
          'photo': '25rem',
          'img_reg': '200px',
          'img_small': '10px',
          'mdw': '400px',
          'mdh': '450px',
        },
        screens: {
          'md': '780px',
        },
      },
    },
    plugins: [],
  };