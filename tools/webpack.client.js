const path = require('path');

module.exports = () => ({
  entry: path.join(__dirname, '../client.js'),
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../build/public'),
    filename: 'client.js'
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
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:3]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: loader => [
                require('postcss-import')({ root: loader.resourcePath }),
                require('precss')(),
                require('autoprefixer')()
              ]
            }
          }
        ]
      }
    ]
  }
});
