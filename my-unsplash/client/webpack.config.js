const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const isProduction = process.env.NODE_ENV === 'production'
const publicPath = process.env.PUBLIC_URL || '/'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  bail: isProduction,
  entry: {
    src: ['./src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new Dotenv({
      path: './.env',
      safe: true
    })
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3000
  }
}
