const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//const NODE_ENV = process.env.NODE_ENV || 'development';


const distPath = path.join(__dirname, '/app');


var config = {
  entry: ['whatwg-fetch', '@babel/polyfill', 'nodelist-foreach-polyfill', './app/js/index.js'],

  output: {
    path: path.join(__dirname, 'app/build'),
    filename: 'app.bundle.js',
    publicPath: '/build/'
  },

  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'custom_loaders')],
  },

  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use:[{ loader: 'babel-loader' }]
      },
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
               require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles Sass to CSS
        }]
      },
      {
        test: /\.json/,
        use: [{ loader: 'json-loader' }],
      //  use: [{  loader: path.resolve('./loaders/json-loader.js'), }],
      },
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],

  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
    open: true,
  },
};


module.exports = (env, argv) =>  {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.watch = true;
  }

  if (argv.mode === 'production') {

  }

  return config;
};

