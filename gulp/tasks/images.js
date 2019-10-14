var gulp = require('gulp')
var plumber = require('gulp-plumber')
var browserSync = require('browser-sync').create()
var imagemin = require('gulp-imagemin')
var mozjpeg = require('imagemin-mozjpeg')

module.exports = function(config, error) {
  gulp.task('images', function() {
    return gulp.src(config.images.src)
      .pipe(imagemin([
        mozjpeg()
      ]))
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(gulp.dest(config.images.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })
}
