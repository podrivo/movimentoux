var gulp = require('gulp')
var pug = require('gulp-pug')
var plumber = require('gulp-plumber')
var embedSvg = require('gulp-embed-svg')

module.exports = function(config) {
  gulp.task('html', function() {
    return gulp.src(config.html.src)
      .pipe(plumber())
      .pipe(pug({
        pretty: true,
        basedir: config.base.dir
      }))
      .pipe(embedSvg({
        root: config.base.dir
      }))
      .pipe(gulp.dest(config.html.dest))
      .pipe(plumber.stop())
  })
}
