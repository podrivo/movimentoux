var gulp = require('gulp')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create()
var runSequence = require('gulp4-run-sequence')
var concat = require('gulp-concat')
var eslint = require('gulp-eslint')
var uglify = require('gulp-uglify')

module.exports = function(config, error) {
  gulp.task('scripts:lint', function() {
    return gulp.src(config.scripts.lint.src)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(plumber.stop())
  })

  gulp.task('scripts:build', function() {
    return gulp.src(config.scripts.build.src)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(config.scripts.build.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })

  gulp.task('scripts', function(callback) {
    return runSequence('scripts:lint', 'scripts:build', callback)
  })
}
