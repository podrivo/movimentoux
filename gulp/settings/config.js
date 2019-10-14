var config = {
  'baseDir': './src',
  'baseDist': './dist',
  'fonts': {
    'watch': './src/_assets/fonts/**/*',
    'src': './src/_assets/fonts/**/*',
    'dest': './dist/_assets/fonts'
  },
  'images': {
    'watch': './src/_assets/img/**/*.{gif,ico,png,jpg,jpeg,svg}',
    'src': './src/_assets/img/**/*.{gif,ico,png,jpg,jpeg,svg}',
    'dest': './dist/_assets/img'
  },
  'html': {
    'watch': './src/**/*.pug',
    'src': [
      '!./src/_assets/pug/**/*.pug',
      './src/**/index.pug'
    ],
    'dest': 'dist'
  },
  'sitemap': {
    'src': './dist/**/*.html',
    'dest': './dist/'
  },
  'scripts': {
    'watch': './src/_assets/js/**/*.js',
    'lint': './src/_assets/js/**/*.js',
    'src': './src/_assets/js/**/*.js',
    'dest': './dist/_assets/js'
  },
  'styles': {
    'watch': './src/_assets/css/**/*.{css,scss,sass}',
    'lint': './src/_assets/css/**/*.{css,scss,sass}',
    'src': './src/_assets/css/main.scss',
    'dest': './dist/_assets/css'
  },
  'media': {
    'watch': './src/_assets/img/**/*.{mp4,mp3}',
    'src': './src/_assets/img/**/*.{mp4,mp3}',
    'dest': './dist/_assets/img'
  }
}

module.exports = config
