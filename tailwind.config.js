module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust to your project structure
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color:{
      primary: '#ff0000',
      secondary: '#00ff00',
    },
    extend: {
      backgroundImage: {
        "summerbg": "url('/images/summerbg.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

