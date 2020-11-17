const webpackConfig = require('@vue/cli-service/webpack.config')

module.exports = function(config) {
  config.set({
    frameworks: ['mocha'], // 你要用的测试框架列表
    files: ['tests/**/*.spec.js'], // 被测试文件列表，测试文件tests下的所有spec.js文件
    preprocessors: {
      // 预处理器：允许您在文件被提供给浏览器之前对其进行处理
      '**/*.spec.js': ['webpack', 'sourcemap']
    },
    autoWatch: true, // 自动观测
    webpack: webpackConfig,
    reporters: ['spec'],
    browsers: [
      // http://karma-runner.github.io/5.2/config/browsers.html
      'ChromeHeadless' // 无头浏览器，不会展示出来。其他参数如'Chrome'
    ]
  })
}
