var gulp = require('gulp')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create()

module.exports = function(config) {
  gulp.task('media', function() {
    return gulp.src(config.media.src)
      .pipe(gulp.dest(config.media.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })
}
