var gulp = require('gulp');
var del = require('del');

module.exports = function(config, log, error, success) {
  gulp.task('clean', function() {
    return del('./dist');
  });
};
