const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'tmp'),
  },
  plugins: [
    new webpack.DefinePlugin({
      DragEvent: 'global.DragEvent',
      navigator: 'global.navigator',
      document: 'global.document',
      ClipboardEvent: 'global.ClipboardEvent',
      innerHeight: 'global.innerHeight',
      window: 'global.window'
    }),
  ],
  target: 'node',
};
