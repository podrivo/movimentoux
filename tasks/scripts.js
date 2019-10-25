var gulp = require('gulp')
var plumber = require('gulp-plumber')
var runSequence = require('gulp4-run-sequence')
var concat = require('gulp-concat')
var eslint = require('gulp-eslint')
var uglify = require('gulp-uglify')
var babel = require('gulp-babel')

module.exports = function(config) {
  gulp.task('scripts:lint', function() {
    return gulp.src(config.scripts.lint)
      .pipe(babel({
        presets: ['@babel/preset-env']
      }))
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
  })

  gulp.task('scripts:concat', function() {
    return gulp.src(config.scripts.src)
      .pipe(plumber())
      .pipe(concat('main.min.js'))
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(plumber.stop())
  })

  gulp.task('scripts:uglify', function() {
    return gulp.src(config.scripts.src)
      .pipe(plumber())
      .pipe(concat('main.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(config.scripts.dest))
      .pipe(plumber.stop())
  })

  gulp.task('scripts:default', function(callback) {
    return runSequence('scripts:lint', ['scripts:concat'], callback)
  })

  gulp.task('scripts:build', function(callback) {
    return runSequence('scripts:lint', ['scripts:uglify'], callback)
  })
}
