// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '10rem',
    },
    content: [
      './index.html',
      './src/**/*.{html,jsx}',
      './node_modules/tw-elements/dist/js/**/*.js'
    ],
    plugins: [require('tw-elements/dist/plugin')]
  }
}
