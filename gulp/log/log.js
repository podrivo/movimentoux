var gulp = require('gulp');
var gutil = require('gulp-util');
var through = require('through2');

module.exports = function(data) {
  console.log();
  if (data.header) {
    console.log(gutil.colors.yellow(data.header));
  }
  var count = 0;
  return through.obj(function(file, encoding, callback) {
    var items = [];
    var path = file.path.replace(process.cwd() + '/', '');
    items.push(gutil.colors.green(path));
    console.log(items.join(''));
    count++;
    return callback(null, file);
  }, function(callback) {
    callback();
  });
};
