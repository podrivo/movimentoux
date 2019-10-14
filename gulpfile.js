var glob = require('glob')
var config = require('./gulp/settings/config')

glob.sync('./gulp/tasks/*.js', {
  realpath: true
}).forEach(function(file) {
  require(file)(config, function() {
    callback()
  })
})
