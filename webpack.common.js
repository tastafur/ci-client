const path = require('path');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'whatwg-fetch',
    './index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  }
};

module.exports = config;
