const path = require('path')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(filePath) {
  return path.join(__dirname, filePath)
}
module.exports = {
  publicPath: '/',
  devServer: {
    host: 'dev.xingorg1-ui.com',
    port: 8080,
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('packages', resolve('packages'))
      .set('comp', resolve('src/components'))
      .set('style', resolve('styles'))
  },
  configureWebpack: {
    // plugins: [
    //   new HtmlWebpackPlugin({
    //     title: '组件库',
    //     template: 'public/index.html'
    //   })
    // ]
  }
}
