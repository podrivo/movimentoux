var gulp = require('gulp')
var plumber = require('gulp-plumber')
var runSequence = require('gulp4-run-sequence')
var imagemin = require('gulp-imagemin')
var mozjpeg = require('imagemin-mozjpeg')

module.exports = function(config) {
  gulp.task('media:videos', function() {
    return gulp.src(config.videos.src)
      .pipe(plumber())
      .pipe(gulp.dest(config.videos.dest))
      .pipe(plumber.stop())
  })

  gulp.task('media:images', function () {
    return gulp.src(config.images.src)
      .pipe(plumber())
      .pipe(imagemin([
        mozjpeg()
      ]))
      .pipe(gulp.dest(config.images.dest))
      .pipe(plumber.stop())
  })

  gulp.task('media', function (callback) {
    return runSequence('media:images', 'media:videos', callback)
  })
}
