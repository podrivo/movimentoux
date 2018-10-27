var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');

var log = require('../log/log.js');
var notifyError = require('../notify/error.js');

module.exports = function(config, log, error, success) {
  gulp.task('html', function() {
    return gulp.src(config.html.src)
      .pipe(pug({
        pretty: true
      }))
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(gulp.dest(config.html.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop());
  });
};
