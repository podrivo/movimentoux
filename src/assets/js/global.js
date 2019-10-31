var body = document.body
var episode = body.getAttribute('data-page') === 'episode'
var season = body.getAttribute('data-page') === 'season'
var mqSmall = window.matchMedia('(min-width: 768px)').matches
