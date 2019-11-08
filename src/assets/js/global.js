var body = document.body
var html = document.body.parentNode

var episode = html.getAttribute('data-page') === 'episode'
var season = html.getAttribute('data-page') === 'season'
var mqSmall = window.matchMedia('(min-width: 768px)').matches
