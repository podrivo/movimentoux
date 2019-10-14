var gulp = require('gulp')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create()

module.exports = function(config) {
  gulp.task('fonts', function() {
    return gulp.src(config.fonts.src)
      .pipe(gulp.dest(config.fonts.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })
}
