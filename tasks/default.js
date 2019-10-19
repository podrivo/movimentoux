var gulp = require('gulp')
var runSequence = require('gulp4-run-sequence').use(gulp)

module.exports = function() {
  gulp.task('default', function(callback) {
    runSequence('clean', ['html', 'scripts', 'styles', 'media', 'fonts'], 'sitemap', 'netlify', callback)
  })
}
