const path = require('path');
const distPath = path.join(__dirname, '/app');

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
        use:[
          {
            loader: 'babel-loader',
            options: {
              "presets": [
                [
                  "@babel/preset-env",
                  {
                    "targets": {
                      "browsers": ["last 4 versions", "ie >= 11"]
                    }
                  }
                ]
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  watch: true,

  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
    open: true,
  },
};