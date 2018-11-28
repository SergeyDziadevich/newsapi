const path = require('path');
const distPath = path.join(__dirname, '/app');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'development',
  entry: ['whatwg-fetch', '@babel/polyfill', 'nodelist-foreach-polyfill', './app/js/common.js'],
  output: {
    path: path.join(__dirname, 'app/build'),
    filename: 'app.bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use:[{ loader: 'babel-loader' }]
      }
    ]
  },

  watch:  NODE_ENV == 'development',

  devtool: NODE_ENV == 'development' ? 'source-map' : null,

  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
    open: true,
  },
};