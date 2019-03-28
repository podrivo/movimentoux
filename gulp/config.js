var config = {
  'fonts': {
    'src': [
      './src/fonts/**/*'
    ],
    'dest': './dist/fonts'
  },
  'images': {
    'src': [
      './src/img/**/*.{gif,ico,png,jpg,jpeg,svg}'
    ],
    'dest': './dist/img'
  },
  'html': {
    'watch': [
      './src/**/*.pug'
    ],
    'src': [
      '!./src/pug/**/*.pug',
      './src/**/*.pug'
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
        './src/js/**/*.js'
      ]
    },
    'build': {
      'src': [
        './src/js/vendors/**/*.js',
        './src/js/plugins/**/*.js',
        './src/js/**/*.js'
      ],
      'dest': './dist/js'
    }
  },
  'styles': {
    'lint': {
      'src': [
        './src/css/**/*.{css,scss,sass}'
      ]
    },
    'build': {
      'src': [
        './src/css/main.scss'
      ],
      'dest': './dist/css'
    }
  },
  'media': {
    'src': [
      './src/img/**/*.{mp4,mp3}'
    ],
    'dest': './dist/img'
  }
};

module.exports = config;
