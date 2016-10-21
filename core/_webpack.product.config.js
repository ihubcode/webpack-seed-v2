module.exports = {
  module: require('./webpack-config/module.config.js'),
  resolve: require('./webpack-config/resolve.config.js'),
  plugins: require('./webpack-config/plugins.product.config.js'),
  eslint: require('./webpack-config/vendor/eslint.config.js'),
  postcss: require('./webpack-config/vendor/postcss.config.js'),
};
