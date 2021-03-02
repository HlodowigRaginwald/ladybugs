/* eslint-disable operator-linebreak */
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          localIdentName:
            process.env.NODE_ENV === "development"
              ? "[path][name]__[local]"
              : "[emoji:4][hash:base64:4]",
        },
      },
    },
  },
  configureWebpack: {
    // Merged into the final Webpack config
    plugins: [
      new StyleLintPlugin({
        files: ["src/**/*.{vue,htm,html,css,sss,less,scss,sass}"],
      }),
    ],
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: ["src/styles/includes/*.scss"],
    },
  },
  productionSourceMap: false,
};
