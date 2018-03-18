const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
  	path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
  	loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: 'style-loader!css-loader!sass-loader'
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[ext]?[hash:7]'
        }
      }]
    }]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};