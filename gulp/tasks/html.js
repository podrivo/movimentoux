var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var embedSvg = require('gulp-embed-svg');

// var log = require('../log/log.js');

module.exports = function(config, error) {
  gulp.task('html', function() {
    return gulp.src(config.html.src)
      .pipe(pug({
        pretty: true,
        basedir: './src'
      }))
      .pipe(embedSvg({
        root: './src'
      }))
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(gulp.dest(config.html.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop());
  });
};
