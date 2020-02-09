var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const client = path.resolve(__dirname, '');
const dist = path.resolve(__dirname, '../dist/client');
console.log(client);
console.log(dist);

module.exports = {
  context: client,
  entry: {
    main: path.join(__dirname, 'src/index.js'),
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
    contentBase: dist,
    clientLogLevel: 'debug',
    hot: true,
    open: 'google-chrome',
    port: 8081
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.join(__dirname, 'static/index.html') })
  ]
};