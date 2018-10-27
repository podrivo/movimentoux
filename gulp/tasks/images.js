var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cache = require('gulp-cache');
var imageMin = require('gulp-imagemin');
var plumber = require('gulp-plumber');

var log = require('../log/log.js');
var notifyError = require('../notify/error.js');

module.exports = function(config, log, error, success) {
  gulp.task('images', function() {
    return gulp.src(config.images.src)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(cache(imageMin()))
      .pipe(gulp.dest(config.images.dest))
      .pipe(browserSync.stream())
    .pipe(plumber.stop());
  });
};
