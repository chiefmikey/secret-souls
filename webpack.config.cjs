const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/public');

// const css = 'css-loader';

module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // {
      //   test: /\.jsx?/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //   },
      // },
      // {
      //   test: /\.css$/,
      //   use: [css],
      // },
      // {
      //   test: /\.scss$/,
      //   use: [css, 'sass-loader'],
      // },
      // {
      //   test: /\.sass$/,
      //   use: [css, 'sass-loader'],
      // },
      // {
      //   test: /\.(png|ttf|jp(e*)g|svg)$/,
      //   use: 'url-loader?limit=100000&name=img/[name].[ext]',
      // },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.vue', '.json', '...'],
  },
};
