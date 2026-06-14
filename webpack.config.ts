import path from 'node:path';

import type { Configuration } from 'webpack';

const SRC_DIR = path.join(path.resolve(), '/client/src');
const DIST_DIR = path.join(path.resolve(), '/docs/public/dist');

const config: Configuration = {
  devtool: 'inline-source-map',
  entry: `${SRC_DIR}/index.ts`,
  experiments: {
    topLevelAwait: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx|ts|tsx)$/,
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
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs'],
  },
};

export default config;
