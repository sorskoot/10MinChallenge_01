const path = require('path');

module.exports = {
  entry: './Catcher-bundle.js',
  output: {
    filename: 'Catcher-bundle.js',
    path: path.resolve(__dirname, 'deploy'),
  },
};