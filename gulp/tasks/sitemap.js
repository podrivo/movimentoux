var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var plumber = require('gulp-plumber')
var sitemap = require('gulp-sitemap')

module.exports = function(config, error) {
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
