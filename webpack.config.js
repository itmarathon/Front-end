var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  output: {
    filename: 'bundle.js',
    publicPath: '/static/js/'
  }
};