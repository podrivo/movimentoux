var gulp = require('gulp')
var plumber = require('gulp-plumber')

module.exports = function(config) {
  gulp.task('media', function() {
    return gulp.src(config.media.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.media.dest))
      .pipe(plumber.stop())
  })
}
