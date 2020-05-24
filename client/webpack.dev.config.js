const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const client = path.resolve(__dirname, '');
const dist = path.resolve(client, '../dist/client');

// eslint-disable-next-line no-undef
module.exports = {
  context: client,
  entry: {
    main: path.join(client, 'src/index.js'),
  },
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: dist,
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: dist,
    clientLogLevel: 'debug',
    hot: true,
    open: 'google-chrome',
    port: 8081,
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://localhost:8080'
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(client, 'static/index.html') })
  ]
};