const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  performance: {
    maxAssetSize: 300 * 1024,
    maxEntrypointSize: 300 * 1024,
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};
