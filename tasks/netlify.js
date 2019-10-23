var gulp = require('gulp')
var plumber = require('gulp-plumber')

module.exports = function(config) {
  gulp.task('netlify', function() {
    return gulp.src(config.netlify.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.netlify.dest))
      .pipe(plumber.stop())
  })
}
