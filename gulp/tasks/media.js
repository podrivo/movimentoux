var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var plumber = require('gulp-plumber')

// var log = require('../log/log.js')

module.exports = function(config) {
  gulp.task('media', function() {
    return gulp.src(config.media.src)
      .pipe(gulp.dest(config.media.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })
}
