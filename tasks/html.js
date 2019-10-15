var gulp = require('gulp')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create()
var pug = require('gulp-pug')
var embedSvg = require('gulp-embed-svg')

module.exports = function(config) {
  gulp.task('html', function() {
    return gulp.src(config.html.src)
      .pipe(pug({
        pretty: true,
        basedir: config.base.dir
      }))
      .pipe(embedSvg({
        root: config.base.dir
      }))
      .pipe(gulp.dest(config.html.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })
}
