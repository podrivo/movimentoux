var gulp = require('gulp')
var runSequence = require('gulp4-run-sequence').use(gulp)

module.exports = function() {
  gulp.task('default', function(callback) {
    runSequence('clean', ['fonts', 'html', 'images', 'scripts', 'styles', 'media'], 'sitemap', callback)
  })
}
