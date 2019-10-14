var gulp = require('gulp')
var pug = require('gulp-pug')
var browserSync = require('browser-sync').create()
var plumber = require('gulp-plumber')
var sitemap = require('gulp-sitemap')

var log = require('../log/log.js')
var notifyError = require('../notify/error.js')

module.exports = function(config, log, error, success) {
  gulp.task('sitemap', function() {
    return gulp.src(config.sitemap.src)
      .pipe(sitemap({
        siteUrl: 'http://www.movimentoux.com'
      }))
      .pipe(plumber({
        errorHandler: error
      }))
      .pipe(gulp.dest(config.sitemap.dest))
      .pipe(browserSync.stream())
      .pipe(plumber.stop())
  })
}
