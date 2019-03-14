var gulp = require('gulp');
var pug = require('gulp-pug');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var embedSvg = require('gulp-embed-svg');
var version = require('gulp-version-number');

var log = require('../log/log.js');
var notifyError = require('../notify/error.js');

module.exports = function(config, log, error, success) {
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
      .pipe(version({
        'append': {
          'key': 'v',
          'to': ['css', 'js', 'image']
        }
      }))
      .pipe(gulp.dest(config.html.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop());
  });
};
