var gulp = require('gulp')
var browserSync = require('browser-sync').create()

function reload(done) {
  browserSync.reload()
  done()
}

module.exports = function(config) {
  gulp.task('watch', function (done) {
    browserSync.init({
      server: config.base.dist,
      open: false,
      notify: false
    })
    done()

    gulp.watch(config.fonts.watch, gulp.series('fonts', reload))
    gulp.watch(config.html.watch, gulp.series('html', reload))
    gulp.watch(config.scripts.watch, gulp.series('scripts:default', reload))
    gulp.watch(config.styles.watch, gulp.series('styles', reload))
    gulp.watch(config.media.watch, gulp.series('media:default', reload))
    gulp.watch(config.admin.watch, gulp.series('admin', reload))
  })
}
