var config = {
  'baseDir': './src',
  'baseDist': './dist',
  'fonts': {
    'watch': './src/assets/fonts/**/*',
    'src': './src/assets/fonts/**/*',
    'dest': './dist/assets/fonts'
  },
  'images': {
    'watch': './src/assets/img/**/*.{gif,ico,png,jpg,jpeg,svg}',
    'src': './src/assets/img/**/*.{gif,ico,png,jpg,jpeg,svg}',
    'dest': './dist/assets/img'
  },
  'html': {
    'watch': './src/**/*.pug',
    'src': [
      '!./src/components/**/*.pug',
      './src/pages/**/index.pug'
    ],
    'dest': 'dist'
  },
  'sitemap': {
    'src': './dist/**/*.html',
    'dest': './dist/'
  },
  'scripts': {
    'watch': './src/assets/js/**/*.js',
    'lint': [
      './src/assets/js/**/*.js',
      '!./src/assets/js/plugins/*.js',
    ],
    'src': [
      './src/assets/js/plugins/*.js',
      './src/assets/js/global.js',
    ],
    'dest': './dist/assets/js'
  },
  'styles': {
    'watch': './src/assets/css/**/*.{css,scss,sass}',
    'lint': './src/assets/css/**/*.{css,scss,sass}',
    'src': './src/assets/css/main.scss',
    'dest': './dist/assets/css'
  },
  'media': {
    'watch': './src/assets/img/**/*.{mp4,mp3}',
    'src': './src/assets/img/**/*.{mp4,mp3}',
    'dest': './dist/assets/img'
  }
}

module.exports = config
