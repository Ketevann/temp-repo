

const path = require('path');

module.exports = {
 entry: './client/index.js',
  output: {
    path: __dirname,
     filename: './public/bundle.js',
  },
  watch: true,
  resolve: {

    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },

    ]


  }

};