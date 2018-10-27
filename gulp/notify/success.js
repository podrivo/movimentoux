var gulp = require('gulp');
var gutil = require('gulp-util');

module.exports = function () {
  var msg = gutil.colors.bgBlack(' ✨  ') + gutil.colors.black.bgGreen(' Finished building! ');
  console.log(msg);
};
