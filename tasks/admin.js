var gulp = require('gulp')
var plumber = require('gulp-plumber')

module.exports = function(config) {
  gulp.task('admin', function() {
    return gulp.src(config.admin.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.admin.dest))
      .pipe(plumber.stop())
  })
}
