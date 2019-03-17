const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'source'),
    filename: 'main.js'
  },
  module: {
    // JS Rules, babel transpiling

    // SCSS rules
  },
  plugins: [
  ],
};
