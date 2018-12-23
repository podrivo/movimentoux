var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');

var log = require('../log/log.js');
var notifyError = require('../notify/error.js');

module.exports = function(config, log, error, success) {
  gulp.task('media', function() {
    return gulp.src(config.media.src)
      .pipe(gulp.dest(config.media.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop());
  });
};
