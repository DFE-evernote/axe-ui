const path = require('path')

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
  }
}
