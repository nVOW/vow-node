var path = require('path');
var webpack = require('webpack');

module.exports = [
  {
    name: '',
    entry: [
      './src/js/index.js'
    ],
    output: {
      path: path.join(__dirname, './dist/js'),
      filename: 'index.bundle.js'
    }
  },
];
