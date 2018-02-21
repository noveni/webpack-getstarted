const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: './src/app.js',
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      exclude: ['index.html']
    })
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
}