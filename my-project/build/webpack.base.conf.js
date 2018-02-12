'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

var glob = require('glob');
var entries = glob.sync('./src/pages/**/*.js').reduce(function (prev, curr) {
  prev[curr.slice(6, -3)] = curr;
  return prev;
}, {});


function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
/*entries.app = './src/main.js';
console.log(entries)*/

module.exports = {
  // entry: {
  //   'pages/boys/index': './src/pages/boys/boys.js', //配置boys页面入口
  //   'pages/goods/index': './src/pages/goods/boys.js', //配置goods页面入口
  //   'pages/index/index': './src/pages/index/boys.js', //配置index页面入口
  //   'pages/sotho/index': './src/pages/sotho/boys.js', //配置sotho页面入口
  // },
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
