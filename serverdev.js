const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

const server = new WebpackDevServer(config.devServer, webpack(config));
server.start().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
