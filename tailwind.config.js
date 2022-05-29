module.exports = {
  content: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {
      backgroundImage: {
        'sticky-background-login': "url('./assets/images/stickies-wallpaper.png')",
      },
      borderWidth: {
        16: '16px',
      },
      minWidth: {
        200: '200px',
      },
    },
  },
  plugins: [],
};
