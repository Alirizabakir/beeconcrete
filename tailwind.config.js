module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1500px',
    },
    colors: {
      'blue': '#1fb6ff',
      'blue-dark': '#004EFF',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#0C3C10',
      'red': '#DC0917',
      'gray-dark': '#5e5e5e',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gray-100': '#fafafa',
      'white': '#fff',
    },
    fontFamily: {
      'sans': ['Ropa Sans'],
    },
    boxShadow: {
      'show': '0px 3px 5px rgba(0, 0, 0, 0.4)',
    },
    extend: {
      spacing: {
        '30': '7.5rem',
        '128': '32rem',
        '144': '36rem',
      },
      width: {
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
      },
      height: {
        '9/10': '90%',
        'screen/9': '90vh',
        'screen/8': '80vh'
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
    content: [
      './pages/**/*.vue',
      './layouts/**/*.vue',
      './components/**/*.vue'
    ],
  }
}