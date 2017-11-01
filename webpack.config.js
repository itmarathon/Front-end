const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './src',
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],


  resolve: {
    extensions: ['.js', '.jsx'],
  },

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
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|ttf|woff2|woff|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    publicPath: '/static/js/',
  },
};