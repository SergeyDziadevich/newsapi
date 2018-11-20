const path = require('path');

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
  devtool: 'source-map'
};