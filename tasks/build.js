var gulp = require('gulp')
var runSequence = require('gulp4-run-sequence').use(gulp)

module.exports = function() {
  gulp.task('build', function(callback) {
    runSequence('clean', ['html', 'scripts:build', 'styles', 'media:build', 'fonts'], 'sitemap', 'files', 'admin', callback)
  })
}
