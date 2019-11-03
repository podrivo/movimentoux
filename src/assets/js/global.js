var body = document.body
var episode = body.getAttribute('data-page') === 'episode'
var season = body.getAttribute('data-page') === 'season'
var mqSmall = window.matchMedia('(min-width: 768px)').matches

if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", function (user) {
    if (!user) {
      window.netlifyIdentity.on("login", function () {
        document.location.href = "/admin/";
      });
    }
  });
}