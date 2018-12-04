var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');
var imagemin = require('gulp-imagemin');
var mozjpeg = require('imagemin-mozjpeg');
var plumber = require('gulp-plumber');

var log = require('../log/log.js');
var notifyError = require('../notify/error.js');

module.exports = function(config, log, error, success) {
  gulp.task('images', function() {
    return gulp.src(config.images.src)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(imagemin([
        mozjpeg()
      ]))
      .pipe(gulp.dest(config.images.dest))
      .pipe(browserSync.stream())
    .pipe(plumber.stop());
  });
};
