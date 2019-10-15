var glob = require('glob')
var config = require('./gulpfile.config.js')

glob.sync('./tasks/*.js', {
  realpath: true
}).forEach(function(file) {
  require(file)(config, function() {
    callback()
  })
})
