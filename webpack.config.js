const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['index.html']
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    host: "0.0.0.0",
    hot: true
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
}