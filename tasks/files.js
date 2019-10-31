var gulp = require('gulp')
var plumber = require('gulp-plumber')

module.exports = function(config) {
  gulp.task('files', function() {
    return gulp.src(config.files.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.files.dest))
      .pipe(plumber.stop())
  })
}
