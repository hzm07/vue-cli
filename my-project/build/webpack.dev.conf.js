'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

var glob = require('glob');
var htmls = glob.sync('./src/pages/**/*.html').map(function (item) {
  var names = item.split('/')

  return new HtmlWebpackPlugin({
    // filename: './' + item.slice(6),
    filename: './'+ names[2]+'/'+names[4],    //相当于url
    template: item,                           //文件路径
    inject: true,
    chunks:[item.slice(6, -5)]
  });
});



// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({   // 编译时配置的全局变量
      'process.env': config.dev.env  //当前环境为开发环境
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.HotModuleReplacementPlugin(),  //热更新插件
    new webpack.NoEmitOnErrorsPlugin(),   //不触发错误,即编译后运行的包正常运行
    // https://github.com/ampedandwired/html-webpack-plugin
    /*new HtmlWebpackPlugin({     //自动生成html插件,引入css文件和js文件
      filename: 'index.html',   //生成的文件名
      template: 'index.html',   //依据的模板
      inject: true
    }),*/    
    new FriendlyErrorsPlugin()  //友好的错误提示
  ].concat(htmls)
})
