var path = require('path');

module.exports = {
  entry: './src',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
  }
};