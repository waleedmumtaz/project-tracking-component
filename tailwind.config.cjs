const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        cstm: {
          primary: {
            red: 'hsl(0, 100%, 68%)',
          },
          neutral: {
            'very-dark-blue': 'hsl(230, 29%, 20%)',
            'dark-grayish-blue': 'hsl(230, 11%, 40%)',
            'grayish-blue': 'hsl(231, 7%, 65%)',
            'light-grayish-blue': 'hsl(207, 33%, 95%)',
          },
        },
      },

      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config
