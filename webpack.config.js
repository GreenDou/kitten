let path = require('path');
let webpack_config = {
  entry: {
    game: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'game.min.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: "source-map-loader",
        exclude: /node_modules/,
      },
      {
        enforce: 'pre',
        test: /\.(ts|tsx)?$/,
        use: "source-map-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'cheap-eval-source-map',
  context: __dirname,
};

module.exports = webpack_config;