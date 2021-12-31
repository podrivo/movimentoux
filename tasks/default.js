var gulp = require('gulp')
var runSequence = require('gulp4-run-sequence').use(gulp)

module.exports = function() {
  gulp.task('default', function(callback) {
    runSequence('clean', ['html', 'scripts:default', 'styles', 'media', 'fonts'], 'watch', callback)
  })
}
