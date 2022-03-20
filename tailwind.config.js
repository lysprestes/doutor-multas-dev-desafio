module.exports = {
  theme: {
    container: {
      center: true,
      padding: '10rem',
    },
    content: [
      // './index.html',
      // './src/**/*.{html,jsx}',
      // './node_modules/tw-elements/dist/js/**/*.js'
      './pages/**/*.{html,js}',
    './components/**/*.{html,js}'
    ],
    plugins: [require('tw-elements/dist/plugin')]
  }
}
