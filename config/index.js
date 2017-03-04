// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../../../public/home/index.html'),
    assetsRoot: path.resolve(__dirname, '../../../public/home/'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/q': {
        target: 'http://stu.dev/',
        changeOrigin: true,
        pathRewrite: {
          "^/q": '/q'
        }
      },
      '/notice': {
        target: 'http://stu.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/notice': '/notice'
        }
      },
      '/post': {
        target: 'http://stu.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/post': '/post'
        }
      },
      '/reply': {
        target: 'http://stu.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/reply': '/reply'
        }
      },
      '/favorite': {
        target: 'http://stu.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/favorite': '/favorite'
        }
      },
      '/publish': {
        target: 'http://stu.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/publish': '/publish'
        }
      },
      '/user': {
        target: 'http://stu.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/user': '/user'
        }
      },
      '/info': {
        target: 'http://stu.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/info': '/info'
        }
      },
      '/msg': {
        target: 'http://stu.dev',
        changeOrigin: true,
        pathRewrite: {
          '^/msg': '/msg'
        }
      },
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: true
  }
}
