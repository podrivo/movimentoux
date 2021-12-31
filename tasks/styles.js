var gulp = require('gulp')
var plumber = require('gulp-plumber')
var runSequence = require('gulp4-run-sequence')
var autoprefixer = require('autoprefixer')
var concat = require('gulp-concat')
var cleanCSS = require('gulp-clean-css')
var mmq = require('gulp-merge-media-queries')
var postCSS = require('gulp-postcss')
var sass = require('gulp-sass')(require('sass'))
var sassLint = require('gulp-sass-lint')
var sassGlob = require('gulp-sass-glob')

module.exports = function(config) {
  gulp.task('styles:lint', function() {
    return gulp.src(config.styles.lint)
      .pipe(sassLint({
        rules: {
          'single-line-per-selector': 0,
          'property-sort-order': 0,
          'force-pseudo-nesting': 0,
          'no-color-keywords': 0,
          'no-color-literals': 0,
          'no-css-comments': 0,
          'no-transition-all': 0,
          'no-vendor-prefixes': 0,
          'no-important': 0,
          'force-element-nesting': 0,
          'leading-zero': 0
        }
      }))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError())
  })

  gulp.task('styles:build', function() {
    return gulp.src(config.styles.src)
      .pipe(plumber())
      .pipe(sassGlob())
      .pipe(sass())
      .pipe(mmq())
      .pipe(postCSS([autoprefixer()]))
      .pipe(concat('main.min.css'))
      .pipe(cleanCSS({
        level: 0
      }))
      .pipe(gulp.dest(config.styles.dest))
      .pipe(plumber.stop())
  })

  gulp.task('styles', function(callback) {
    runSequence('styles:lint', ['styles:build'], callback)
  })
}
