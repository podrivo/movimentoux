var config = {
  'base': {
    'dir': './src',
    'dist': './dist'
  },
  'html': {
    'watch': './src/**/*.pug',
    'src': [
      '!./src/components/**/*.pug',
      './src/pages/**/index.pug',
      './src/pages/404.pug'
    ],
    'dest': 'dist'
  },
  'scripts': {
    'watch': './src/assets/js/**/*.js',
    'lint': [
      './src/assets/js/**/*.js',
      '!./src/assets/js/plugins/*.js'
    ],
    'src': [
      './src/assets/js/plugins/*.js',
      './src/assets/js/global.js',
      './src/assets/js/components/*.js'
    ],
    'dest': './dist/assets/js'
  },
  'styles': {
    'watch': './src/assets/css/**/*.{css,scss,sass}',
    'lint': [
      './src/assets/css/**/*.{css,scss,sass}',
      '!./src/assets/css/plugins/*.{css,scss,sass}'
    ],
    'src': './src/assets/css/main.scss',
    'dest': './dist/assets/css'
  },
  'fonts': {
    'watch': './src/assets/fonts/**/*',
    'src': './src/assets/fonts/**/*',
    'dest': './dist/assets/fonts'
  },
  'media': {
    'watch': './src/assets/img/**/*.{gif,ico,png,jpg,jpeg,svg,mp4}'
  },
  'images': {
    'watch': './src/assets/img/**/*.{gif,ico,png,jpg,jpeg,svg}',
    'src': './src/assets/img/**/*.{gif,ico,png,jpg,jpeg,svg}',
    'dest': './dist/assets/img'
  },
  'videos': {
    'watch': './src/assets/img/**/*.mp4',
    'src': './src/assets/img/**/*.mp4',
    'dest': './dist/assets/img'
  },
  'sitemap': {
    'src': './dist/**/*.html',
    'dest': './dist/'
  },
  'files': {
    'src': [
      './src/_redirects',
      './src/robots.txt',
      './src/humans.txt'
    ],
    'dest': './dist'
  }
}

module.exports = config
