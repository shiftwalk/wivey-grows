module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Switzer', 'Arial', 'sans-serif'],
      'display': ['Pally', 'Arial', 'sans-serif'],
      'mono': ['Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      colors: {
        'black': '#000',
        'white': '#FFF',
        'off-black': '#321639',
        'off-white': '#F8F3DD',
        'orange': '#E56137',
        'yellow': '#E0A732',
        'pink': '#D5385B',
        'green': {
          light: '#91B658',
          DEFAULT: '#288736',
          dark: '#1D622C'
        },
        'example-color': {
          light: '#ffb288',
          DEFAULT: '#d18d67',
          dark: '#ce8860',
        },
      }
    },
  },
  plugins: []
}