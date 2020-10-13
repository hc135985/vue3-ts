//@ts-nocheck
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-plugin-px2rem")({
            rootValue: 7.5,
            exclude: false,
            mediaQuery: false,
            minPixelValue: 3
          })
        ]
      }
    }
  }
};
