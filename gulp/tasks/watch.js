var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

module.exports = function(config, log, error, success) {
  gulp.task('watch', function() {
    browserSync.init({
      server: "./dist",
      port: 8000,
      ui: {
        port: 8001
      },
      open: false,
      notify: false
    });

    gulp.watch(config.fonts.src, ['fonts', reload]);
    gulp.watch(config.html.watch, ['html', reload]);
    gulp.watch(config.images.src, ['images', reload]);
    gulp.watch(config.scripts.build.src, ['scripts', reload]);
    gulp.watch(config.styles.lint.src, ['styles', reload]);
    gulp.watch(config.media.src, ['media', reload]);
  });
};
