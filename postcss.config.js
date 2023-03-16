// https://github.com/evrone/postcss-px-to-viewport
// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 375,

      selectorBlackList: ['stay']
    }
  }
}
