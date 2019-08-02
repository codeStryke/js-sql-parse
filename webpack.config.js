const path = require('path');

module.exports = {
  entry: {
    parser: './parser.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Parser',
    libraryTarget: 'window',
  }
};