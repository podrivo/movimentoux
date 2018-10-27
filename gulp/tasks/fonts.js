var gulp = require('gulp');
var gutil = require('gulp-util');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');

var log = require('../log/log.js');
var notifyError = require('../notify/error.js');

module.exports = function(config, log, error, success) {
  gulp.task('fonts', function() {
    return gulp.src(config.fonts.src)
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(gulp.dest(config.fonts.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop());
  });
};
