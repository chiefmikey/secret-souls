import path from 'node:path';
import { Configuration } from 'webpack';

const SRC_DIR = path.join(path.resolve(), '/docs/src');
const DIST_DIR = path.join(path.resolve(), '/docs/public/dist');

const config: Configuration = {
  mode: 'development',
  entry: `${SRC_DIR}/index.ts`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      node: 'current',
                    },
                  },
                ],
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|ttf|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: '100000&name=img/[name].[ext]' },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
  },
  experiments: {
    topLevelAwait: true,
  },
  devtool: 'inline-source-map',
};

export default config;
