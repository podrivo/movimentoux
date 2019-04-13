var config = {
  'fonts': {
    'src': [
      './src/_assets/fonts/**/*'
    ],
    'dest': './dist/_assets/fonts'
  },
  'images': {
    'src': [
      './src/_assets/img/**/*.{gif,ico,png,jpg,jpeg,svg}'
    ],
    'dest': './dist/_assets/img'
  },
  'html': {
    'watch': [
      './src/**/*.pug'
    ],
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
    'lint': {
      'src': [
        './src/_assets/js/**/*.js'
      ]
    },
    'build': {
      'src': [
        './src/_assets/js/vendors/**/*.js',
        './src/_assets/js/plugins/**/*.js',
        './src/_assets/js/**/*.js'
      ],
      'dest': './dist/_assets/js'
    }
  },
  'styles': {
    'lint': {
      'src': [
        './src/_assets/css/**/*.{css,scss,sass}'
      ]
    },
    'build': {
      'src': [
        './src/_assets/css/main.scss'
      ],
      'dest': './dist/_assets/css'
    }
  },
  'media': {
    'src': [
      './src/_assets/img/**/*.{mp4,mp3}'
    ],
    'dest': './dist/_assets/img'
  }
};

module.exports = config;
