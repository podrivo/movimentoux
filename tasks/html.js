var gulp = require('gulp')
var pug = require('gulp-pug')
var plumber = require('gulp-plumber')
var runSequence = require('gulp4-run-sequence')
var inline = require('gulp-inline')

module.exports = function(config) {
  gulp.task('pug', function () {
    return gulp.src(config.html.src)
      .pipe(plumber())
      .pipe(pug({
        pretty: true,
        basedir: config.base.dir
      }))
      .pipe(gulp.dest(config.html.dest))
      .pipe(plumber.stop())
  })

  gulp.task('svg', function () {
    return gulp.src(config.html.svg)
      .pipe(plumber())
      .pipe(inline({
        base: config.base.dir,
        disabledTypes: ['css', 'js'],
      }))
      .pipe(gulp.dest(config.html.dest))
      .pipe(plumber.stop())
  })

  gulp.task('html', function (callback) {
    return runSequence('pug', 'svg', callback)
  })
}
