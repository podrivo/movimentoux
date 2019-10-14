var gulp = require('gulp')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create()
var runSequence = require('gulp4-run-sequence')
var autoprefixer = require('autoprefixer')
var concat = require('gulp-concat')
var cleanCss = require('gulp-clean-css')
var mmq = require('gulp-merge-media-queries')
var postCss = require('gulp-postcss')
var sass = require('gulp-sass')
var sassLint = require('gulp-sass-lint')
var sassGlob = require('gulp-sass-glob')

module.exports = function(config, error) {
  gulp.task('styles:lint', function() {
    return gulp.src(config.styles.lint)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(sassLint({
        rules: {
          'single-line-per-selector': 0,
          'property-sort-order': 0,
          'force-pseudo-nesting': 0,
          'no-color-keywords': 0,
          'no-color-literals': 0,
          'no-css-comments': 0,
          'force-element-nesting': 0,
          'no-transition-all': 0,
          'leading-zero': 0,
          'no-vendor-prefixes': 0
        }
      }))
      .pipe(sassLint.format())
      .pipe(sassLint.failOnError())
      .pipe(plumber.stop())
  })

  gulp.task('styles:build', function() {
    return gulp.src(config.styles.src)
      .pipe(sassGlob())
      .pipe(sass({
        noCache: true
      }).on('error', error))
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(mmq({
        log: true
      }))
      .pipe(postCss([autoprefixer({
        browsers: ['last 2 version']
      })]))
      .pipe(concat('main.min.css'))
      .pipe(cleanCss({
        level: 0
      }))
      .pipe(gulp.dest(config.styles.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })

  gulp.task('styles', function(callback) {
    runSequence('styles:lint', ['styles:build'], callback)
  })
}
