const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = () => ({
  entry: path.join(__dirname, '../server.js'),
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [
          path.join(__dirname, '../components')
        ],
        use: [
          {
            loader: 'node-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:3]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3002,
      proxy: {
        target: 'http://localhost:3000/'
      },
      files: [
        '**/*.css'
      ]
    })
  ],
  target: 'node',
  node: {
    console: false,
    global: false,
    proccess: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: /ˆ[a-z][a-z\/\.\-0-9]*$/i
});
