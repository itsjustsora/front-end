module.exports = {
  outputDir: "../vuejs.spring-boot.study/src/main/resources/static",
  indexPath: "../static/index.html",
  devServer: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:8082'
      }
    }
  },
  configureWebpack: {
    entry: {
      app: './src/main.js',
      style: [
        'bootstrap/dist/css/bootstrap.min.css'
      ]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg")
    svgRule.uses.clear()
    svgRule.use("vue-svg-loader").loader("vue-svg-loader")
  }
}