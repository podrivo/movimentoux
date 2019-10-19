var gulp = require('gulp')
var plumber = require('gulp-plumber')

module.exports = function(config) {
  gulp.task('fonts', function() {
    return gulp.src(config.fonts.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.fonts.dest))
      .pipe(plumber.stop())
  })
}
