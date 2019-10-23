var gulp = require('gulp')
var plumber = require('gulp-plumber')
var sitemap = require('gulp-sitemap')

module.exports = function(config) {
  gulp.task('sitemap', function() {
    return gulp.src(config.sitemap.src)
      .pipe(plumber())
      .pipe(sitemap({
        siteUrl: 'http://www.movimentoux.com'
      }))
      .pipe(gulp.dest(config.sitemap.dest))
      .pipe(plumber.stop())
  })
}
