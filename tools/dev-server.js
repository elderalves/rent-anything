const webpack = require('webpack');
const Browsersync = require('browser-sync');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const webpackClientConfig = webpackConfig({ mode: 'development', type: 'client' });
webpackClientConfig.entry = [webpackClientConfig.entry, 'webpack-hot-middleware/client'];
webpackClientConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
webpackClientConfig.plugins.push(new webpack.NoEmitOnErrorsPlugin());

const serveBundler = webpack(webpackConfig({ mode: 'development', type: 'server' }));
const clientBundler = webpack(webpackClientConfig);

const middleware = [
  webpackDevMiddleware(serveBundler),
  webpackDevMiddleware(clientBundler),
  webpackHotMiddleware(clientBundler)
];
const bs = Browsersync.create();
bs.init({
  host: 'localhost',
  port: 3002,
  proxy: {
    target: 'http://localhost:3000/',
    middleware
  }
});
