const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const Browsersync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const modeConfig = env => require(`./tools/webpack.${env}`)(env);
const presetConfig = require('./tools/loadPresets');

const webpackConfig = ({ mode, type, presets } = { mode: 'production', presets: [] }) => webpackMerge(
  {
    mode,
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [
            path.join(__dirname, './components'),
            path.join(__dirname, './core'),
            path.join(__dirname, './data'),
            path.join(__dirname, './routes'),
            path.join(__dirname, './client.js'),
            path.join(__dirname, './server.js')
          ],
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|wav|mp3)$/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    },
    plugins: [new webpack.ProgressPlugin()]
  },
  modeConfig(type),
  presetConfig({ mode, presets })
);


module.exports = webpackConfig;
