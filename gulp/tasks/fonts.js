var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');

// var log = require('../log/log.js');

module.exports = function(config, error) {
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
