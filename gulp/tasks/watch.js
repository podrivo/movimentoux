var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var reload = browserSync.reload

module.exports = function(config) {
  gulp.task('watch', function() {
    browserSync.init({
      server: './dist',
      port: 8000,
      ui: {
        port: 8001
      },
      open: false,
      notify: false
    })

    gulp.watch(config.fonts.src, gulp.series('fonts', reload))
    gulp.watch(config.html.watch, gulp.series('html', reload))
    gulp.watch(config.images.src, gulp.series('images', reload))
    gulp.watch(config.scripts.build.src, gulp.series('scripts', reload))
    gulp.watch(config.styles.lint.src, gulp.series('styles', reload))
    gulp.watch(config.media.src, gulp.series('media', reload))
  })
}
