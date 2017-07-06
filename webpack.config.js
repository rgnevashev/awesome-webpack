var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (env) {

  env = env || process.env.NODE_ENV || 'development'

  var plugins = [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.ejs')
    })
  ]

  if (env === 'development') {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  if (env === 'production') {
    plugins.push(new ExtractTextPlugin('styles.css'))
  }

  return {
    context: path.resolve(__dirname, 'src'),
    entry: [
      './index.js'
    ],
    output: {
      path: env === 'development' ? path.resolve(__dirname, 'public') : path.resolve(__dirname, 'dist'),
      filename: env === 'development' ? '[name].bundle.js' : '[hash].js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        },
        {
          test: /\.css$/,
          use: env === 'production' ?
            ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: 'css-loader'
            }) : ['style-loader', 'css-loader']
        },
        {
          test: /\.(jpg|png|gif)$/,
          use: 'file-loader'
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        }
      ]
    },
    plugins: plugins,
    resolve: {
      alias: {
        App: path.resolve(__dirname, 'src'),
        Components: path.resolve(__dirname, 'src', 'components'),
        Containers: path.resolve(__dirname, 'src', 'containers'),
        Actions: path.resolve(__dirname, 'src', 'actions'),
        Reducers: path.resolve(__dirname, 'src', 'reducers')
      },
      extensions: ['.js', '.css', '*'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    devServer: {
      proxy: {
        '/api': 'http://192.168.0.64:3000'
      },
      contentBase: path.resolve(__dirname, 'public'),
      host: '192.168.0.64',
      port: 9000,
      publicPath: '/',
      historyApiFallback: true,
      hot: true,
      inline: true,
      overlay: {
        warnings: true,
        errors: true
      }
    },
    devtool: env === 'development' ? 'eval' : 'source-map',
    target: 'web'
  }
}
