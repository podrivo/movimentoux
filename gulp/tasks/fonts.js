var gulp = require('gulp')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create()

module.exports = function(config, error) {
  gulp.task('fonts', function() {
    return gulp.src(config.fonts.src)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(gulp.dest(config.fonts.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })
}
