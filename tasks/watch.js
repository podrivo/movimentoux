var gulp = require('gulp')
var browserSync = require('browser-sync').create()

function reload(done) {
  browserSync.reload()
  done()
}

module.exports = function(config) {
  gulp.task('watch', function() {
    browserSync.init({
      server: config.baseDist,
      port: 8000,
      ui: {
        port: 8001
      },
      open: false,
      notify: false
    })

    gulp.watch(config.fonts.watch, gulp.series('fonts', reload))
    gulp.watch(config.html.watch, gulp.series('html', reload))
    gulp.watch(config.images.watch, gulp.series('images', reload))
    gulp.watch(config.scripts.watch, gulp.series('scripts', reload))
    gulp.watch(config.styles.watch, gulp.series('styles', reload))
    gulp.watch(config.media.watch, gulp.series('media', reload))
  })
}
