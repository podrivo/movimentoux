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
    'src': [
      './src/index.pug'
    ],
    'dest': 'dist'
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
  }
};

module.exports = config;
