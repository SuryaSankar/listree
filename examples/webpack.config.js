const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'mylistree.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/es.html',
      filename: 'es.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      template: 'src/umd.html',
      filename: 'umd.html',
      inject: false
    })
  ],
  devServer: {
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'node_modules')],
    contentBasePublicPath: ['/', '/vendors'],
    compress: true,
    port: 9000,
  }
};