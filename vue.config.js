const isProd = process.env.NODE_ENV === 'production'
const path = require('path')
const fs = require('fs')
// const HtmlWebpackPlugin = require('html-webpack-plugin')
function resolve(filePath) {
  return path.join(__dirname, filePath)
}
const getEntries = dir => {
  let absolutionPath = path.resolve(dir)
  let sonFiles = fs.readdirSync(absolutionPath)
  let entries = {}
  sonFiles.forEach(file => {
    let fileDirPath = path.join(absolutionPath, file)
    if (fs.statSync(fileDirPath).isDirectory()) {
      let filePath = path.join(fileDirPath, 'index.js')
      entries[file] = filePath
    }
  })
  return entries
}
const commonConfig = {
  publicPath: '/',
  devServer: {
    host: 'dev.axe-ui.com',
    port: 8080,
    disableHostCheck: true
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('packages', resolve('packages'))
      .set('comp', resolve('src/components'))
      .set('axe-ui', resolve('./'))
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
let buildConfig = {}
// 按需加载（build命令&&后第二个脚本，为按需加载打包）
const args = process.argv.slice(2)
if (isProd && args.includes('--axe')) {
  buildConfig = {
    outputDir: 'dist',
    configureWebpack: {
      entry: {
        ...getEntries('./packages')
      },
      output: {
        filename: 'lib/[name]/index.js',
        libraryTarget: 'umd',
        libraryExport: 'default',
        library: ['axe', '[name]']
      },
      externals: {
        vue: {
          root: 'Vue',
          commonjs: 'vue',
          commonjs2: 'vue',
          amd: 'vue'
        }
      }
    },
    css: {
      sourceMap: true,
      extract: {
        filename: 'css/[name]/style.css'
      }
    },
    chainWebpack: config => {
      config.optimization.delete('splitChunks')
      config.plugins.delete('copy')
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      config.plugins.delete('html')
      config.plugins.delete('hmr')
      config.entryPoints.delete('app')
    }
  }
}

module.exports = !isProd
  ? commonConfig
  : Object.assign(commonConfig, buildConfig)
