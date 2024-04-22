const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    client: {
      webSocketTransport: require.resolve('./CustomClient'),
    },
    webSocketServer: require.resolve('./CustomServer'),
    hot: true,
  },
});